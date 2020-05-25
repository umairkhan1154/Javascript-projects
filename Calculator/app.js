    
      const calcy = () =>{
        let urdu = document.getElementById('urdu').value;
        let maths = document.getElementById('maths').value;
        let eng = document.getElementById('eng').value;
        let phy = document.getElementById('phy').value;
        let isl = document.getElementById('isl/pst').value;
        let chem = document.getElementById('chem').value;

        let grades = "";
      
      
        let totalGrades = parseFloat(urdu) + parseFloat(maths) + parseFloat(eng) + parseFloat(phy)
        parseFloat(chem) + parseFloat(isl);
      
        let perc = (totalGrades/550) * 100;
        perc = perc.toFixed(2);
      
        if(perc <= 100  && perc >= 80){
          grades = 'A';
        }else if(perc <= 79  && perc >= 60){
           grades = 'B';
        }else if(perc <= 59  && perc >= 40){
           grades = 'C';
        }else{
           grades = 'F';
        }


        let isl_marks = document.getElementById('isl/pst').value;
        let math_marks = document.getElementById('maths').value;
        let phy_marks = document.getElementById('phy').value;
        let chem_marks = document.getElementById('chem').value;
        let urdu_marks = document.getElementById('urdu').value;
        let eng_marks = document.getElementById('eng').value;
        if ( isl_marks > 50 || math_marks > 100 || eng_marks > 100 || chem_marks > 100  || phy_marks > 100 || urdu_marks > 100){
                alert('please write actual marks');
        }else if(perc >= 40){
            document.getElementById('showData').innerHTML = `Total Marks:  ${totalGrades} <br> Percentage: ${perc}% <br> Grade: ${grades} <br>Status:  Pass`
           
          }
        else{
            document.getElementById('showData').innerHTML = `Total Marks:  ${totalGrades} <br> Percentage: ${perc}% <br> Grade: ${grades} <br>Status:  Fail`
          }  
        }