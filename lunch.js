document.addEventListener('DOMContentLoaded', function loaded (e) {
    console.log("I'm Loaded!!!!!");
    //Create a variable titled image. Find the image in the HTML and instert the ID here.
    var image = document.getElementById('mondayImage');
    
    //Add evvent lister to the image 
    image.addEventListener('click', function imageClick (e) {
        console.log("I just clicked on the sandwich image.")
        console.log(image.src)
        image.src ==="file:///C:/Users/GWC19/Documents/whack/grilled_cheese.jpg"
    })
    
    if (image.src = "file:///C:/Users/GWC19/Documents/whack/grilled_cheese.jpg") {
        image.src = "file:///C:/Users/GWC19/Documents/whack/cheese.jpg"
    }
    } else if (image.src = "grilled_cheese.jpg" {
        image.src = "sandwich.jpg"
    }
})























