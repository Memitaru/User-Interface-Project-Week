class TabLink {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.article[data-tab="${this.data}"]`);
        this.itemElement = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select());
    }

    select(){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(link => link.classList.remove('active-tab'));
        this.element.classList.add('active-tab');
        this.itemElement.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select(){
        const items = document.querySelectorAll('.article');
        items.forEach(item => item.classList.remove('active-article'));
        this.element.classList.add('active-article');
    }
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(link => new TabLink(link));