<template >
<body>
  <span v-if="$i18n.locale=='en'">
	<div class="list">
		<div class="row">
			<div class="col-4">
				<p style="font-size: 20px;"><b>ABC Enterprise</b></p>
				<p><i>We have everything from A to C</i></p>
			</div>
			<div class="col-4"></div>
			<div class="col-4"><p class="invoice">INVOICE</p></div>
		</div>
		
		<div class="row">
			<div class="col-4">
				<p>3rd Rock from the Sun Avenue<br />
				You-Are-Here, Ontario<br />
				Phone: 123.456.7890 Fax: 123.456.7891</p>
			</div>
			<div class="col-4"></div>
			<div class="col-4">
				<p class="invoiceSub">INVOICE #007</p>
				<p class="invoiceSub">DATE: 2019-10-18</p>
			</div>
		</div>
		
		<div class="row">
			<div class="col-4">
				<p><b>BILL TO:</b><br />
				Boss Number 1<br />
				Important Department<br />
				Parliament Hill<br />
				Ottawa, ON<br />
				Phone: 123-456-7890<br />
				</p>
			</div>
			<div class="col-4">
				<p><b>SHIP TO:</b><br />
				Boss Number 1<br />
				Important Department<br />
				Parliament Hill<br />
				Ottawa, ON<br />
				Phone: 123-456-7890<br />
				</p>
			</div>
			<div class="col-4">
			</div>
		</div>
		
		<div class="row">
			<div class="col-4">
				<p><b>COMMENTS OR SPECIAL INSTRUCTIONS:</b><br />
				None</p>
			</div>
			<div class="col-4">
				
			</div>
			<div class="col-4">
			</div>
		</div>
		
		<div class="row">
			<table align="center" class="table1">
				<tr>
					<th>SALESPERSON</th>
					<th>P.O. NUMBER</th>
					<th>SHIP DATE</th>
					<th>SHIPPED VIA</th>
					<th>F.O.B. POINT</th>
					<th>TERMS</th>
				</tr>
				<tr>
					<td>Bob Sales</td>
					<td>10203040</td>
					<td>2019-10-10</td>
					<td>Snail Mail</td>
					<td></td>
					<td>Due on receipt</td>
				</tr>
			</table>
		</div>
		<br />
		<div class="row">
			<table align="center" class="table2">
				<tr>
					<th>QUANTITY</th>
					<th>DESCRIPTION</th>
					<th>UNIT PRICE</th>
					<th>TOTAL</th>
				</tr>
				<tr>
					<td>5</td>
					<td class="descriptionText">Polk-a-dot highlighters</td>
					<td class="unitText">2.00</td>
					<td class="totalText">10.00</td>
				</tr>
				<tr>
					<td>20</td>
					<td class="descriptionText">Pairs of rose colored glasses</td>
					<td class="unitText">25.00</td>
					<td class="totalText">500.00</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<tr class="total">
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorderText">SUBTOTAL</td>
					<td class="totalText">$510.00</td>
				</tr>
				<tr class="total">
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorderText">TAX RATE</td>
					<td class="totalText">13.00%</td>
				</tr>
				<tr class="total">
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorderText">SALES TAX</td>
					<td class="totalText">66.30</td>
				</tr>
				<tr class="total">
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorderText">SHIPPING &amp; HANDLING</td>
					<td class="totalText">-</td>
				</tr>
				<tr class="total">
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorder">&nbsp;</td>
					<td class="NoBorderText"><b>TOTAL</b></td>
					<td class="totalText"><b>$576.30</b></td>
				</tr>
			</table>
		</div>
		
		<div class="row">
			<p>Make all checks payable to ABC Enterprise <br />
			If you have any questions concerning this invoice, contact Bob at 123-456-7890 or Bob@ABCEnterprises.ca</p>
		</div>
		<br />
		<div class="row" align="center">
			<b>THANK YOU FOR YOUR BUSINESS!</b>
		</div>
		<br />
	</div>
  </span>
  <span v-if="$i18n.locale=='fr'">
    <div class="list">
      <div class="row">
        <div class="col-4">
          <p style="font-size: 20px;"><b>Entreprise ABC</b></p>
          <p><i>Tous pour vous de A à C</i></p>
        </div>
        <div class="col-4"></div>
        <div class="col-4"><p class="invoice">FACTURE</p></div>
      </div>
      
      <div class="row">
        <div class="col-4">
          <p>Avenue du soleil<br />
          Vous-êtes-ici, Ontario<br />
          Téléphone: 123.456.7890 Fax: 123.456.7891</p>
        </div>
        <div class="col-4"></div>
        <div class="col-4">
          <p class="invoiceSub">NO DE LA FACTURE : 007</p>
          <p class="invoiceSub">DATE : 18 OCT 2019</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-4">
          <p><b>FACTURER À :</b><br />
          Patron numéro 1<br />
          Ministère important<br />
          Colline du Parlement<br />
          Ottawa (ON)<br />
          Téléphone : 123-456-7890<br />
          </p>
        </div>
        <div class="col-4">
          <p><b>EXPÉDIER À :</b><br />
          Patron numéro 1<br />
          Ministère important<br />
          Colline du Parlement<br />
          Ottawa (ON)<br />
          Téléphone : 123-456-7890<br />
          </p>
        </div>
        <div class="col-4">
        </div>
      </div>
      
      <div class="row">
        <div class="col-4">
          <p><b>Commentaires ou instructions spéciales</b><br />
          Aucun</p>
        </div>
        <div class="col-4">
          
        </div>
        <div class="col-4">
        </div>
      </div>
      
      <div class="row">
        <table align="center" class="table1">
          <tr>
            <th>VENDEUR</th>
            <th>NO DE COMMANDE</th>
            <th>DATE D’EXPÉDITION</th>
            <th>MODE D’EXPÉDITION</th>
            <th>POINT DE FAB</th>
            <th>TERMES</th>
          </tr>
          <tr>
            <td>Bob Sales</td>
            <td>10203040</td>
            <td>10 oct 2019</td>
            <td>Courrier ordinaire</td>
            <td></td>
            <td>Payable sur réception</td>
          </tr>
        </table>
      </div>
      <br />
      <div class="row">
        <table align="center" class="table2">
          <tr>
            <th>QUANTITÉ</th>
            <th>DESCRIPTION</th>
            <th>PRIX PAR UNITÉ</th>
            <th>MONTANT</th>
          </tr>
          <tr>
            <td>5</td>
            <td class="descriptionText">Surligneurs</td>
            <td class="unitText">2.00</td>
            <td class="totalText">10.00</td>
          </tr>
          <tr>
            <td>20</td>
            <td class="descriptionText">Paires de lunettes roses</td>
            <td class="unitText">25.00</td>
            <td class="totalText">500.00</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="total">
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorderText">SOUS-TOTAL</td>
            <td class="totalText">$510.00</td>
          </tr>
          <tr class="total">
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorderText">TAUX DE TAXATION</td>
            <td class="totalText">13.00%</td>
          </tr>
          <tr class="total">
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorderText">TAXE DE VENTE</td>
            <td class="totalText">66.30</td>
          </tr>
          <tr class="total">
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorderText">FRAIS D'EXPÉDITION ET DE MANUTENTION</td>
            <td class="totalText">-</td>
          </tr>
          <tr class="total">
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorder">&nbsp;</td>
            <td class="NoBorderText"><b>TOTAL</b></td>
            <td class="totalText"><b>$576.30</b></td>
          </tr>
        </table>
      </div>
      
      <div class="row">
        <p>Libellez tous les chèques à l'ordre d'Entreprise ABC <br />
        Si vous avez des questions concernant cette facture, communiquez avec Bob au 123-456-7890 ou à Bob@EntreprisesABC.ca</p>
      </div>
      <br />
      <div class="row" align="center">
        <b>NOUS VOUS REMERCIONS POUR VOTRE SOUTIEN!</b>
      </div>
      <br />
    </div>
  </span>
