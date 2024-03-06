constructor(table){
		super(table);

		this.active = false;
		this.element = this.createElement(); //containing element
		this.containerElement = this.createContainerElement(); //containing element
		this.external = false;
	}

	initialize(){
		this.initializeElement();
	}

	var el = document.createElement("div");

		el.classList.add("tabulator-footer-contents");

		this.element.appendChild(el);

		return el;
	}
