
function toggleAvatar(){
  const box = document.getElementById('avatarBox');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function showHobby(type){
  const img = document.getElementById('hobbyImg');
  if(type === 'cricket'){
    img.src = 'https://i.pinimg.com/474x/54/e0/1b/54e01b7381afdd7f2ed66bb759620f27.jpg';
  }
  if(type === 'mytho'){
    img.src = 'https://i.scdn.co/image/ab67616d0000b27311bd86b7b1f768bb79d74528';
  }
  if(type === 'sleep'){
    img.src = 'https://media.istockphoto.com/id/1389534656/photo/teenager-sleeping-in-bed.jpg?s=612x612&w=0&k=20&c=NZsxZph84-UbVoiaKWgb9Tw2bI-Z_oLavjxz6M-qX_Q=';
  }
}