</body>
</template>
<i18n>
  {
    "en":{
      "Invoice": "INVOICE",
      "ABC": "ABC Enterprise",
      "tagline": "We have everything from A to C",
      "date": "DATE:",
      "18-10-19": "18/10/2019",
      "address1": "3rd Rock from the Sun Avenue",
      "invoice#": "`007",
      "city1": "You-Are-Here, Ontario",
      "phone1": "Phone 555.456.7890 Fax 555.456.7891",
      "billTo": "Bill To:",
      "shipTo": "Ship To:",
      "boss1": "Boss Number 1",
      "impDep": "Important Department",
      "parlHill": "Parliament Hill",
      "ottawa": "Ottawa, ON",
      "phone2": "Phone 555-456-7890",
      "comments": "Comments or Special Instructions:",
      "none": "None",
      "salesperson": "SALESPERSON",
      "poNumber": "P.O. NUMBER",
      "shipDate": "SHIP DATE",
      "shipVia": "SHIP VIA",
      "fobPoint": "F.O.B. POINT",
      "terms": "TERMS",
      "10-10-19": "10/10/2019",
      "snail": "Snail Mail",
      "due": "Due on receipt",
      "quantity": "QUANTITY",
      "desc": "DESCRIPTION",
      "unitPrice": "UNIT PRICE",
      "amount": "AMOUNT",
      "highlighters": "Polk-a-dot highlighters",
      "2": "$2.00",
      "10": "$10.00",
      "glasses": "Pairs of rose colored glasses",
      "25": "$25.00",
      "500": "$500.00",
      "subtotal": "SUBTOTAL",
      "510": "$510.00",
      "taxRate": "TAX RATE",
      "13": "13.00%",
      "tax": "SALES TAX",
      "66": "$66.30",
      "shipping": "SHIPPING & HANDLING",
      "total": "TOTAL",
      "576": "$576.30",
      "checks": "Make all checks payable to",
      "questions": "If you have any questions concerning this invoice, contact Bob at 555-456-7890 or Bob@ABCEnterprises.ca"
    },
    "fr":{
      "Invoice":"FACTURE",
      "ABC": "Entreprise ABC",
      "tagline": "Tous pour vous de A à C",
      "date": "DATE :",
      "18-10-19": "18 oct. 2019",
      "address1": "Avenue du soleil",
      "invoice#": "`007",
      "city1": "Vous-êtes-ici, Ontario",
      "phone1": "Téléphone 123.456.7890   Fax 123.456.7891",
      "billTo": "Facturer à :",
      "shipTo": "Expédier à :",
      "boss1": "Patron numéro 1",
      "impDep": "Ministère important",
      "parlHill": "Colline du Parlement",
      "ottawa": "Ottawa, ON",
      "phone2": "Téléphone 123-456-7890",
      "comments": "Commentaires ou instructions spéciales",
      "none": "Aucun",
      "salesperson": "VENDEUR",
      "poNumber": "NO DE COMMANDE",
      "shipDate": "DATE D'EXPÉDITION",
      "shipVia": "MODE D'EXPÉDITION",
      "fobPoint": "POINT DE FAB",
      "terms": "TERMES",
      "10-10-19": "10 oct. 2019",
      "snail": "Courrier ordinaire",
      "due": "Payable sur réception",
      "quantity": "QUANTITÉ",
      "desc": "DESCRIPTION",
      "unitPrice": "PRIX PAR UNITÉ",
      "amount": "MONTANT",
      "highlighters": "Surligneurs",
      "2": "2,00 $",
      "10": "10,00 $",
      "glasses": "Paires de lunettes roses",
      "25": "25,00 $",
      "500": "500,00 $",
      "subtotal": "SOUS-TOTAL",
      "510": "510,00 $",
      "taxRate": "TAUX DE TAXATION",
      "13": "13,00 %",
      "tax": "TAXE DE VENTE",
      "66": "66,30 $",
      "shipping": "FRAIS D'EXPÉDITION ET DE MANUTENTION",
      "total": "TOTAL",
      "576": "576,30 $",
      "checks": "Libellez tous les chèques à l'ordre d'",
      "questions": "Si vous avez des questions concernant cette facture, communiquez avec Bob au 123-456-7890 ou à Bob@ABCEnterprises.ca"
    }
  }
