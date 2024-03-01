

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

const newTraumatologyData = [
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
]


const addDepartmentData = (deparment, data) => {
    if (!deparment || !data) return
    deparment.push(...data);
}

const printDeparmentData = (deparment) => {
    if (!deparment) return

    deparment.forEach(data => {
        document.write(`
        <p> ${data.hora} - ${data.especialista} - ${data.paciente} - ${data.rut} - ${data.prevision} </p>
        `)
    });
}


const printDeparmentsPatients = (...deparments) => {
    if (!deparments) return

    let list = ''

    deparments.forEach(deparment => {
        if (deparment && Array.isArray(deparment)) {
            deparment.forEach(data => {
                list += `<p> ${data.paciente} </p>`
            });
        }
    })

    document.write(list)
}

const filterMedicalInsurancePatients = ( deparment, hasMedicalInsurance = true) =>{
    if(!deparment) return
    return deparment.filter(p => p.prevision === (hasMedicalInsurance ? 'ISAPRE': 'FONASA'))
}

const printDeparmentPatientsInsurance = (deparment) => {
    if(!deparment) return

    let list = ''
    deparment.forEach(data =>{
        list += `<li> ${data.paciente} - ${data.prevision} </li>`;
    });

    document.write(`<ol> 
                    ${list}
                    </ol>`)
}


const main = () => {


    //1.- Agregar horas a la data de traumatologia
    addDepartmentData(traumatologia, newTraumatologyData);



    document.write('<h1>Estadisticas centro medico ñuñoa</h1>');
    document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
    document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
    document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


    document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
    document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
    document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);


    //2.-
    radiologia.shift()
    radiologia.pop()

    //3.-
    document.write('<h2>Horas dentales registradas: </h2>')
    printDeparmentData(dental);

    //4.-
    document.write('<h2>Todos los pacientes</h2>')
    printDeparmentsPatients(radiologia, traumatologia, dental);


    //5.-
    document.write('<h2>Pacientes dentales en isapre:</h2>')
    const dentalMedicalInsurancePatient = filterMedicalInsurancePatients(dental)
    printDeparmentPatientsInsurance(dentalMedicalInsurancePatient)

    //6.-
    document.write('<h2>Pacientes de traumatologia en fonasa:</h2>')
    const traumatologyMedicalInsurancePatient = filterMedicalInsurancePatients(traumatologia, false)
    printDeparmentPatientsInsurance(traumatologyMedicalInsurancePatient)
    

}



document.addEventListener('DOMContentLoaded', () => {
    main()
})


