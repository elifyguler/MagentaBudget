function calculateBudget(){
    let monthly_income = parseInt(document.getElementById('monthly_income').value);
    let housing = parseInt(document.getElementById('housing').value);
    let insurance = parseInt(document.getElementById('insurance').value);
    let grociers = parseInt(document.getElementById('grociers').value);
    let entertainment = parseInt(document.getElementById('entertainment').value);
    let debt = parseInt(document.getElementById('debt').value);
    let other_essentials = parseInt(document.getElementById('other_essentials').value);
    let lifestyle = parseInt(document.getElementById('lifestyle').value);
    let savings = parseInt(document.getElementById('savings').value);

    let total_expenses = housing+insurance+grociers+entertainment+debt+other_essentials+lifestyle+savings;



    if(monthly_income == "")
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
        housing1 = housing*100/monthly_income;
        insurance1 = insurance*100/monthly_income;
        grociers1 = grociers*100/monthly_income;
        entertainment1 = entertainment*100/monthly_income;
        debt1 = debt*100/monthly_income;
        other_essentials1 = other_essentials*100/monthly_income;
        lifestyle1 = lifestyle*100/monthly_income;
        savings1 = savings*100/monthly_income;


        if(monthly_income>total_expenses)
        {
            let text = "Monthly income amount is more than total expenses amount. Do you want me to add that extra money as saving?";
            if (confirm(text) == true) {
                savings=savings+(monthly_income-total_expenses);
                savings1=savings*100/monthly_income;
                alert("Extra money added to saving!");
                advice(savings);

                var yArray = [monthly_income,housing, insurance, grociers,entertainment,debt,other_essentials,lifestyle,savings];
                var xArray = ['Monthly Income','Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings'];

                var expensesextrasavingbar = [{
                x:xArray,
                y:yArray,
                type:"bar"
                }];

                var layout = {title:"My Budget's Summary"};

                Plotly.newPlot("bar", expensesextrasavingbar, layout);

                var expensesextrasaving = 
                [{
                values: [housing1, insurance1, grociers1,entertainment1,debt1,other_essentials1,lifestyle1,savings1],
                labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings'],
                type: 'pie'
                }];
                  
                var layout = 
                {
                    height: 600,
                    width: 800
                };
                  
                  Plotly.newPlot('chartpie', expensesextrasaving, layout);
                
            }

            else
                {
                    advice(savings);
                    alert("Extra money did not add to saving!");
                    let unknown_money = parseInt(monthly_income-total_expenses);
                    unknown_money1=unknown_money*100/monthly_income;

                    var yArray = [monthly_income,housing, insurance, grociers,entertainment,debt,other_essentials,lifestyle,savings,unknown_money];
                    var xArray = ['Monthly Income','Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings','Unknown'];
  
                    var expenseswithunknownbar = [{
                    x:xArray,
                    y:yArray,
                    type:"bar"
                    }];
  
                    var layout = {title:"My Budget's Summary"};
  
                    Plotly.newPlot("bar", expenseswithunknownbar, layout);

                    var expenseswithunknown = 
                    [{
                    values: [housing1, insurance1, grociers1,entertainment1,debt1,other_essentials1,lifestyle1,savings1,unknown_money1],
                    labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings','Unknown'],
                    type: 'pie'
                    }];
                  
                    var layout = {
                    height: 600,
                    width: 800
                  };
                  
                  Plotly.newPlot('chartpie', expenseswithunknown, layout);

                }
                
        }

        else{

            advice(savings);
            var yArray = [monthly_income,housing, insurance, grociers,entertainment,debt,other_essentials,lifestyle1,savings];
            var xArray = ['Monthly Income','Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings'];
  
            var expenses = [{
            x:xArray,
            y:yArray,
            type:"bar"
            }];
  
            var layout = {title:"My Budget's Summary"};
  
            Plotly.newPlot("bar", expenses, layout);



        var expenses = [{
            values: [housing1, insurance1, grociers1, entertainment1,debt1,other_essentials1,lifestyle1,savings1],
            labels: ['Housing', 'Insurance', 'Grociers','Media and Entertainment','Debt repayments','Other essentials','Lifestyle','Savings'],
            type: 'pie'
          }];
          
          var layout = {
            height: 600,
            width: 800
          };
          
          Plotly.newPlot('chartpie', expenses, layout);}


    }
}

