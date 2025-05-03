//FIC: genera subdocumento detail_row
//si no se envian los parametros los valores los asigna por default
export const getDetailRow = () => {
	return {
		ACTIVED: {type: Boolean},
		DELETED: {type: Boolean},
        detail_row_reg: [ getDetailRowReg() ],
	};
};

//FIC: genera subdocumento array detail_row_reg
//si no se envia el parametro el valor lo asigna por default
export const getDetailRowReg = () => {
	return {
        CURRENT: {type: Boolean},
		REGDATE: {type: Date},
        REGTIME: {type: Date},
		REGUSER: {type: String},
	};
};