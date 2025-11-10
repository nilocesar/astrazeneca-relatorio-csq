/**
 * @class Indicador
 * @description Classe que representa um indicador
 */
class Indicador {
	/**
	 * 
	 * @param {DOMElement} element elemento dom do indicador
	 * @param {Object} registros dados carrecados de scorm
	 * @param {Function} save função de callback para salvar os dados quando usados os metodos de add e remove
	 */
	constructor(element, registros, save) {
		this.name = element.id;
		this._element = element;
		this._registros = registros || [];
		this._save = save;
		this.valorMax = parseFloat(element.getAttribute('data-total')) || 100;
		this.updateView();
	}

	updateView() {
		var barra = this._element.querySelector('.bar');
		barra.style.width = this.total() / this.valorMax * 100 + '%';
	}
	/**
	 * Adiciona um registro ao indicador, para não haver duplicidade, ou repetição de registro, utilizamos um identificador unico(uid), normalmente o id da tela.
	 * @param {String} uid 
	 * @param {Float} value 
	 */
	add(uid, value) {
		let novo_registro = {
			uid: uid,
			value: value
		};
		if (this._registros.findIndex(registro => registro.uid == uid) == -1) {
			this._registros.push(novo_registro);
		}
		this._save();
		this.updateView();
	}
	/**
	 * Verifica se já existe um registro do uid informado
	 * @param {*} uid 
	 */
	contains(uid) {
		let indice = this._registros.findIndex(registro => registro.uid == uid);
		return indice > -1;
	}
	/**
	 * Remove um registro relacionado a um uid
	 * @param {*} uid 
	 */
	remove(uid) {
		let indice = this._registros.findIndex(registro => registro.uid == uid);
		if (indice > -1) {
			this._registros.splice(indice, 1);
		}
		this._save();
		this.updateView();
	}
	/**
	 * Retorna a somatoria do indicador
	 */
	total() {
		return this._registros.reduce((total, ind) => (total + ind.value), 0);
	}
	/**
	 * Deserializa dados do scorm
	 * @param {*} data 
	 */
	deserialize(data) {
		Object.assign(this._registros, data);
		this.updateView();
	}
	/**
	 * Serializa dados para salvar no scorm
	 */
	serialize() {
		return this._registros;
	}
}
/**
 * @class Indicadores
 * @description responsável pela gestão de indicadores, inicializa os indicadores capturando elementos da interface que contenham a classe '.indicador'.
 */
class Indicadores {
	constructor() {
		this.registerKey = "indicadores";
		let indicadores = Array.from(document.querySelectorAll('.indicador'));
		this._indicadores = {};
		indicadores.forEach(el => this._indicadores[el.id] = new Indicador(el, null, (() => this.save())));
		this.load();
	}
	/**
	 * Retorna uma instancia de indicador
	 * @param {String} indicador_name 
	 * @returns Indicador
	 */
	indicador(indicador_name) {
		return this._indicadores[indicador_name];
	}
	/**
	 * Retorna a coleção de indicadores
	 */
	all() {
		return this._indicadores;
	}
	/**
	 * Adiciona os valores ao indicadores com o uid da tela
	 * @param {String} uid 
	 * @param {Object} indicadores 
	 */
	add(uid, indicadores) {
		for (const indicador in indicadores) {
			if (indicadores.hasOwnProperty(indicador)) {
				const value = indicadores[indicador];
				this.indicador(indicador).add(uid, value);
			}
		}
		this.save();
	}
	/**
	 * Serializa para salvar no scorm
	 */
	serialize() {
		let sdata = {};
		for (const indicador in this._indicadores) {
			if (this._indicadores.hasOwnProperty(indicador)) {
				const data = this._indicadores[indicador].serialize();
				sdata[indicador] = data;
			}
		}
		return sdata;
	}
	/**
	 * trata os dados do scorm para a memoria
	 * @param {Object} loaded_data dados carregados do scorm
	 */
	deserialize(loaded_data) {
		for (const indicador in loaded_data) {
			if (loaded_data.hasOwnProperty(indicador)) {
				const data = loaded_data[indicador];
				if (this._indicadores.hasOwnProperty(indicador)) {
					this._indicadores[indicador].deserialize(data);
				} else {
					console.warn('indicador', indicador, 'não existe')
				}
			}
		}
	}
	/**
	 * Serializa e salva os dados da aplicação no scorm
	 */
	save() {
		scorm.saveObject(this.registerKey, this.serialize());
	}
	/**
	 * Carrega dos dados do scorm e deserializa
	 */
	load() {
		let indicadores_carregados = scorm.loadObject(this.registerKey) || {};
		this.deserialize(indicadores_carregados);
	}
	/**
	 * Retorna a somatoria por indicador = { indicador: total, ... }
	 * @returns {Object}
	 */
	total() {
		let somatoria_por_indicador = {};
		for (const indicador in this._indicadores) {
			somatoria_por_indicador[indicador] = this.indicador(indicador).total();
		}
		return somatoria_por_indicador;
	}

	print() {
		return "Indicadores: " + JSON.stringify(this._indicadores);
	}
}

window.bridge.indicadores = new Indicadores();