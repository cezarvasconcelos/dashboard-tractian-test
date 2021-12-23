const filtraUnitId = (array, id) => {
	let arrFiltred;
	// != 0 pois representa o 'TODOS"
	if (id !== 0) {
		arrFiltred = array.filter((el) => el.unitId === id);
	} else {
		arrFiltred = array;
	}
	return arrFiltred;
};

export default filtraUnitId;