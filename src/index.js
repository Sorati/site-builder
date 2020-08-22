import {model} from './model'
import './styles/main.css'
import Select from "./classes/select";
import {Site} from "./classes/site";
import {Sidebar} from "./classes/sidebar";

const site = new Site('#site')

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)


// const sidebar = document.getElementById('panel')
// const select = new Select()
// sidebar.insertAdjacentHTML('beforeend', select.test())
