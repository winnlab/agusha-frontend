import can from 'can/' 

export default can.Model.extend( 'Profile',
	{
		id: '_id',
		resource: '/profile/crud',
		parseModels: function(data) {
			return data;
		}
	}, {}
);