<button onclick="mostrarMensaje()">Haz clic aquí</button>
<p id="mensaje" style="display:none;">¡Gracias por hacer clic!</p>

<script>
function mostrarMensaje() {
    document.getElementById("mensaje").style.display = "block";
}
</script>
