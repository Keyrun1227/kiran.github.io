var no_sem_subjects = 0;
function checkdepartment(){
    var table = document.getElementById("myTable");
    var n = table.rows.length - 2;
    while(n > 1){
        table.deleteRow(2);
        n=n-1;
    }
    var sem = document.getElementById("ssem");
    sem.selectedIndex = 0;
}

function checksemester(){
    var table = document.getElementById("myTable");
    var n = table.rows.length - 2;
    while(n > 1){
        table.deleteRow(2);
        n=n-1;
    }
    var first_year_subjects={
        1:["Communicative English","Engineering Mathematics I","Engineering Chemistry","Basics of Engineering","Communicative English Lab","Engineering Chemistry Lab","Engineering Workshop"],
        2:["Advanced Communicative English","Engineering Mathematics II","Engineering Physics","Problem Solving and Programming Skills","Engineering Physics Lab","Problem Solving and Programming Skills Lab","Engineering Drawing"]
    }

    var cse_sems_subjects={
        3:["Probability Statistics using Python (Integrated)","Digital Logic Design (Integrated)","Engineering Economics and Project Management","Data Structures","Discrete Mathematical structures","Object Oriented Programming through C++","Data Structures Lab","Object Oriented Programming Lab"],    
        4:["Design and Analysis of Algorithms","Operating Systems","Database Management Systems","Computer Organization and Architecture","Java in Web Technologies","Employability Skills I","Database Management Systems Lab","Java in Web Technologies Lab","CC & EC Activities I"],
        5:["Computer Networks (Integrated)","Microprocessors and Microcontroller Programming (Integrated)","Artificial Intelligence and Machine Learning","Theory of Computation","Career Path I","Open Elective I","Artificial Intelligence and Machine Learning Lab","Term Paper","Summer Internship I"],
        6:["Career Path II (Integrated)","Compiler Design","Internet of Things","Software Engineering","Open Elective II","Employability Skills II","Case Tools Lab","Mini Project","CC & EC Activities II"]
    }

    var it_sems_subjects={
        3:["Object Oriented Programming through java (Integrated)","Digital Logic Design (Integrated)","Data Communication systems","Data Structures","Discrete Mathematical structures","Database Management Systems","Data Structures Lab","Database Management Systems Laboratory"],    
        4:["Web Technologies (Integrated)","Operating Systems","Computer Networking","Computer Organization and Architecture","Probability Statistics","Employability Skills I","Python Programming Lab","Operating Systems Lab","CC & EC Activities I"],
        5:["Design and Analysis of Algorithms (Integrated)","Software Engineering Principles (Integrated)","Artificial Intelligence","Cloud Computing","Career Path I","Open Elective I","	Cloud Computing Lab","Term Paper","Summer Internship I"],
        6:["Career Path II (Integrated)","Automata and Compiler Design","Engineering Economics and Project Management","Machine Learning","Open Elective II","Employability Skills II","Machine Learning Lab using Python","Mini Project","CC & EC Activities II"]
    }

    var civil_sems_subjects={
        3:["Building Materials and Concrete Technology","Building Planning and Drawing (Integrated)","Numerical Methods","Fluid Mechanics","Solid Mechanics I","Surveying","Solid Mechanics Laboratory","Surveying Laboratory"],    
        4:["Transportation Engineering","Structural Analysis","Hydraulics and Hydraulic Machinery","Soil Mechanics","Solid Mechanics II","Employability Skills I","Soil Mechanics Laboratory","Fluid Mechanics and Hydraulic Machinery Laboratory","CC & EC Activities I"],
        5:["Hydrology (Integrated)","Design and Detailing of RC Structures (Integrated)","Environmental Engineering","Foundation Engineering","Career Path","Open Elective","Environmental Engineering Laboratory","Term Paper","Summer Internship I"],
        6:["Career Path","Problem Solving through OOPS","Design of Steel Structures","Estimation and Costing","Open Elective","Employability Skills II","Programming Language Laboratory","Mini Project","CC & EC Activities II"]
   }

    var mech_sems_subjects={
        3:["Computer aided Machine Drawing (Integrated)","Manufacturing Technology (Integrated)","Engineering Mechanics","Fluid Mechanics and Hydraulic Machines","Kinematics of Machinery","Thermodynamics","Fluid Mechanics and Hydraulic Machines Lab","Computational Mathematics Lab"],    
        4:["Object Oriented Programming through Java","Applied Thermodynamics","Mechanics of Solids","Metal Cutting and Machine Tools","Dynamics of Machinery","Employability Skills I","Thermal Engineering Lab","Mechanics of Solids Lab","CC & EC Activities I"],
        5:["Mechanical Measurements and Metrology (Integrated)","Computer Aided Design and Manufacturing (Integrated)","Steam and gas turbines","Design of Machine Members I","Career Path","Open Elective","Metal Cutting and Machine Tools Lab","Term Paper","Summer Internship I"],
        6:["Career Path","Heat Transfer","Finite Element Methods","Design of Machine Members II","Open Elective","Employability Skills II","Heat Transfer Lab","Mini Project","CC & EC Activities II"]
   }

    var chem_sems_subjects={
        3:["Object Oriented Programming Through Java (Integrated)","Momentum Transfer (Integrated)","Industrial Chemistry","Chemical Process Calculations","Introduction to Chemical Engineering","Chemical Engineering Thermodynamics","Computational Chemical Engineering Lab","Industrial Chemistry Lab"],    
        4:["Engineering Mathematics-III","Chemical Reaction Engineering-I","Process Heat Transfer","Mechanical Unit Operations","Chemical Technology","Employability Skills I","Process Heat Transfer Lab","Mechanical Unit Operations Lab","CC & EC Activities I"],
        5:["Process Instrumentation and Control (Integrated)","Chemical Reaction Engineering – II (Integrated)","Engineering Economics & Project Management","Mass Transfer Operations - I","Career Path","Open Elective","Process Dynamics Control Lab","Term Paper","Summer Internship I"],
        6:["Career Path","Process Equipment Design and Economics","Mass Transfer Operations II","Transport Phenomena","Open Elective","Employability Skills II","Mass Transfer Operations Lab","Mini Project","CC & EC Activities II"]
   }

    var eee_sems_subjects={
        3:["Engineering Mathematics III (Integrated)","Semiconductor Devices and Circuits (Integrated)","DC Machines and Transformers","Electrical Circuit Analysis","Electromagnetic Field Theory","Measurements and Instrumentation","DC Machines Lab","Electrical Circuits and Simulation Lab"],    
        4:["Linear and Digital Integrated Circuits","Power Generation, Transmission and Distribution","Power Electronics","Signals and Systems Theory","AC Machines","Employability Skills I","Measurements and Instrumentation Lab","AC Machines Lab","CC & EC Activities I"],
        5:["Control Systems (Integrated)","Object Oriented Programming through Java (Integrated)","Power System Protection","Power Electronics","Career Path","Open Elective","Power Systems Lab","Term Paper","Summer Internship I"],
        6:["Career Path","Engineering Economics and Project Management","Electrical Drives","Power System Analysis and Control","Open Elective","Employability Skills II","Power Electronics and Drives Lab","Mini Project","CC & EC Activities II"]
   }

    var ece_sems_subjects={
        3:["Linear Circuit Analysis (Integrated)","Signals & Systems (Integrated)","Complex Variables","Electronic Devices and Circuits","Logic Circuit Design","Random Variables and Stochastic Processes","Electronic Devices and Circuits Lab","Logic Circuit Design Lab"],    
        4:["Analog Electronic Circuits","Analog and Digital Communications","Linear Control Systems","Electromagnetic Fields and Waves","Object Oriented Programming","Employability Skills I","Object Oriented Programming Lab","Analog and Digital Communications Lab","CC & EC Activities I"],
        5:["VLSI Design (Integrated)","Microprocessors and Microcontroller (Integrated)","Antennas and Microwave Engineering","Linear and Digital IC Applications","Career Path","Open Elective","Linear IC Applications Lab","Term Paper","Summer Internship I"],
        6:["Career Path","Engineering Economics and Project Management","Cellular and Mobile Communications","Digital Signal Processing","Open Elective","Employability Skills II","Digital Signal Processing Lab","Mini Project","CC & EC Activities II"]
   }
    
    var sem = document.getElementById("ssem").value;
    var dept = document.getElementById("sdept").value;
    var sem_subjects=0;

    if(sem<3)
        sem_subjects=first_year_subjects[sem];
    else if(dept==1)
        sem_subjects=cse_sems_subjects[sem];
    else if(dept==2)
        sem_subjects=it_sems_subjects[sem];
    else if(dept==3)
        sem_subjects=civil_sems_subjects[sem];
    else if(dept==4)
        sem_subjects=mech_sems_subjects[sem];
    else if(dept==5)
        sem_subjects=chem_sems_subjects[sem];
    else if(dept==6)
        sem_subjects=eee_sems_subjects[sem];
    else if(dept==7)
        sem_subjects=ece_sems_subjects[sem];
    else{
        alert("Please Select Department");
        var sem = document.getElementById("ssem");
        sem.selectedIndex = 0;
        return;
    }
    no_sem_subjects=sem_subjects.length;
    var count=2;
    for(var i = 0;i < no_sem_subjects; i++){
        var row = table.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = sem_subjects[i];
        temp = " <input type='number' name=s";
        temp = temp.concat(i," id=s");
        temp = temp.concat(i," max='10' min='4'>");
        cell2.innerHTML = temp;
        count = count + 1;
    }
}

