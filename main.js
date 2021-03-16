var images = ["ME.jpg","SISTER.jpg", "DAD.jpg" , "MOM.jpg","ME.jpg"];
            var names = ["Family Book","", "Tshewang", "Tshering", "Wangyel"];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 4
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }