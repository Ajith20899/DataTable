
export const Headers = Array.from(Array(1)).map((_, i) => ({
	key: i,
	head1: '#',
	head2: 'Name',
	head3: 'Level',
	head4: 'Status',
	head5: 'price',
	head6: 'amount',
	head7: 'action'
}));
export const Data = Array.from(Array(350)).map((_, i) => ({
	key: i,
	cell1: i + 1,
	cell2: 'Arun',
	cell3: 'level-'+i,
	cell4: 'Action',
}));