function advice(savings){
    let housing = parseInt(document.getElementById('housing').value);
    let insurance = parseInt(document.getElementById('insurance').value);
    let grociers = parseInt(document.getElementById('grociers').value);
    let entertainment = parseInt(document.getElementById('entertainment').value);
    // let savings = parseInt(document.getElementById('savings').value);




    let useradvice=document.getElementById('user_advice')
    useradvice.innerText="We are going to share with you the average prices in the UK but please don't forget these expenses may different depending on the region you live in. All numbers show monthly costs."
    let userhousing=document.getElementById('user_housing')
    userhousing.innerText="The average monthly rent in the UK is now around £895 and £150 for council tax. Statistics show that, the average is £47.90 for gas, £63.70 for electricity and £34 for water so this informations show that the housing expenses avarage is £1190,6 a month."
    if (housing>1190)
    {
        let housingadvice=document.getElementById('housing_advice')
        housingadvice.innerText="You entered for housing £"+housing+" a month.You entered a higher amount than average.If you reduce housing costs, you can save more money."
    }
    else{
        let housingadvice=document.getElementById('housing_advice')
        housingadvice.innerText="You entered for housing £"+housing+" a month.You have entered less housing expenses than the average.This is great."
    }
    
    let userinsurance=document.getElementById('user_insurance')
    userinsurance.innerText="The average cost of life insurance in the UK is currently £38.15.The average cost of car insurance £65."
    if (insurance>103)
    {
        let insuranceadvice=document.getElementById('insurance_advice')
        insuranceadvice.innerText="You entered for insurance £"+insurance+" a month.You entered a higher amount than average.If you reduce insurance costs, you can save more money."
    }
    else{
        let insuranceadvice=document.getElementById('insurance_advice')
        insuranceadvice.innerText="You entered for insurance £"+insurance+" a month.You have entered less insurance expenses than the average.This is great."
    }
    
    
    let usergrociers=document.getElementById('user_grociers')
    usergrociers.innerText="The average spend on food per person is around £189 per month, including groceries and eating out—across all ages and genders. "
    
    if (grociers>189)
    {
        let grociersadvice=document.getElementById('grociers_advice')
        grociersadvice.innerText="You entered for grociers £"+grociers+" a month.You entered a higher amount than average.If you reduce grociers costs, you can save more money."
    }
    else{
        let grociersadvice=document.getElementById('grociers_advice')
        grociersadvice.innerText="You entered for grociers £"+grociers+" a month.You have entered less grociers expenses than the average.This is great."
    }
    
    
    let userentertainment=document.getElementById('user_entertainment')
    userentertainment.innerText="Media and entertainment costs around £95 a month."

    if (entertainment>95)
    {
        let entertainmentadvice=document.getElementById('user_entertainment')
        entertainmentadvice.innerText="You entered for entertainment £"+entertainment+" a month.You entered a higher amount than average.If you reduce entertainment costs, you can save more money."
    }
    else{
        let grociersadvice=document.getElementById('user_entertainment')
        grociersadvice.innerText="You entered for entertainment £"+entertainment+" a month.You have entered less entertainment expenses than the average.This is great."
    }
    

    let usersaving=document.getElementById('user_saving')
    usersaving.innerText="The average savings per month UK is £450 per household."


    if (savings>450)
    {
        let savingsadvice=document.getElementById('user_saving')
        savingsadvice.innerText="You entered for savings £"+savings+" a month.You save more money than average. This is wonderful."
    }
    else{
        let savingsadvice=document.getElementById('user_saving')
        savingsadvice.innerText="You entered for savings £"+savings+" a month.You save less money than average. You should read our blog for get some advice."
    }
    
    let userlifestyle=document.getElementById('user_lifestyle')
    userlifestyle.innerText="In general: A single person with no children spend around £1,400 a month to live on. A couple with no children spend around £2,100 a month. A couple with 2 children in primary school spend around £3,460 a month."

}

