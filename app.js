// db.collection('form').get().then((snapshot)=>{
// snapshot.docs.forEach(doc => {
//     console.log(doc.data());  
    
// })


// });

const form = document.querySelector('#mainform');

form.addEventListener('submit',(e)=>{

e.preventDefault();
db.collection('form').add({

childsfathersname:form.father.value,
dob:form.dob.value,
dod:form.dod.value,
gender:form.gender.value,
state:form.state.value,
doctor:form.doctor.value,
district:form.district.value,
place:form.place.value,
time:form.time.value,
village:form.village.value,
nameofinformant:form.informant.value,
nameofpatient:form.Patient.value,
childsmothersname:form.mother.value,
mobile:form.mobile.value,
house:form.house.value,
address:form.address.value,
cause:form.cause.value,
cat:form.cat.value


})
});   