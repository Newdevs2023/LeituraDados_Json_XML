function loadXMLDoc() {
    //XMLHttpRequest serve para interagir com servidores;
    var xmlDoc = new XMLHttpRequest();

    xmlDoc.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            leituraArquivo(this);
        }
    }

    xmlDoc.open("GET", "../dados/estoque.xml");
    xmlDoc.send();
}

loadXMLDoc();

function leituraArquivo(xml) {
    var i;
    var xmlArquivo = xml.responseXML;
    var table =
        `<tr>
             <th>id</th>
             <th>nome</th>
             <th>marca</th>
             <th>cnpj_fornecedor</th>
             <th>preco_custo</th>
             <th>preco_venda</th>
             <th>qtd_atual</th>
             <th>estoque_min</th>
        </tr>`;

    var arquivo = xmlArquivo.getElementsByTagName("produto");

    for (i = 0; i < arquivo.length; i++) {
        //A propriedade nodeValue retorna o valor de um nó 
        //para retornar o texto de um elemento é necessario retornar o valor do 
        //nó (element.childNodes[0].nodeValue)
        table +=
            `<tr>
                <td>${arquivo[i].getElementsByTagName("id")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("marca")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("cnpj_fornecedor")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("preco_custo")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("preco_venda")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("qtd_atual")[0].childNodes[0].nodeValue}</td>
                <td>${arquivo[i].getElementsByTagName("estoque_min")[0].childNodes[0].nodeValue}</td>
            </tr>`
    }
    document.getElementById("tbl1").innerHTML = table;
}
