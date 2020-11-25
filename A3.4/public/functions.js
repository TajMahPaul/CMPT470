window.onload = function() {
    var duration = 3000; 
    setTimeout(function () { $('#main-alert').hide(); }, duration);
};

function edit (result){
    cells = Array.from(result.parentElement.parentElement.cells)
    cells = cells.map((cell) =>{
        return cell.innerHTML;
    })
    console.log("here");
    $('#edit-form').attr('action', '/api/rectangles/' + cells[0]);
    $('#modal-id').val(cells[0]);
    $('#modal-color').val(cells[1]);
    $('#modal-width').val(cells[2]);
    $('#modal-height').val(cells[3]);
    $('#edit-modal').modal('show')
}