</i18n>

<style>
    .col-05{width: 6.66%}
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    [class*="col-"] {
        float: left;
        padding: 15px;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }

    h1 {
        color:rgb(88, 124, 132);
    }

    h2 {
        color: white;
        font-size: 19px;
        font-weight: normal;
    }
	
	.invoice{
		text-align: center;
		font-size: 30px;
	}
	
	.invoiceSub{
		text-align: center;
	}
	
	.list{
		position: relative;
		width: 100%;
		border: 2px black solid;
		margin: 10px;
		padding: 50px;
	}
	
	
	.table1{
		width: 90%;
		border-collapse: collapse;
	}
	.table1 th{
		border: 1px solid black;
		padding: 10px;
	}
	.table1 td{
		border: 1px solid black;
		padding: 15px;
		text-align: center;
	}
	
	.table2{
		width: 90%;
		border-collapse: collapse;
	}
	.table2 th{
		border: 1px solid black;
		padding: 10px;
	}
	.table2 td{
		border: 1px solid black;
		padding: 15px;
		text-align: center;
	}
	
	.descriptionText{
		text-align: left!important;
	}
	.totalText{
		text-align: right!important;
	}
	
	.NoBorder{
		border: none!important;
	}
	.NoBorderText{
		border: none!important;
		text-align: right!important;
	}

</style>