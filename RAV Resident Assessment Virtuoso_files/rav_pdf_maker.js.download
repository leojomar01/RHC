"use strict";

function createPDF() {
	$('#print-pdf-rav').on('click', function () {
		let docDefinition = {
			pageOrientation: 'landscape',
			content: [
				{ style: 'h1', text: 'RAV Resident Assessment Virtuoso' },
				{ style: 'h2', text: $('#facility-name option:selected').text() },
				{
					style: 'table',
					table: {
						widths: [160, 60, 40, 180, 35],
						body: [
							[
								{ style: 'tBold', text: 'Resident' },
								{ style: 'tBold', text: 'Assessment' },
								{ style: 'tBold', text: 'HIPPS' },
								{ style: 'tBold', text: 'Default Clinical Category' },
								{ style: 'tBold', text: 'Days' },
							],
							[
								{ text: $('#resident-name').val() },
								{ text: $('#assessment-type option:selected').text() },
								{ text: $('#hipps-text').html() },
								{ text: $('#clinical-category option:selected').text() },
								{ text: $('#vpd-days option:selected').text() }
							]
						] //body
					} //table
				}, //block
				{
					style: 'table',
					table: {
						widths: [50, 75, 75, 75, 75, 140, 30, 30, 30],
						body: [
							[
								{ style: 'tBold', text: 'Discipline' },
								{ style: 'tBold', text: 'Pay FY 2020' },
								{ style: 'tBold', text: 'Pay FY 2021' },
								{ style: 'tBold', text: 'Pay FY 2022' },
								{ style: 'tBold', text: 'Pay FY 2023' },
								{ style: 'tBold', text: 'Category' },
								{ style: 'tBold', text: 'GG Score' },
								{ style: 'tBold', text: 'Group' },
								{ style: 'tBold', text: 'CMI' }
							],
							[
								{ style: 'tBold', text: 'PT' },
								{ text: $('#pt-pay-2020').html() },
								{ text: $('#pt-pay-2021').html() },
								{ text: $('#pt-pay-2022').html() },
								{ text: $('#pt-pay-2023').html() },
								{ text: $('#pt-category').html() },
								{ text: $('#pt-gg-score').html() },
								{ text: $('#pt-group').html() },
								{ text: $('#pt-cmi').html() }
							],
							[
								{ style: 'tBold', text: 'OT' },
								{ text: $('#ot-pay-2020').html() },
								{ text: $('#ot-pay-2021').html() },
								{ text: $('#ot-pay-2022').html() },
								{ text: $('#ot-pay-2023').html() },
								{ text: $('#ot-category').html() },
								{ text: $('#ot-gg-score').html() },
								{ text: $('#ot-group').html() },
								{ text: $('#ot-cmi').html() }
							],
							[
								{ style: 'tBold', text: 'SLP' },
								{ text: $('#slp-pay-2020').html() },
								{ text: $('#slp-pay-2021').html() },
								{ text: $('#slp-pay-2022').html() },
								{ text: $('#slp-pay-2023').html() },
								{ text: $('#slp-category').html() },
								{ text: $('#slp-gg-score').html() },
								{ text: $('#slp-group').html() },
								{ text: $('#slp-cmi').html() }
							],
							[
								{ style: 'tBold', text: 'NTA' },
								{ text: $('#nta-pay-2020').html() },
								{ text: $('#nta-pay-2021').html() },
								{ text: $('#nta-pay-2022').html() },
								{ text: $('#nta-pay-2023').html() },
								{ text: $('#nta-category').html() },
								{ text: $('#nta-gg-score').html() },
								{ text: $('#nta-group').html() },
								{ text: $('#nta-cmi').html() }
							], [
								{ style: 'tBold', text: 'NUR' },
								{ text: $('#nur-pay-2020').html() },
								{ text: $('#nur-pay-2021').html() },
								{ text: $('#nur-pay-2022').html() },
								{ text: $('#nur-pay-2023').html() },
								{ text: $('#nur-category').html() },
								{ text: $('#nur-gg-score').html() },
								{ text: $('#nur-group').html() },
								{ text: $('#nur-cmi').html() }
							], [
								{ style: 'tBold', text: 'NCM' },
								{ text: $('#ncm-pay-2020').html() },
								{ text: $('#ncm-pay-2021').html() },
								{ text: $('#ncm-pay-2022').html() },
								{ text: $('#ncm-pay-2023').html() },
								{ text: '' },
								{ text: '' },
								{ text: '' },
								{ text: '' }
							]
						] //body
					} //table
				},
				{
					style: 'table',
					table: {
						widths: [90, 96, 96, 96, 90],
						body: [
							[
								{ style: 'tBold', text: 'Fiscal Year' } ,
								{ style: 'tBold', text: 'Total (1-3)' },
								{ style: 'tBold', text: 'Total (4-20)' },
								{ style: 'tBold', text: 'Avg (1-20)' },
								{ style: 'tBold', text: 'PPD Day ' + $('#vpd-days option:selected').text() }
							],
							[
								'2020',
								$('#total13-2020').html(),
								$('#total420-2020').html(),
								$('#avg120-2020').html(),
								$('#ppdDay-value-2020').html(),
							],
							[
								'2021',
								$('#total13-2021').html(),
								$('#total420-2021').html(),
								$('#avg120-2021').html(),
								$('#ppdDay-value-2021').html(),
							],
							[
								'2022',
								$('#total13-2022').html(),
								$('#total420-2022').html(),
								$('#avg120-2022').html(),
								$('#ppdDay-value-2022').html(),
							],
							[
								'2023',
								$('#total13-2023').html(),
								$('#total420-2023').html(),
								$('#avg120-2023').html(),
								$('#ppdDay-value-2023').html(),
							],
						] //body
					} //table
				},
				{
					columns: [
						{
							style: 'table',
							width: 263,
							table: {
								widths: [33, 200],
								alignment: 'left',
								body: [
									[
										{style: 'tBold', colSpan: 2, text: 'Section GG' }, ''
									],
									[
										($('#GG0130A1 option:selected').text() == '' ? '' : $('#GG0130A1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0130A1. Eating' },
									],
									[
										($('#GG0130B1 option:selected').text() == '' ? '' : $('#GG0130B1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0130B1. Oral Hygiene' }, 
									],
									[
										($('#GG0130C1 option:selected').text() == '' ? '' : $('#GG0130C1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0130C1. Toileting Hygiene' },
									],
									[
										($('#GG0170B1 option:selected').text() == '' ? '' : $('#GG0170B1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170B1. Sit to Lying' },
									],
									[
										($('#GG0170C1 option:selected').text() == '' ? '' : $('#GG0170C1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170C1. Lying to Sitting on Side of Bed' },
									],
									[
										($('#GG0170D1 option:selected').text() == '' ? '' : $('#GG0170D1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170D1. Sit to Stand' },
									],
									[
										($('#GG0170E1 option:selected').text() == '' ? '' : $('#GG0170E1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170E1. Chair/Bed-to-Chair' },
									],
									[
										($('#GG0170F1 option:selected').text() == '' ? '' : $('#GG0170F1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170F1. Toilet Transfer' },
									],
									[
										($('#GG0170I1 option:selected').text() == '' ? '' : $('#GG0170I1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170I1. Does the resident walk 10 feet?' },
									],
									[
										($('#GG0170J1 option:selected').text() == '' ? '' : $('#GG0170J1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170J1. Walk 50 Feet with Two Turns' },
									],
									[
										($('#GG0170K1 option:selected').text() == '' ? '' : $('#GG0170K1 option:selected').val()),
										{ style: 'aLeft', text: 'GG0170K1. Walk 150 Feet' },
									],
								] //body
							}//table
						},
						[
							{
								style: 'table',
								table: {
									widths: [33, 200],
									alignment: 'left',
									body: [
										[
											{ style: 'tBold', colSpan: 2, text: 'Speech and Language Pathology' }, ''
										],
										[
											($('#slp_1').prop('checked') ? 'X' : ''),
											{ style: 'aLeft', text: 'SLP Comorbidities Present' }
										],
										[
											($('#slp_2').prop('checked') ? 'X' : ''),
											{ style: 'aLeft', text: 'Cognitive Impairment' }
										],
										[
											($('#slp_3').prop('checked') ? 'X' : ''),
											{ style: 'aLeft', text: 'Mechanically Altered Diet' }
										],
										[
											($('#slp_4').prop('checked') ? 'X' : ''),
											{ style: 'aLeft', text: 'Swallowing Disorder' }
										],
									] //body
								}//table
							}, {
								style: 'table',
								table: {
									widths: [33,200],
									body: [
										[
											{ style: 'tBold', colSpan: 2, text: 'Nursing' } , ''
										],
										[
											'X',
											{ style: 'aLeft', text: $('.nur-pdpm-cmg:checked').attr('data-pdpm-rug') + ' - ' + $('.nur-pdpm-cmg:checked').attr('data-nursing-grp-name') },
										],
									] //body
								}//table
							},
						]
					] //columns
				},
			],
			footer: function (page, pages) {
				return {
					margin: [40, 5, 40, 5],
					columns: [
						{
							style: 'aLeft',
							text: 'ReClaim Healthcare Administrative Services',
						},
						{
							style: 'aRight',
							text: [
								{ text: page.toString(), italics: true },
								" of ",
								{ text: pages.toString(), italics: true }
							]
						}
					] //column
				} //return
			}, //footer
			styles: {
				h1: {
					fontSize: 13,
					bold: true,
					alignment: 'center',
					margin: [0 , 0 , 0, 3]
				},
				h2: {
					fontSize: 11,
					alignment: 'center',
					margin: [0 , 0 , 0, 6]
				},
				table: {
					margin: [0, 6, 0, 6],
					alignment: 'left'
				},
				tBold: {
					bold: true
				},
				aLeft: {
					alignment: 'left'
				},
				aRight: {
					alignment: 'right'
				},
			},
			defaultStyle: {
				// alignment: 'justify'
				//columnGap: 10,
				fontSize: 10
			}
		};

		let ntaHeader = {
			style: 'table',
			table: {
				widths: [33, '*'],
				body: [
					[
						{ style: 'tBold', colSpan: 2, text: 'Non-Therapy Ancillaries' }, ''
					],
				] //body
			}, //table
		}; //obj

		let ntaDetailStruct = {
			style: 'table',
			table: {
				widths: [33, '*'],
				body: [
					[
						{ style: ['aLeft', 'tBold'], colSpan: 2, text: 'NTA - Section' }, ''
					]
				] //body
			}, //table
		}; //obj

		let prevNTA = '', currNTA = '';
		let ntaDetails, ntaDetailArray;
		docDefinition.content.push(ntaHeader);
		let ic = 1;
		$('input[name="nta[]"]:checked').each(function () {
			currNTA = $(this).attr('data-nta-section');
			if (prevNTA != currNTA) {
				ntaDetails = JSON.parse(JSON.stringify(ntaDetailStruct));
				ntaDetails.table.body[0][0].text = 'NTA - Section ' + currNTA;
				prevNTA = currNTA;
				docDefinition.content.push(ntaDetails);
			}
			ntaDetailArray = new Array('X', { style: 'aLeft', text: $(this).attr('data-nta-mds') + ' - ' + $(this).attr('data-nta-condition') });
			ntaDetails.table.body.push(ntaDetailArray);
		});

		pdfMake.createPdf(docDefinition).open(); //print
	});
}