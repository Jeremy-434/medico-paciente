
function mueveReloj() {
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();

    let horaImprimible = hora + " : " + minuto + " : " + segundo;

    document.form_reloj.reloj.value = horaImprimible;

    setTimeout("mueveReloj()", 1000);

    // document.querySelector('#table-medicos').DataTable({
    //     order: [[3, 'desc']],
    // });
    // document.querySelector('#table-pacientes').DataTable();
}

function eliminarElementoTabla() {
    document.querySelector('#tiger-nixon').remove();
}


let citasJuanPerez = [];
let citasCarlosHernandez = [];
let citasDavidPerez = [];

function verificarCita() {

    event.preventDefault();

    let doctor = document.querySelector('#select-doctor').value;
    let hora = document.querySelector('#select-hora').value;
    let fecha = document.querySelector('#select-fecha').value;

    let cita = hora + " : " + fecha;

    if (doctor == "Dr. Juan Perez") {
        if (citasJuanPerez.indexOf(cita) != -1) {
            alert('La fecha no esta disponible');
        }
        else {
            citasJuanPerez.push(cita);
            alert('Cita agendada');
            console.log(citasJuanPerez);
        }
    } else {
        if (doctor == "Dr. Carlos Hernandez") {
            // alert(citasCarlosHernandez.indexOf(cita));
            if (citasCarlosHernandez.indexOf(cita) != -1) {
                alert('La fecha no esta disponible');
            } else {
                citasCarlosHernandez.push(cita);
                alert('Cita agendada');
                console.log(citasCarlosHernandez);
            }
        } else {
            if (doctor == "Dr. David Perez") {
                if (citasDavidPerez.indexOf(cita) != -1) {
                    alert('La fecha no esta disponible');
                } else {
                    citasDavidPerez.push(cita);
                    alert('Cita agendada');
                    console.log(citasDavidPerez);
                }
            } else {
                alert('Elija un doctor');
            }
        }
    }


}

function darkMode() {

    document.body.classList.add("bg-dark");

    let navbar = document.querySelector('#navbarId');
    let table = document.querySelector('#table-medicos');
    let btnAgendarCita = document.querySelector('#btn-agendar-cita');
    let select = document.getElementById('select-doctor');
    let select2 = document.getElementById('select-hora');
    let select3 = document.getElementById('select-fecha');
    let moon = document.getElementById('darkModeMoon');
    navbar.classList.remove("bg-light");
    navbar.classList.add("navbar-dark", "bg-secundary");
    table.classList.add("table-dark");
    btnAgendarCita.classList.remove("btn-dark");
    btnAgendarCita.classList.add("btn-light");
    select.classList.add("text-light");
    select2.classList.add("text-light");
    select3.classList.add("text-light");
    moon.classList.add("text-light");
}


let tama??o = 0;

function tama??oBtnPlus() {
    let btnAgendarCita = document.querySelector('#btn-agendar-cita');
    tama??o += 10;
    btnAgendarCita.style = `width: calc(120px + ${tama??o}px); height: calc(30px + ${tama??o}px);`
}
function tama??oBtnMinus() {
    let btnAgendarCita = document.querySelector('#btn-agendar-cita');
    tama??o -= 10;
    btnAgendarCita.style = `width: calc(120px + ${tama??o}px); height: calc(30px + ${tama??o}px);`
}



// Tarea
// 1.agregar alertas y agregar a listas
// 2.botones para agregar estilos