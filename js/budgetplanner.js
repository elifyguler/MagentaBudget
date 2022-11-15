function calculateBudget(){
    let monthly_income = document.getElementById('monthly_income').value;
    let housing = document.getElementById('housing').value;
    let insurance = document.getElementById('insurance').value;
    let grociers = document.getElementById('grociers').value;
    let entertainment = document.getElementById('entertainment').value;
    let debt = document.getElementById('debt').value;
    let other_essentials = document.getElementById('other_essentials').value;
    let lifestyle = document.getElementById('lifestyle').value;
    let savings = document.getElementById('savings').value;

    let total_expenses = housing+insurance+grociers+entertainment+debt+other_essentials+lifestyle+savings
    
    if(monthly_income=="")
    {
        alert("You have to enter your monthly income. Please enter it.")
    }
    else if(housing=="" ){
        alert("You have to enter your housing expense. Please enter it.")
    }
    else if(grociers==""){
        alert("You have to enter your grociers expense. Please enter it.")
    }
    else{
        let expenses_text = document.createElement('div');
        expenses_text.innerText="I added new Paragraph";
        document.body.appendChild(expenses_text)

        var expenses = [{
            values: [10, 20, 30, 25,15],
            labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials',''],
            type: 'pie'
          }];
          
          var layout = {
            height: 400,
            width: 500
          };
          
          Plotly.newPlot('myDiv', data, layout);
    }


}