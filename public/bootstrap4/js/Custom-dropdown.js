/*
  DropDowns =  all dropdown on page
  sizeCais = your content selection size
  sizeCaisOuter  if you have border 
*/
var DropDowns     = [] 
  , sizeCais      = 0
  , sizeCaisOuter = 0;

// find all dropdown element and creat ul list 
function dropDownConstruct () {
    $('.__cais._select-option').each(function () {
        DropDowns.push( $(this) )

        let el          = $(this)
          , cntOpt      = el.children('select').children('option').length
          , selectTitle = el.find('option:selected').text()
          , liOption    = [];

        sizeCais      = el.height();
        sizeCaisOuter = el.outerHeight();

        for ( let i = 1; i <= cntOpt; i++ ) {
            let detail = el.children('select').children(`option:nth-child(${i})`).text()
              , value  = el.children('select').children(`option:nth-child(${i})`).val()
              , Class  = '';

            if ( el.children('select').children(`option:nth-child(${i})`).hasClass('not-available') ) {
                Class = 'not-available'
            }

            if ( !value == '' ) {
                liOption.push(`<li class="${value} ${Class}">${detail}</li>`);
            }
        }

        el.append(`
            <div class="option-list" style="height: ${sizeCais}px">
                <button type="button" class='open-dropdown' style="height: ${sizeCais}px">${selectTitle}</button>
                <ul class='ul--list'>${liOption.join("")}</ul>
            </div>
        `)
    })
}

//  if click on dropdown 
function dropDownOpen () {
    let el = $(this);

    if ( !el.hasClass('active') ) {
        dropDownCloseAll()

        let cntOpt   = el.parent().children('ul.ul--list').children('li').length + 1;

        el.addClass('active')
          .parent().css({ 'height': (cntOpt * sizeCais)+'px' })
          .parents('.__cais').addClass('open')
    } else {
        dropDownClose( el )
    }
}

// closing dropdown
function dropDownClose ( droptoClose ) {
    droptoClose.removeClass('active')
               .parent().css('height', sizeCais +'px')
               .parents('.__cais').removeClass('open')
}

// check if other dropdown  still open
function dropDownCloseAll () {
    let i = 0, length = DropDowns.length;

    for (; i < length; i++) {
        if ( DropDowns[i].hasClass('open') ) {
            DropDowns[i].removeClass('open')
                        .children('.option-list').css('height', sizeCais +'px')
                        .children('button.open-dropdown').removeClass('active')
        }
    }
}

// on click of an list option
function dropDownSelecting () {
    let el = $(this)
      , classSelected = el.attr('class')
      , textSelected = el.text();

    if ( el.hasClass('not-available') ) {
        el.unbind( "click" )
    } else {
        el.parent().children('li').removeClass('selected')

        el.addClass('selected')
          .parents('.__cais').children('select').children('option:selected').attr('selected', false)
          .parent().children(`option[value='${classSelected}']`).attr('selected', 'selected')


        el.parents('.__cais').children('.option-list').children('button.open-dropdown').empty().text( textSelected )
      
        dropDownClose( el.parent().parent().children('button.open-dropdown') )
    }

}

$(document).ready(dropDownConstruct)
$(document).on('click', 'button.open-dropdown', dropDownOpen)
$(document).on('click', '.option-list ul.ul--list li', dropDownSelecting)
$(document).on('click', 'input', dropDownCloseAll)