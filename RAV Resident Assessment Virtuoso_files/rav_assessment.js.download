(function($) {
  "use strict";

  //--script tag from calculator
  //--defaults: clinicalCategory1, currentUrbanRatePerDiem, pt_ot_cmi, slp_cmi, nta_cmi, hipps
  let totalSectionGG_NURS = 0, totalSectionGG_PTOT = 0;
  let clinicCategory1, clinicCategory2;
  let categoryPTOT, categorySLP, categoryNTA;
  let facilityWageIndex;
  let ptBasePay = 0, otBasePay = 0, slpBasePay = 0, ntaBasePay = 0, ncmBasePay = 0, nurBasePay = 0;
  let ptPay = 0, otPay = 0, slpPay = 0, ntaPay = 0, ncmPay = 0, nurPay = 0;
  let pt_cmi = 0, ot_cmi = 0, slp_cmi = 0, nur_cmi = 1, nta_cmi = 0;
  let slp1_checked = 0, slp2_checked = 0;
  let nur_cat = 1;
  let total13 = 0, total420 = 0, avg120 = 0, totalPPD =0, vpd = 1, vpd_percent = 1;
  let ppdDay_val = 0, prev_ppdDay_val = 0, prev_ppdAvg_val = 0; //ppdAvg_val = 0
  let gSkip = 1; //global skip one time use only
  let rec_id = 0;
  const curr_cmi = 1; //latest index of discipline[CMI]
  //--Create our number formatter.
  let USDformat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  //--set PT OT SLP Category
  function setCategory_PT_OT_SLP() {
    clinicCategory1 = $('#clinical-category').val();
    clinicCategory2 = clinicalCategory1.find(cat => cat.id == clinicCategory1);

    //--pt-ot
    $('#pt-category, #ot-category').each(function() {
      $(this).text(clinicCategory2.title);
    });

    //--slp
    if ($('#clinical-category').val() == 2) {
      $('#slp-category').text('Acute Neurologic');
    } else {
      $('#slp-category').text('Non-Neurologic');
    }

    setPTOT_CMI();
  }

  function setPTOT_CMI() {
    //--group-pt_ot-cmi
    categoryPTOT = default_ptot_cmi.find(cat => (cat.cid == clinicCategory2.id && (totalSectionGG_PTOT <= cat.functionScore )) );
    $('#pt-group, #ot-group').each(function () {
      $(this).text(categoryPTOT.cmg);
    });

    pt_cmi = categoryPTOT.pt_cmi;
    ot_cmi = categoryPTOT.ot_cmi;

    $('#pt-cmi').text(pt_cmi[curr_cmi]);
    $('#ot-cmi').text(ot_cmi[curr_cmi]);

    setPay();
  }

  function setSLP_CMI(updatePay = true) {
    let grp1 = (($('#clinical-category option:selected').text() == 'Acute Neurologic') ? 1 : 0);
    grp1 = slp1_checked + grp1;

    categorySLP = default_slp_cmi.find(cat => (cat.grp1 == grp1 && cat.grp2 == slp2_checked));

    slp_cmi = categorySLP.cmi;
    $('#slp-group').text(categorySLP.cmg);
    $('#slp-cmi').text(slp_cmi[curr_cmi]);

    if (updatePay) {
      setPay();
    }
  }

  function setNUR_CMI(updatePay = true) {
    let nur_checked = $('input[name="nursing"]:checked');
    $('#nur-group').text(nur_checked.attr('data-pdpm-rug'));
    nur_cmi = nur_checked.val().split(",");
    $('#nur-cmi').text(nur_checked.val());
    $('#nur-cmi').text(nur_cmi[curr_cmi]);
    nur_cat = nur_checked.attr('data-nursing-grp');

    if (updatePay) {
      setPay();
    }
  }

  function setNTA_CMI() {
    let nta_total = 0;
    let nta_click = 0;
    let nta_list = {
      nta_check_SNF: 0,
      nta_check_H: 0,
      nta_check_I: 0,
      nta_check_K: 0,
      nta_check_M: 0,
      nta_check_O: 0
    };

    $('input[name="nta[]"]:checked').each(function() {
      nta_total += Number($(this).val());
      ++nta_list[$(this).attr('class').split(' ')[1]];
    });

    //--update nta section counters
    const n = Object.keys(nta_list);

    for (const n1 of n) {
      $('.'+n1+'1').text(' ['+nta_list[n1]+']');
    }

    categoryNTA = default_nta_cmi.find(cat => (nta_total >= cat.minScore && nta_total <= cat.maxScore));

    nta_cmi = categoryNTA.cmi;

    $('#nta-group').text(categoryNTA.nta_cmg);
    $('#nta-cmi').text(categoryNTA.cmi[curr_cmi]);
    $('#nta-gg-score').text(nta_total);
    setPay();
  }

  function setNUR_CAT() {
    let nurScore = parseInt($('#nur-gg-score').text());
    let count = 0;
    let nurGGScore;

    $('input.nur-pdpm-cmg').prop('checked', false);
    $('tr.nursing-cmg').removeClass('bg-highlighted-yellow');

    $('tr.nursing-cmg').each(function (i) {
      nurGGScore = $(this).find('.nur-gg-score').html().split(' - ');

      if (nurScore >= parseInt(nurGGScore[0]) && nurScore <= parseInt(nurGGScore[1])) {
        $(this).removeClass('d-none');
        count = i;
      } else {
        $(this).addClass('d-none');
      }
    });

    let lastNursing = $('.nursing-cmg').eq(count);
    lastNursing.addClass('bg-highlighted-yellow').find('td input').prop('checked', true);

    setNUR_CMI(false);
  }

  function setVPD() {
    vpd_percent = 1;
    if (vpd > 20) {
      vpd_percent = 1 - ((Math.floor(vpd / 7) - 2) * 0.02);
      vpd_percent = vpd_percent.toFixed(2);
    }

    setPay();
  }

  function setPay() {
    let snfHIV = 1;
    let ipa1 = 0, ipa2 = 0;
    let pdpm_labor_adjustment = currentPdpmBaseAdjustment.labor_related * facilityWageIndex;
    let pdpm_non_labor_related = 1 - currentPdpmBaseAdjustment.labor_related;

    ppdDay_val = 0;

    if (gSkip) { //IMPORTANT: one time call for page onload
      return;
    }

    if ($('#snf-hiv').is(':checked')) {
      snfHIV = 1.18;
    }

    let areaType = $('#facility-name option:selected').attr('data-area-type');
    let ratePerDiem = (areaType == 1) ? currentUrbanRatePerDiem : currentRuralRatePerDiem;

    ptBasePay = ratePerDiem.pt * pt_cmi[curr_cmi];
    otBasePay = ratePerDiem.ot * ot_cmi[curr_cmi];
    slpBasePay = ratePerDiem.slp * slp_cmi[curr_cmi];
    ntaBasePay = ratePerDiem.nta * nta_cmi[curr_cmi];
    nurBasePay = ratePerDiem.nur * nur_cmi[curr_cmi];

    ptPay = (ptBasePay * pdpm_labor_adjustment) + (ptBasePay * pdpm_non_labor_related);
    otPay = (otBasePay * pdpm_labor_adjustment) + (otBasePay * pdpm_non_labor_related);
    slpPay = (slpBasePay * pdpm_labor_adjustment) + (slpBasePay * pdpm_non_labor_related);
    ntaPay = (ntaBasePay * pdpm_labor_adjustment) + (ntaBasePay * pdpm_non_labor_related);
    nurPay = ((nurBasePay * pdpm_labor_adjustment) + (nurBasePay * pdpm_non_labor_related)) * snfHIV;
    ncmPay = (ratePerDiem.ncm * pdpm_labor_adjustment) + (ratePerDiem.ncm * pdpm_non_labor_related);

    $('#pt-pay').text(USDformat.format(ptPay.toFixed(2)));
    $('#ot-pay').text(USDformat.format(otPay.toFixed(2)));
    $('#slp-pay').text(USDformat.format(slpPay.toFixed(2)));
    $('#nta-pay').text(USDformat.format(ntaPay.toFixed(2)));
    $('#ncm-pay').text(USDformat.format(ncmPay.toFixed(2)));
    $('#nur-pay').text(USDformat.format(nurPay.toFixed(2)));

    total13 = ptPay + otPay + slpPay + (ntaPay * 3) + ncmPay + nurPay;
    total420 = ptPay + otPay + slpPay + ntaPay + ncmPay + nurPay;
    avg120 = (((total13 * 3) + (total420 * 17)) / 20);
    totalPPD = (ptPay * vpd_percent) + (otPay * vpd_percent) + slpPay + ntaPay + ncmPay + nurPay;

    $('#total13').text(USDformat.format(total13.toFixed(2)));
    $('#total420').text(USDformat.format(total420.toFixed(2)));
    $('#avg120').text(USDformat.format(avg120.toFixed(2)));

    $('#ppdDay-text').text('PPD DAY '+vpd);

    if (vpd <= 3) {
      ppdDay_val = total13;
    } else if ((vpd >= 4) && (vpd <= 20)) {
      ppdDay_val = total420;
    } else {
      ppdDay_val = totalPPD;
    }

    if (prev_ppdDay_val != 0) {
      ipa1 = ppdDay_val-prev_ppdDay_val;
    }

    $('#ppdDay-value').text(USDformat.format(ppdDay_val.toFixed(2)));
    $('#ppdDay-ipa').text(USDformat.format(ipa1.toFixed(2)) + ' IPA');

    $('#ppdDay-ipa').removeClass();
    if (ipa1 < 0) {
      $('#ppdDay-ipa').addClass('text-danger');
    } else if (ipa1 > 0) {
      $('#ppdDay-ipa').addClass('text-success');
      $('#ppdDay-ipa').text('+' + $('#ppdDay-ipa').text());
    }

    let hipps_3 = default_hipps_3.find(cat => ($('#nur-group').text() == cat.nur_cmg));
    let hipps = $('#pt-group').text()[1] + $('#slp-group').text()[1] + hipps_3.hipps + $('#nta-group').text()[1] + $('#assessment-type').val();

    $('#hipps-text').text(hipps);

    prev_ppdDay_val = ppdDay_val;
  }

  function saveRAV() {
    let data = {};
    let r = 0;
    let sectionGG, slp, nta;

    if ($.trim($('#resident-name').val()) === '') {
      showAlert('Resident Name is required.', 'alert-danger');
      $('#resident-name').focus();
      $('#save-rav').attr('disabled', false).html('Save');
      return false;
    }

    //data collection
    data.residentName = $('#resident-name').val();
    data.facilityId = $('#facility-name option:selected').attr('data-facility-id');
    data.clinicalCategory = $('#clinical-category option:selected').text();
    data.days = $('#vpd-days').val();
    data.hipps =$('#hipps-text').text();

    sectionGG = {};
    $('select.section-gg').each(function() {
      sectionGG[$(this).attr('id')] = $(this).find('option:selected').text();
    });
    data.sectionGG = JSON.stringify(sectionGG);

    slp = {};
    $('input.slp_check').each(function() {
      slp[$(this).attr('id')] = (this.checked) ? 1 :0;
    });
    data.slp = JSON.stringify(slp);

    nta = {};
    $('input.nta_check').each(function() {
      nta[r] = (this.checked) ? 1 : 0;
      ++r;
    });
    data.nta = JSON.stringify(nta);

    data.nurs = $('input[name="nursing"]:checked').attr('data-pdpm-rug');

    let ravResult = {
      pt: {
        pay: $('#pt-pay').html(),
        category: $('#pt-category').html(),
        ggScore: $('#pt-gg-score').html(),
        group: $('#pt-group').html()
      },
      ot: {
        pay: $('#ot-pay').html(),
        category: $('#ot-category').html(),
        ggScore: $('#ot-gg-score').html(),
        group: $('#ot-group').html()
      },
      slp: {
        pay: $('#slp-pay').html(),
        category: $('#slp-category').html(),
        ggScore: $('#slp-gg-score').html(),
        group: $('#slp-group').html()
      },
      nta: {
        pay: $('#nta-pay').html(),
        category: '',
        ggScore: $('#nta-gg-score').html(),
        group: $('#nta-group').html()
      },
      nur: {
        pay: $('#nur-pay').html(),
        category: '',
        ggScore: $('#nur-gg-score').html(),
        group: $('#nur-group').html()
      },
      ncm: {
        pay: $('#ncm-pay').html()
      },
      tot: {
        tot13: $('#total13').html(),
        tot420: $('#total420').html(),
        avg120: $('#avg120').html(),
        ppd: $('#ppdDay-value').html()
      }
    }

    data.ravResult = JSON.stringify(ravResult);

    //save RAV
    $.ajax({
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      url: "/rav/save-assessment",
      type: "POST",
      data: JSON.stringify({
        rec_id: rec_id,
        residentName: data.residentName,
    	  facilityId: data.facilityId,
    	  clinicalCategory: data.clinicalCategory,
    	  days: data.days,
    	  hipps: data.hipps,
    	  sectionGG: data.sectionGG,
    	  slp: data.slp,
    	  nta: data.nta,
    	  nurs: data.nurs,
    	  ravResult: data.ravResult,
      }),
      contentType: 'application/json',
      cache: false,
      timeout: 5000,
      success: function(res) {
        showAlert(res.statusText);
        rec_id = res.rec_id;
      },
      error: function(err) {
        showAlert('Something went wrong. Please try again. <br>If still persists, contact Administrator.', 'alert-danger');
      }
    });
    $('#save-rav').attr("disabled", false).html('Save');
  }

  //--walking options SectionGG I-J-K
  $('#GG0170I1').on('change', function(e) {
    if ($('option:selected', this).text() != '') {
      $('#GG0170I1').tooltip('show');
    } else {
      $('#GG0170I1').tooltip('hide');
    }
  });

  $('#GG0170J1, #GG0170K1').on('change', function(e) {
    if (($('#GG0170J1 option:selected').text() != '') || ($('#GG0170J1 option:selected').text() != '')) {
      $('#GG0170I1').tooltip('hide');
    } else {
      $('#GG0170I1').tooltip('show');
    }
  });

  //--update clinical category
  $('#clinical-category').on('change', function() {
    setSLP_CMI(false);
    setCategory_PT_OT_SLP();
  });

  //--section-gg total score
  $('select.section-gg').on('change', function() {
    totalSectionGG_NURS = Number($('#GG0130A1').val()) + Number($('#GG0130C1').val()) +
                          ( (Number($('#GG0170B1').val()) + Number($('#GG0170C1').val()) ) / 2 ) +
                          ( (Number($('#GG0170D1').val()) + Number($('#GG0170E1').val()) + Number($('#GG0170F1').val()) ) / 3 );
    totalSectionGG_PTOT =  totalSectionGG_NURS + Number($('#GG0130B1').val()) + (( Number($('#GG0170J1').val()) + Number($('#GG0170K1').val())) / 2 );
    totalSectionGG_PTOT = Math.round(totalSectionGG_PTOT);
    totalSectionGG_NURS = Math.round(totalSectionGG_NURS);
    $('#pt-gg-score, #ot-gg-score').each(function() {
      $(this).text(totalSectionGG_PTOT);
    });
    $('#nur-gg-score').text(totalSectionGG_NURS);
    setNUR_CAT();
    setPTOT_CMI();
  });

  //--facility wage index
  $('#facility-name').on('change', function() {
    facilityWageIndex = $(this).val();
    setPay();
  });

  //--slp - comorbidities & cognitive
  $('input[name="slp1[]"]').on('click', function() {
    if ($(this).prop('checked')) {
      $(this).parent('.list-slp-value').addClass('bg-highlighted-yellow');
    } else {
      $(this).parent('.list-slp-value').removeClass('bg-highlighted-yellow');
    }

    slp1_checked= $('input[name="slp1[]"').filter(':checked').length;
    setSLP_CMI();
  });

  //--slp - altered diet & swallowing
  $('input[name="slp2[]"]').on('click', function() {
    if ($(this).prop('checked')) {
      $(this).parent('.list-slp-value').addClass('bg-highlighted-yellow');
    } else {
      $(this).parent('.list-slp-value').removeClass('bg-highlighted-yellow');
    }

    slp2_checked= $('input[name="slp2[]"').addClass('bg-highlighted-yellow').filter(':checked').length;
    setSLP_CMI();
  });

  //--nursing
  $('input[name="nursing"]').on('change', function() {
    $('input[name="nursing"]').parents('tr').removeClass('bg-highlighted-yellow');
    $('.nursing-condition').removeClass('bg-highlighted-yellow');
    $(this).parents('tr').addClass('bg-highlighted-yellow');

    setNUR_CMI();
  });

  //--nta
  $('input[name="nta[]"]').on('click', function() {
    if ($(this).prop('checked')) {
      $(this).parent('.col').addClass('bg-highlighted-yellow');
    } else {
      $(this).parent('.col').removeClass('bg-highlighted-yellow');
    }

    setNTA_CMI();
  });

  //--VPD - Days
  $('#vpd-days').on('change', function () {
    vpd = $(this).val();
    setVPD();
  });

  //--Assessment Type
  $('#assessment-type').on('change', function () {
    setPay();
  });

  $('#save-rav').on('click', function() {
    $(this).html('Saving').attr("disabled", true);
    saveRAV();
  });

  //--set defaults
  let f_index = $('#facility-name option').length;
  $('#facility-name').prop('selectedIndex', f_index-1);
  $('input[name="nursing"]:last').prop('checked', true).parents('tr').addClass('bg-highlighted-yellow');
  facilityWageIndex = $('#facility-name').val();

  //--call defaults
  setCategory_PT_OT_SLP();
  setSLP_CMI();
  setNTA_CMI();
  setNUR_CMI();
  gSkip = 0; //one-time only
  setVPD();

  $('#GG0170I1').tooltip({
    trigger: 'manual'
  });

  $('span.cmg-tooltip').tooltip();

  reclaimLogin();

})(jQuery); // End of use strict
