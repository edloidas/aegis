/**
 * AEGIS
 * @author edloidas
 * @link http://edloidas.github.io/aegis
 */

(function () {
    var active = false;

    var triangles = document.getElementsByClassName( 'triangle' );
    var form = document.getElementById( 'form' );

    function activate() {
      active = !active;
      form.className = active ? 'active' : '';
    }

    for ( var i = 0; i < triangles.length; i++ ) {
      triangles[ i ].addEventListener( 'click', activate, false);
    }
})();
