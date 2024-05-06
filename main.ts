import {Serie} from './serie.js' 
import {dataSeries} from './data.js';


let seriesTable: HTMLElement = document.getElementById("series")!;


mostrarDatosSeries(dataSeries);
mostrarPromedioSeries(dataSeries);

function mostrarDatosSeries(misSeries: Serie[]):void{
    let tbodySeries: HTMLElement = document.createElement("tbody");

        for(let serie of misSeries){
        
            let trElement: HTMLTableRowElement = document.createElement("tr");
    
            trElement.innerHTML = `<td style="font-weight: bold">${serie.num}</td>
            <td style="color: rgb(36, 129, 211)">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.season}</td>`;

        trElement.onclick = function() {mostrarCardSerie(serie);};

        tbodySeries.appendChild(trElement);
    }

    seriesTable.appendChild(tbodySeries);
}
function mostrarPromedioSeries(misSeries: Serie[]):void{

    let trElement: HTMLElement = document.createElement("tr");
    let tdElement: HTMLTableCellElement = document.createElement("td");

    let sumaSeries: number = 0;

    
    dataSeries.forEach(n => sumaSeries+= n.season);

    let promedio: number =sumaSeries/misSeries.length;

    tdElement.colSpan = 4;
    tdElement.textContent = `Seasons average: ${promedio}`;

    trElement.appendChild(tdElement);
    seriesTable.appendChild(trElement);

}

function mostrarCardSerie(serie: Serie): void {

    let cardContainer = document.getElementById('card')!;

    
    cardContainer.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="./img/${serie.image}" class="card-img-top img-fluid" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-titulo">${serie.name}</h5>
          <p class="card-descripcion">${serie.description}</p>
          <a class="card-website" href = ${serie.link}>${serie.link}</a>
        </div>
      </div>
    `;
  }