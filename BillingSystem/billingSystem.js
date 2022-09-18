
let products = [
    {
        pName:'Pencil',
        price:'15',
        discount:'0'
    },
    {
        pName:'Pen',
        price:'100',
        discount:'0'
    },
    {
        pName:'Register',
        price:'200',
        discount:'10'
    },
    {
        pName:'Paint Brush',
        price:'50',
        discount:'8'
    },
    {
        pName:'Int Pot',
        price:'185',
        discount:'5'
    }
];

let summary = [];
let summaryItem = {
    pName: '',
    price: '',
    quantity:'',
    discount:'',
    total:''
}

let productSelect = document.getElementById('productName');
let billSummary = document.getElementById('billSummary');

for(x of products){
    
    var option = document.createElement("option");
    option.text = x.pName;
    option.value = x.pName;
    productSelect.add(option);
}

let productQuantity = document.getElementById('productQuantity');

for(let i=1; i<= 1000; i++){
    
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    productQuantity.add(option);
}



let productPrice = document.getElementById('productPrice');
let productDiscount = document.getElementById('productDiscount');
let productTotal = document.getElementById('productTotal');


function updateEverything(event){

    let value = event.value;

    for(x of products){
     
        if(value == x.pName){
            productPrice.innerText = x.price;
            productDiscount.innerText = x.discount;
            productTotal.innerText = (parseInt(productPrice.innerText) * parseInt(document.getElementById('productQuantity').value)) - parseInt(x.discount);
            break;
        }
    }
}

function onQuantityChange(event){
    
    productDiscount.innerText = parseInt(productDiscount.innerText) * parseInt(event.value);
    productTotal.innerText = (parseInt(productPrice.innerText) * parseInt(event.value)) - parseInt(productDiscount.innerText);
}

function addProduct(){

    let totalDiscount = document.getElementById('totalDiscount');
    let afterDiscount = document.getElementById('afterDiscount');
    let afterGst = document.getElementById('afterGst');

    totalDiscount.innerText = parseInt(totalDiscount.innerText) + parseInt(productDiscount.innerText);
    afterDiscount.innerText = parseInt(afterDiscount.innerText) + parseInt(productTotal.innerText);
    afterGst.innerText = parseInt(parseInt(afterGst.innerText) + (parseInt(productTotal.innerText) * 1.17));
    

    // for summary

    if(productSelect.value != ''){
        summaryItem.pName = productSelect.value;
        summaryItem.price = productPrice.innerText;
        summaryItem.discount = productDiscount.innerText;
        summaryItem.quantity = document.getElementById('productQuantity').value;
        summaryItem.total = productTotal.innerText;
    
        summary.push(summaryItem);
    
        let element = document.getElementById('summary');
        element.innerHTML += `<div> <span>${summaryItem.pName}</span> <span>Rs ${summaryItem.price}</span> <span>${summaryItem.quantity}</span> <span>Rs ${summaryItem.discount}</span> <span>Rs ${summaryItem.total}</span></div>`;
    
    }


    // set quatity to 1 after adding any product
    productTotal.innerText = productPrice.innerText;
    productQuantity.value = 1;
}

function discard(){

    productSelect.value = '';
    productQuantity.value = '1';
    productDiscount.innerText = '0';
    productTotal.innerText = '0';
    productPrice.innerText = '0';
    afterDiscount.innerText = '0';
    afterGst.innerText = '0';
    totalDiscount.innerText = '0';
    document.getElementById('summary').innerHTML= '';

}

function generateBill(){

    window.alert("bill generated. Thank You!");
    discard();
}