function calculate(){
    var sem = document.getElementById("ssem");
    if(sem.selectedIndex==0){
        alert("Select Sem");
        return;
    }
    var total_sems_credits={
        1:[3,3,3,3,1.5,1.5,1.5],
        2:[3,3,3,3,1.5,1.5,1.5],
        3:[4,4,3,3,3,3,1.5,1.5,1.5],
        4:[4,3,3,3,3,3,1.5,1.5,1],
        5:[4,4,3,3,3,3,1.5,1.5,1.5],
        6:[4,3,3,3,3,3,1.5,1.5,1]
    }
    var denom=0,nume=0;
    var sem = document.getElementById("ssem").value;
    var sem_credits=total_sems_credits[sem];
    for(var i=0; i< no_sem_subjects;i++){
        denom = denom + sem_credits[i];
        var temp = "s";
        temp = temp.concat(i);
        var marks=document.getElementById(temp).value;
        if(marks<11 && marks >3)
            nume = nume + sem_credits[i] * marks;
        else{
            alert("Invalid Inputs");
        }
    }
    var sgpa=nume/denom;
    sgpa = sgpa.toFixed(2)
    var table = document.getElementById("myTable");
    table.deleteRow(no_sem_subjects+2);
    var row = table.insertRow(no_sem_subjects+2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "SGPA:";
    cell2.innerHTML = sgpa;
    var row = table.insertRow(no_sem_subjects+3);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<a href='index.html'><b>Go Back</b>";
}