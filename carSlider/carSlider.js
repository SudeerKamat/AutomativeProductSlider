import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import jquery from '@salesforce/resourceUrl/jquery';
export default class CarSlider extends LightningElement {

    connectedCallback(){
        loadScript(this,jquery)
        .then(()=>{
            console.log('Jquery Loaded');
        })
        .catch(error=>{
            console.log('Failed to Load Jquery -' +error);
        }); 
}


slide1(){
    $(this.template.querySelector('.slide1')).addClass('active');
    $(this.template.querySelector('.slide2')).removeClass('active');
    $(this.template.querySelector('.slide3')).removeClass('active');
    $(this.template.querySelector('.slide4')).removeClass('active');
    $(this.template.querySelector('.slide5')).removeClass('active');
}

slide2(){
    $(this.template.querySelector('.slide1')).removeClass('active');
    $(this.template.querySelector('.slide2')).addClass('active');
    $(this.template.querySelector('.slide3')).removeClass('active');
    $(this.template.querySelector('.slide4')).removeClass('active');
    $(this.template.querySelector('.slide5')).removeClass('active');
}

slide3(){
    $(this.template.querySelector('.slide1')).removeClass('active');
    $(this.template.querySelector('.slide2')).removeClass('active');
    $(this.template.querySelector('.slide3')).addClass('active');
    $(this.template.querySelector('.slide4')).removeClass('active');
    $(this.template.querySelector('.slide5')).removeClass('active');
}

slide4(){
    $(this.template.querySelector('.slide1')).removeClass('active');
    $(this.template.querySelector('.slide2')).removeClass('active');
    $(this.template.querySelector('.slide3')).removeClass('active');
    $(this.template.querySelector('.slide4')).addClass('active');
    $(this.template.querySelector('.slide5')).removeClass('active');
}

slide5(){
    $(this.template.querySelector('.slide1')).removeClass('active');
    $(this.template.querySelector('.slide2')).removeClass('active');
    $(this.template.querySelector('.slide3')).removeClass('active');
    $(this.template.querySelector('.slide4')).removeClass('active');
    $(this.template.querySelector('.slide5')).addClass('active');
}


}