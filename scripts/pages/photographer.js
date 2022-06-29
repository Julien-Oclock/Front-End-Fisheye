
//get photographer id with URL parameter
function getphotographerId() {
    return new URL(window.location.href).searchParams.get('id');
  }



