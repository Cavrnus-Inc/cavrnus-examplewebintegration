<template>
  <q-page class="row items-center justify-evenly q-pa-xl">
	<q-stepper v-model="step" horizontal color="primary" animated class="full-height full-width ">
		<q-step :name="0" title="Log In to Cavrnus" icon="settings" :done="step > 0">
			<q-form @submit.prevent="login">
				<div class="column">
						<q-input v-model="domain" label="Cavrnus Domain Server" hint="cavrnus.cavrn.us"/>
						<q-input v-model="username" label="Username" type="email" hint="Usually your email"/>
						<q-input v-model="passwd" label="Password" type="password"  />
				</div>
				<q-stepper-navigation>
					<q-btn @click="login()" type="submit" color="primary" label="Log In" />
				</q-stepper-navigation>
			</q-form>
		</q-step>
		<q-step :name="1" title="Pick a Cavrnus Space to Join" :done="step > 1">
			<q-list class="row">
				<q-btn v-for="room in rooms" :key="room._id" style="width: 220px" @click="selectRoom(room)">
					<q-card class="q-pa-none hoverable">
						<q-img class="col" :src="room.thumbnailContentUrl" :ratio="2"/>
						<q-card-section class="q-pa-none q-px-sm q-pt-xs">
							<div class="text-body2 text-left text-weight-light q-pa-none">
								{{room.name}}
							</div>
							<div class="text-caption text-left text-weight-light q-pa-none grey6">
								{{room.modifiedAt}}
							</div>
						</q-card-section>
					</q-card>
				</q-btn> 
			</q-list>	
			<q-stepper-navigation>
				<q-btn @click="step = 0" color="secondary" label="Back" /> 
				<span class="q-mx-sm"></span>
				<q-btn @click="step = 2" color="primary" label="Select" />
			</q-stepper-navigation>
		</q-step>	
		<q-step :name="2" title="Stream the Room" :done="step > 2">
			<h4>{{room?.name}}</h4>
			<div class="row full-width full-height">
				<div class="col-4 primary">
					Streaming Section
				</div>
				<div class="secondary col-8 column">
					Communications Section
					<q-space/>
					<div class="row">
						<q-list class="col-6 column">
							<q-card v-for="user in users" :key="user.connectionId" class="hoverable q-ma-sm">
								<q-card-section class="q-pa-none q-px-sm q-pt-xs secondary">
									{{C.Conn.userProfileDisplayName(user.userProfile.get())}}
								</q-card-section>
							</q-card>
						</q-list>
						<div class="col-6 column">
							<div class="row-4 q-my-lg">
								<div>Property Name to view and alter: </div>
								<q-input type="text" v-model="propertyName" class="primary"/>
								<q-btn type="submit" @click="hookPropertyValue">Set Watched Property</q-btn>
							</div>
							<div class="row-4 q-my-lg">
								<div>Current Value of {{ propertyName }}:</div>
								<div>{{ livePropertyValue }}</div>
							</div>
							<div class="row-4 q-my-lg">
								<div>Assign value of {{ propertyName }}</div>
								<q-input type="text" v-model="assignPropertyValue"/>
								<q-btn type="submit" @click="writePropertyValue(assignPropertyValue)">Update Property Value</q-btn>
							</div>
						</div>
					</div>
				</div>
			</div>
			<q-stepper-navigation>
				<q-btn @click="leaveRoom()" color="secondary" label="Back" /> 
			</q-stepper-navigation>
		</q-step>	

	</q-stepper>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as C from '@cavrnus/lib';

// 'Wizard' step sequence/ UI integration
const step = ref<number>(0);

// Log-in information
const domain = ref<string>("unittest.dev.cavrn.us");
const username = ref<string>("testuser@example.com");
const passwd = ref<string>("testuser");

// Authorized/logged in api object.
let api : C.Api.CavrnusApiUser|undefined = undefined;

let rooms = ref<C.Api.Room[]>([])

// Selected and joined room/spce
let room = ref<C.Api.Room|undefined>(undefined);

