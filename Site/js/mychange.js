
	 var img_array = ['img/3Site/image.jpg', 'img/3Site/image-2.jpg', 'img/3Site/image-3.jpg'];


i = 0;

	  
	  function funLeft() {
    i++;
	

    if(i == 0)
		{	document.getElementById("myImg").src = img_array[0];
		 	document.getElementById("myImg-tel").src = img_array[0];
			document.getElementById("myImg-R").src = img_array[1];
			document.getElementById("myImg-L").src = img_array[2];
		 
		 	document.getElementById('Text-Com').innerHTML="Company-1";
		 	document.getElementById('Text-Site').innerHTML="https://server.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo totam esse necessitatibus cum quas aliquam aperiam omnis ratione, reprehenderit ab, quis minima. Natus reprehenderit, officia laboriosam quo quis eum minima dicta unde ipsam sint pariatur, rem quasi recusandae in vero aliquam doloremque architecto cumque delectus ea, expedita. Iure, sit.";
		 
		 
		 
		 
		 document.getElementById('Text-Com-tel').innerHTML="Company-1";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo totam esse necessitatibus cum quas aliquam aperiam omnis ratione, reprehenderit ab, quis minima. Natus reprehenderit, officia laboriosam quo quis eum minima dicta unde ipsam sint pariatur, rem quasi recusandae in vero aliquam doloremque architecto cumque delectus ea, expedita. Iure, sit.";
		}
	if(i == 1)
		{
			document.getElementById("myImg").src = img_array[1];
			document.getElementById("myImg-tel").src = img_array[1];
			document.getElementById("myImg-R").src = img_array[2];
			document.getElementById("myImg-L").src = img_array[0];
			
			
			
			
			document.getElementById('Text-Com').innerHTML="Company-2";
		 	document.getElementById('Text-Site').innerHTML="https://server-2.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatibus quod nobis veniam, numquam asperiores? Officiis saepe delectus ipsum, magnam laboriosam optio velit beatae officia aliquam expedita aut eligendi molestiae quos necessitatibus facilis neque itaque ab voluptate, praesentium quisquam sapiente dolores in blanditiis nemo! Iure aliquam exercitationem, sunt, consequatur hic tempora necessitatibus doloremque error laboriosam expedita neque quod, soluta perferendis! Illum iste placeat ut quibusdam voluptates, deleniti repellendus magni doloribus?";
			
			
			
			document.getElementById('Text-Com-tel').innerHTML="Company-2";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server-2.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatibus quod nobis veniam, numquam asperiores? Officiis saepe delectus ipsum, magnam laboriosam optio velit beatae officia aliquam expedita aut eligendi molestiae quos necessitatibus facilis neque itaque ab voluptate, praesentium quisquam sapiente dolores in blanditiis nemo! Iure aliquam exercitationem, sunt, consequatur hic tempora necessitatibus doloremque error laboriosam expedita neque quod, soluta perferendis! Illum iste placeat ut quibusdam voluptates, deleniti repellendus magni doloribus?";
			
		}
	if(i == 2)
		{
			document.getElementById("myImg").src = img_array[2];
			document.getElementById("myImg-tel").src = img_array[2];
			document.getElementById("myImg-R").src = img_array[0];
			document.getElementById("myImg-L").src = img_array[1];
			
			
			
			document.getElementById('Text-Com').innerHTML="Company-3";
		 	document.getElementById('Text-Site').innerHTML="https://server-3.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iste.";
			
			document.getElementById('Text-Com-tel').innerHTML="Company-3";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server-3.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iste.";
		}
		  
	if(i == 3)
	{
		i = i - 3;
		document.getElementById("myImg").src = img_array[0];
		document.getElementById("myImg-tel").src = img_array[0];
		document.getElementById("myImg-R").src = img_array[1];
		document.getElementById("myImg-L").src = img_array[2];
		
		
		
		
		document.getElementById('Text-Com').innerHTML="Company-1";
		 document.getElementById('Text-Site').innerHTML="https://server.blabla";
		 document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo totam esse necessitatibus cum quas aliquam aperiam omnis ratione, reprehenderit ab, quis minima. Natus reprehenderit, officia laboriosam quo quis eum minima dicta unde ipsam sint pariatur, rem quasi recusandae in vero aliquam doloremque architecto cumque delectus ea, expedita. Iure, sit.";
		
		document.getElementById('Text-Com-tel').innerHTML="Company-1";
		 document.getElementById('Text-Site-tel').innerHTML="https://server.blabla";
		 document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo totam esse necessitatibus cum quas aliquam aperiam omnis ratione, reprehenderit ab, quis minima. Natus reprehenderit, officia laboriosam quo quis eum minima dicta unde ipsam sint pariatur, rem quasi recusandae in vero aliquam doloremque architecto cumque delectus ea, expedita. Iure, sit.";
		
	}
		  
		  
		  
		  
		  
	
}
	  
	  
	  
	  
	  
	  function funRight() {
    i--;
	

     if(i == 0)
		{	document.getElementById("myImg").src = img_array[0];
		 	document.getElementById("myImg-tel").src = img_array[0];
			document.getElementById("myImg-R").src = img_array[1];
			document.getElementById("myImg-L").src = img_array[2];
		 
		 	document.getElementById('Text-Com').innerHTML="Company-1";
		 	document.getElementById('Text-Site').innerHTML="https://server.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo totam esse necessitatibus cum quas aliquam aperiam omnis ratione, reprehenderit ab, quis minima. Natus reprehenderit, officia laboriosam quo quis eum minima dicta unde ipsam sint pariatur, rem quasi recusandae in vero aliquam doloremque architecto cumque delectus ea, expedita. Iure, sit.";
		 
		 
		 
		 
		  document.getElementById('Text-Com-tel').innerHTML="Company-1";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo totam esse necessitatibus cum quas aliquam aperiam omnis ratione, reprehenderit ab, quis minima. Natus reprehenderit, officia laboriosam quo quis eum minima dicta unde ipsam sint pariatur, rem quasi recusandae in vero aliquam doloremque architecto cumque delectus ea, expedita. Iure, sit.";
		}
	if(i == 1)
		{
			document.getElementById("myImg").src = img_array[1];
			document.getElementById("myImg-tel").src = img_array[1];
			document.getElementById("myImg-R").src = img_array[2];
			document.getElementById("myImg-L").src = img_array[0];
			
			
			
			
			document.getElementById('Text-Com').innerHTML="Company-2";
		 	document.getElementById('Text-Site').innerHTML="https://server-2.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatibus quod nobis veniam, numquam asperiores? Officiis saepe delectus ipsum, magnam laboriosam optio velit beatae officia aliquam expedita aut eligendi molestiae quos necessitatibus facilis neque itaque ab voluptate, praesentium quisquam sapiente dolores in blanditiis nemo! Iure aliquam exercitationem, sunt, consequatur hic tempora necessitatibus doloremque error laboriosam expedita neque quod, soluta perferendis! Illum iste placeat ut quibusdam voluptates, deleniti repellendus magni doloribus?";
			
			
			
			document.getElementById('Text-Com-tel').innerHTML="Company-2";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server-2.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptatibus quod nobis veniam, numquam asperiores? Officiis saepe delectus ipsum, magnam laboriosam optio velit beatae officia aliquam expedita aut eligendi molestiae quos necessitatibus facilis neque itaque ab voluptate, praesentium quisquam sapiente dolores in blanditiis nemo! Iure aliquam exercitationem, sunt, consequatur hic tempora necessitatibus doloremque error laboriosam expedita neque quod, soluta perferendis! Illum iste placeat ut quibusdam voluptates, deleniti repellendus magni doloribus?";
			
		}
	if(i == 2)
		{
			document.getElementById("myImg").src = img_array[2];
			document.getElementById("myImg-tel").src = img_array[2];
			document.getElementById("myImg-R").src = img_array[0];
			document.getElementById("myImg-L").src = img_array[1];
			
			
			
			document.getElementById('Text-Com').innerHTML="Company-3";
		 	document.getElementById('Text-Site').innerHTML="https://server-3.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iste.";
			
			
			document.getElementById('Text-Com-tel').innerHTML="Company-3";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server-3.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iste.";
		}
		
		  
		  if(i == -1)
	{
		i = i + 3;
		document.getElementById("myImg").src = img_array[2];
		document.getElementById("myImg-tel").src = img_array[2];
		document.getElementById("myImg-R").src = img_array[0];
		document.getElementById("myImg-L").src = img_array[1];
		
		
		
		
			document.getElementById('Text-Com').innerHTML="Company-3";
		 	document.getElementById('Text-Site').innerHTML="https://server-3.blabla";
		 	document.getElementById('Text-Name').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iste.";
		
		
			document.getElementById('Text-Com-tel').innerHTML="Company-3";
		 	document.getElementById('Text-Site-tel').innerHTML="https://server-3.blabla";
		 	document.getElementById('Text-Name-tel').innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iste.";
	}
		  
		  
		  
		  
	
}
	  