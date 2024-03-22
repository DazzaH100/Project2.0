document.addEventListener("DOMContentLoaded", function() {
    //DUMMY DATA FOR DEMONSTRATION
    const data = {
        labels: ["January", "February","March", "April", "May", "June", "July"],
        datasets: [{
            label: "Sports Data",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1, 
            data: [65, 59, 80, 81, 56, 55, 40],
        }]
    }
})


const ctx = 
document.getElementById('chart-Container').getContext('2d');
const myChart = new Chart(ctx,
   {
    type:'bar',
    data: data,
    options: {
        scales:{
            yAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Dummy supporting fact for demonstration
const factTect = 
document.getElementById('factText');
   factText.innerText = "in March, there was a significant increase in sports activities.";

   //additional supporting facts and insights can be dynamically updated  based on user interactions or data analysis.