let conn : C.Conn.SessionConnection|undefined = undefined;
let users = ref<C.Conn.SessionUser[]>([]);
let usershook : C.V.Offable | undefined = undefined;

let propertyName = ref<string>("/room/testproperty");
let livePropertyValue = ref<string>("");
let assignPropertyValue = ref<string>("");

// Step 0->1, logging in.
async function login()
{
	try
	{
		// Build an API object with which to log in.
		const apiAnon = C.Api.CavrnusApi.fromDomain(domain.value);

		// Log in! Retain the authorized api object for later.
		api = await C.Api.loginUser(apiAnon, {email:username.value, password:passwd.value});

		// In this example, we present the user a list of their already-created spaces. You might alternatively fetch the list and scan it for an appropriate room,
		// or simplify have hardcoded the room id.
		var roomssrc = await C.Api.roomGetParticipating(api);

		// Filter out archived/hidden rooms, sort by access date. This is of course optional and just part of this example UI.
		var roomsvisible = roomssrc.filter(r=>(C.Api.roomGetMyMembershipInfo(r, username.value)?.hidden ?? false) === false);
		rooms.value = roomsvisible.sort((a,b)=>
		{
			const membershipA = C.Api.roomGetMyMembershipInfo(a, username.value);
			const membershipB = C.Api.roomGetMyMembershipInfo(b, username.value);
			if (membershipA?.lastAccess == undefined)
			{
				if (membershipB?.lastAccess == undefined)
					return 0;
				else
					return -1;
			}
			else if (membershipB?.lastAccess == undefined)
				return 1;
			else
				return membershipA?.lastAccess > membershipB?.lastAccess ? -1 : 1;
		});

		// Proceed to next step in the UI wizard.
		step.value = 1;
	}
	catch (e)
	{
		console.error(e);
	}
}

// Step 1->2, a room has been picked, set up a streaming window and connect to the live room to set up bidirectional communications.
async function selectRoom(joinroom: C.Api.Room)
{
	try
	{
		room.value = joinroom;

		if (api === undefined)
			throw new Error(`API is not set`);

		// Begin a local connection to the room, for communication with the remote stream.
		conn = await C.Conn.connectSession(api, joinroom._id);

		usershook = C.V.mapintoarray(conn.users.users, users.value, (u1, u2)=>u1.connectionId > u2.connectionId ? 1 : -1);

		hookPropertyValue();

		step.value = 2;
	}
	catch (e)
	{
		console.error(e);
	}
}

let propertyHook : C.V.Offable|undefined = undefined;

function hookPropertyValue()
{
	if (propertyHook)
		propertyHook.off();
	propertyHook = undefined;

	if (conn === undefined)
		return;

	console.log(`Declaring and hooking prop: ${propertyName.value}...`);

	// We're going to declare the property in teh room journal to make it visible to other client UIs here. This is optional
	conn.sendOp({declareProperty:{
		v1:{
			propId: {id: propertyName.value},
			decl: {
				string:{
					default: 'unset',
					meta: {
						base: {
							name: `${propertyName.value} - ExampleWebIntegration`,
							description: 'Property used for communicating with the example web integration',
							category: 'testing',
							categoryOrder: -100
						}
					}
				}
			}
		}
	}});

	propertyHook = C.V.bind(conn.journal.properties.searchForStringProperty(propertyName.value).current,
		(v)=>livePropertyValue.value = v);
}

function writePropertyValue(setTo : string) : void
{
	if (conn === undefined)
		return;

	conn.sendOp({
		updatePropertyValue: {
			v1: {
				string: {
					assignmentId: "-", priority: 0,
					value: { constant: setTo }
				},
				propId: { id: propertyName.value },
			}
		}
	});
}

async function leaveRoom()
{
	try
	{
		if (propertyHook)
			propertyHook.off();
		propertyHook = undefined;

		room.value = undefined;

		if (usershook !== undefined)
			usershook.off();
		usershook = undefined;
		if (conn !== undefined)
			conn.disconnect();
		users.value = [];

		step.value = 1;
	}
	catch (e)
	{
		console.error(e);
	}

}

</script>
