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
//good
	if(this.table.options.footerElement){

			switch(typeof this.table.options.footerElement){
				case "string":
					if(this.table.options.footerElement[0] === "<"){
						this.containerElement.innerHTML = this.table.options.footerElement;
					}else{
						this.external = true;
						this.containerElement = document.querySelector(this.table.options.footerElement);
					}
