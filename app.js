// db.collection('form').get().then((snapshot)=>{
// snapshot.docs.forEach(doc => {
//     console.log(doc.data());  
    
// })


// });

const form = document.querySelector('#mainform');

form.addEventListener('submit',(e)=>{

e.preventDefault();
db.collection('cafes').add({

    fname: form.fname.value,
    lname: form.lname.value,
    email: form.email.value,
    add: form.add.value,
    title: form.title.value,
    desc: form.desc.value,
    tdesc: form.tdesc.value,
    skill: form.skill.value,
    more: form.more.value


})
});   