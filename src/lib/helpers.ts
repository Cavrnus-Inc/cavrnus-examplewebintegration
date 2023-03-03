import * as C from '@cavrnus/lib';

export function sortRoomsByLastAccessDateAndHideHiddens(roomssrc : C.Api.Room[], useremail : string) : C.Api.Room[]
{
	var roomsvisible = roomssrc.filter(r=>(C.Api.roomGetMyMembershipInfo(r, useremail)?.hidden ?? false) === false);
	return roomsvisible.sort((a,b)=>
	{
		const membershipA = C.Api.roomGetMyMembershipInfo(a, useremail);
		const membershipB = C.Api.roomGetMyMembershipInfo(b, useremail);
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

}