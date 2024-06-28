import './Datatable.css'

// Asegúrate de importar React y otros hooks necesarios.
import { useEffect } from 'react';
// Importa jQuery y DataTables.
import $ from 'jquery';
// import 'datatables.net-dt/css/jquery.dataTables.css';

import 'datatables.net-buttons-dt';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';

// Importa CSS de DataTables y los módulos necesarios.
import 'datatables.net-dt/css/dataTables.dataTables.css';
// import 'datatables.net-responsive-dt/css/responsive.dataTables.css'; NO ESTA ESTO EN NODE MODULES

// Importa DataTables y sus extensiones.
import 'datatables.net-dt';
import 'datatables.net-responsive';

import jszip from 'jszip';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
// Necesario para que la exportación a Excel y PDF funcione
window.JSZip = jszip;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Datatable = () => {
  useEffect(() => {
      // Destruye cualquier DataTable existente antes de inicializar uno nuevo.
      if ($.fn.DataTable.isDataTable('#myTable')) {
          $('#myTable').DataTable().destroy();
      }

      // Inicializa DataTables cuando el componente se monta.
      $('#myTable').DataTable({
          dom: '<"top"Bf>rt<"bottom"lip><"clear">',
          buttons: [
              {
                  extend: "excelHtml5",
                  text: 'Excel',
                  titleAttr: "Export to Excel",
                  className: "btn btn-sm",
              },
              {
                  extend: "pdfHtml5",
                  text: 'PDF',
                  titleAttr: "Export to PDF",
                  className: "btn btn-sm",
              },
              {
                  extend: "print",
                  text: 'Print',
                  titleAttr: "Print Table",
                  className: "btn btn-sm",
              },
          ],
          responsive: true,
          pagingType: "simple_numbers",
      });

      // Limpia DataTable cuando el componente se desmonta para evitar fugas de memoria.
      return () => {
          if ($.fn.DataTable.isDataTable('#myTable')) {
              $('#myTable').DataTable().destroy();
          }
      };
  }, []);

  return (
      <table id="myTable" className="display responsive nowrap">
          <thead>
              <tr>
                  <th>N</th>
                  <th>Estado</th>
                  <th>Vehículo</th>
                  <th>Tienda</th>
                  <th>Nota</th>
                  <th>Varios</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Disponible</td>
                  <td>Scooter Vitalia 150cc.</td>
                  <td>Zama</td>
                  <td>Entrega hoy</td>
                  <td>Varios</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Rentado</td>
                  <td>ATV 200cc.</td>
                  <td>Selina</td>
                  <td>Service pendiente</td>
                  <td>Varios</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>Disponible</td>
                  <td>Scooter Vitalia 150cc.</td>
                  <td>Zama</td>
                  <td>Entrega hoy</td>
                  <td>Varios</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>Rentado</td>
                  <td>ATV 200cc.</td>
                  <td>Selina</td>
                  <td>Service pendiente</td>
                  <td>Varios</td>
              </tr>
              {/* Añade más filas según sea necesario */}
          </tbody>
      </table>
  );
};

export default Datatable;