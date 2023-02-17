export const sass = [{"description":"Styling for the adaptive text construction to create textareas and inputs that grow based on their contents. Used in the default [defaultStyles](#defaultStyles) mixin, but can be used separately if you only want to include specific framework css.\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"adaptiveText","code":"\n  .adaptive{\n    display:grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-template-areas: \"content\";\n    position:relative;\n    >*{\n      grid-area: content;\n    }\n    > span{\n      opacity: 0;\n      z-index: -10;\n      @include borderPlaceholders.base-border;\n      text-transform: initial;\n      border-radius:0px;\n    }\n  }\n  .adaptive--text{\n    min-height:4rem;\n  }\n  .adaptive--text__span{\n    white-space: pre-wrap;\n    padding:2px;\n  }\n  .adaptive--text__textarea{\n    width:100%;\n    height:100%;\n    resize: none;\n  }\n  .adaptive--text__textarea,\n  .adaptive--input__input{\n    position:absolute;\n  }\n  .adaptive--input__input{\n    width:100%;\n  }\n  .adaptive--input__span{\n    padding:2px;\n    min-height:1.5rem;\n  }\n","line":{"start":7,"end":48}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"adaptive\\_adaptive.scss","name":"_adaptive.scss"}},{"description":"The styling for basic collapsible/expandable sections.\n","commentRange":{"start":8,"end":8},"context":{"type":"mixin","name":"collapsible","code":"\n  .collapse-container{\n    display:grid;\n    position:relative;\n  }\n  .text-collapse{\n    cursor:pointer;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    &:before{\n      content: var(--expandedSymbol);\n      @include materialIcons.materialStyle;\n    }\n  }\n  .text-collapse__text{\n    display:inline;\n  }\n  .text-collapse__check{\n    &:not(:checked) + .text-collapse{\n      @include borderPlaceholders.inputHighlight;\n    }\n    &:checked + .text-collapse:before{\n      content: var(--collapsedSymbol);\n    }\n  }\n  .repitem,\n  .collapse-container{\n    &:hover{\n      .collapse,.roll-container{\n        opacity:var(--collapseHoverOpacity);\n      }\n    }\n    .collapse{\n      opacity:var(--collapseBaseOpacity);\n      position:absolute;\n      right:-10px;\n      top:0px;\n      border:0px solid black;\n      border-radius:0;\n      color:var(--collapseExpandedColor);\n      text-transform:none;\n      background-color:transparent;\n      &:before{\n        content:'y';\n        font-family:pictos;\n      }\n      &:checked{\n        color:var(--collapseCollapsedColor);\n        background-color:transparent;\n        ~ .expanded,\n        ~ .collapse-container .expanded{\n          display:none !important;\n        }\n        ~ .expanded--empty:is(:not([value]),[value='']) + *,\n        ~ .collapse-container ~.expanded--empty:is(:not([value]),[value='']) + *{\n          display:none !important;\n        }\n      }\n      &:not(:checked){\n        ~ .collapsed{\n          display:none !important;\n        }\n      }\n      &:hover{\n        color:var(--collapseExpandedColor);\n      }\n    }\n  }\n  .repcontainer.editmode{\n    .collapse{\n      display:none;\n    }\n  }\n","line":{"start":9,"end":83}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_collapse.scss","name":"_collapse.scss"}},{"description":"The styling for the functionality of the fillLeft pug mixin. This allows us to easily make [radios/checkboxes that fill as the value increments](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"fillLeft","code":"\n  .fill-left{\n    display:var(--fillLeftDisplay);\n    align-self:var(--fillLeftAlignment);\n    box-sizing:border-box;\n  }\n  .fill-left__radio{\n    appearance:none;\n    -webkit-appearance:none;\n    background-color:var(--fillLeftSelectedColor);\n    width:100%;\n    height:100%;\n    cursor:pointer;\n    &[data-value]:checked:before{\n      content:attr(data-value);\n      color:var(--fillLeftDataColor);\n      font-size:var(--fillLeftDataSize);\n      place-self:center;\n      text-transform: var(--fillLeftDataTransform);\n    }\n    &:checked ~ .fill-left__radio{\n      background-color:var(--fillLeftUnselectedColor);\n    }\n  }\n","line":{"start":7,"end":31}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_fillLeft.scss","name":"_fillLeft.scss"}},{"description":"Mixin for applying our checked styling to something\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"checked","code":"\n  background-color:var(--checkedBackColor);\n  &:before{\n    content: var(--checkContent);\n    grid-area:content;\n    font-weight:var(--checkWeight);\n    place-self:start center;\n    color: var(--checkColor);\n    font-size: var(--checkSize);\n    line-height: var(--checkLineHeight);\n  }\n","line":{"start":7,"end":18}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_inputBase.scss","name":"_inputBase.scss"},"usedBy":[{"description":"Basic input styling to ensure that the various inputs are ready for future styling\n","context":{"type":"mixin","name":"inputBase","code":"\n  input{\n    &[type='checkbox']{\n      border: 1px solid var(--checkboxBorderColor);\n      cursor: pointer;\n      -webkit-appearance:none;\n      appearance:none;\n      width: var(--checkboxWidth);\n      min-width: var(--checkboxWidth);\n      height: var(--checkboxHeight);\n      min-height: var(--checkboxHeight);\n      display:grid;\n      grid-template-columns:1fr;\n      grid-template-areas:\"content\";\n      &:not(.collapse):not(.fill-left__radio):checked{\n        @include checked;\n      }\n    }\n    &[type='number']{\n      width: 3rem;\n      -moz-appearance: textfield !important;\n      text-align: center;\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  textarea,\n  input:not(:is([type='radio'],[type='checkbox'])),\n  .uneditable-input{\n    padding: var(--inputPadding);\n  }\n  input:is([type=\"text\"],[type=\"number\"]),textarea{\n    cursor:auto;\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  input:not(:where([type='checkbox'], [type='radio'])),\n  .uneditable-input,\n  textarea{\n    @include borderPlaceholders.base-border;\n  }\n  select,\n  .sheet-pseudo-select span,\n  .pseudo-select span{\n    -webkit-apperance: none;\n    appearance: none;\n    text-transform: var(--selectTextTransform);\n    overflow: hidden!important;\n    white-space: nowrap;\n    text-overflow: var(--selectTextOverflow);\n    text-align: var(--selectTextAlign);\n    color:var(--selectColor);\n  }\n  input{\n    width: auto;\n    &:placeholder{\n      color: var(--placeholderColor);\n    }\n    &.plus-control:not([value*=\"-\"])+span:before{\n      content: '+';\n    }\n  }\n  textarea{\n    resize: var(--textareaResize);\n    white-space: pre-wrap;\n    &.fixed{\n      resize: none;\n      overflow: auto;\n    }\n  }\n","line":{"start":20,"end":97}}}]},{"description":"Basic input styling to ensure that the various inputs are ready for future styling\n","commentRange":{"start":19,"end":19},"context":{"type":"mixin","name":"inputBase","code":"\n  input{\n    &[type='checkbox']{\n      border: 1px solid var(--checkboxBorderColor);\n      cursor: pointer;\n      -webkit-appearance:none;\n      appearance:none;\n      width: var(--checkboxWidth);\n      min-width: var(--checkboxWidth);\n      height: var(--checkboxHeight);\n      min-height: var(--checkboxHeight);\n      display:grid;\n      grid-template-columns:1fr;\n      grid-template-areas:\"content\";\n      &:not(.collapse):not(.fill-left__radio):checked{\n        @include checked;\n      }\n    }\n    &[type='number']{\n      width: 3rem;\n      -moz-appearance: textfield !important;\n      text-align: center;\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  textarea,\n  input:not(:is([type='radio'],[type='checkbox'])),\n  .uneditable-input{\n    padding: var(--inputPadding);\n  }\n  input:is([type=\"text\"],[type=\"number\"]),textarea{\n    cursor:auto;\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  input:not(:where([type='checkbox'], [type='radio'])),\n  .uneditable-input,\n  textarea{\n    @include borderPlaceholders.base-border;\n  }\n  select,\n  .sheet-pseudo-select span,\n  .pseudo-select span{\n    -webkit-apperance: none;\n    appearance: none;\n    text-transform: var(--selectTextTransform);\n    overflow: hidden!important;\n    white-space: nowrap;\n    text-overflow: var(--selectTextOverflow);\n    text-align: var(--selectTextAlign);\n    color:var(--selectColor);\n  }\n  input{\n    width: auto;\n    &:placeholder{\n      color: var(--placeholderColor);\n    }\n    &.plus-control:not([value*=\"-\"])+span:before{\n      content: '+';\n    }\n  }\n  textarea{\n    resize: var(--textareaResize);\n    white-space: pre-wrap;\n    &.fixed{\n      resize: none;\n      overflow: auto;\n    }\n  }\n","line":{"start":20,"end":97}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"checked"}],"file":{"path":"attribute_holders\\_inputBase.scss","name":"_inputBase.scss"}},{"description":"All input related items have their styling cleared to remove any Roll20 default styles. Note that all of your styles should be at a level higher than this mixin is used in.\n","commentRange":{"start":5,"end":10},"context":{"type":"mixin","name":"clear","code":"\n  select,\n  textarea,\n  input,\n  .uneditable-input,\n  label,\n  button {\n    all: initial;\n  }\n","line":{"start":11,"end":20}},"example":[{"type":"scss","code":"@use 'k-scaffold' as k;\n.ui-dialog .tab-content .charsheet{\n  @include k.clear;\n}"}],"group":["base styles"],"access":"public","file":{"path":"generic_scss\\_roll20clear.scss","name":"_roll20clear.scss"}},{"description":"Creates the default highlight styling for inputs/selects\n","commentRange":{"start":5,"end":5},"context":{"type":"mixin","name":"inputHighlight","code":"\n  border-width: 1px 3px;\n  border-style: solid;\n  border-color: var(--borderColor);\n  border-radius: 5px;\n  box-sizing: border-box;\n","line":{"start":6,"end":12}},"group":["borders"],"access":"public","require":[],"file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"Basic border styling for elements\n","commentRange":{"start":13,"end":13},"context":{"type":"mixin","name":"base-border","code":"\n  border-width: 1px 3px;\n  border-style: solid;\n  border-radius: 5px;\n  border-color: transparent;\n  box-sizing: border-box;\n","line":{"start":14,"end":20}},"group":["borders"],"access":"public","file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"Styling for elements that should have a box around them\n","commentRange":{"start":21,"end":21},"context":{"type":"mixin","name":"boxed","code":"\n  border: 2px solid var(--borderColor);\n  border-radius:0;\n  box-sizing:border-box;\n","line":{"start":22,"end":26}},"group":["borders"],"access":"public","require":[],"file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"The basic stylings for a button like object. Provides some basic coloring, shadowing, and hover/active state styling\n","commentRange":{"start":7,"end":7},"context":{"type":"mixin","name":"base-button","code":"\n\tbackground-color: #DCDCDC33;\n\tborder-radius: 5px;\n\tbox-shadow: 0 2px 4px black;\n\tborder-width: 0;\n\ttransition: {\n\t\tproperty:box-shadow,backdrop-filter;\n\t\tduration:200ms;\n\t\ttiming-function:ease-out;\n\t};\n\tbackdrop-filter:blur(1px);\n\toverflow:hidden;\n\t&:is(:hover,:focus){\n\t\tbackground-color: #85858580;\n\t\tbox-shadow: 0 4px 6px black;\n\t\tbackdrop-filter:blur(2px);\n\t}\n\t&:active{\n\t\tbackground-color: #858585ff;\n\t\tbox-shadow: 0 1px 2px black;\n\t\tbackdrop-filter:blur(0px);\n\t}\n","line":{"start":8,"end":30}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"},"usedBy":[{"description":"Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).\n","context":{"type":"mixin","name":"die-button","code":"\n\t@include base-button;\n\tline-height: 14px;\n\t/*height to vertically center a 2rem dicefontd10*/\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tpadding: 5px 3px 7px;\n","line":{"start":33,"end":41}}},{"description":"Basic styling for buttons with text (or text and icons)\n","context":{"type":"mixin","name":"text-button","code":"\n\tpadding: 5px 7px;\n\t@include base-button;\n","line":{"start":44,"end":47}}}]},{"description":"Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).\n","commentRange":{"start":32,"end":32},"context":{"type":"mixin","name":"die-button","code":"\n\t@include base-button;\n\tline-height: 14px;\n\t/*height to vertically center a 2rem dicefontd10*/\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tpadding: 5px 3px 7px;\n","line":{"start":33,"end":41}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"base-button"}],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"}},{"description":"Basic styling for buttons with text (or text and icons)\n","commentRange":{"start":43,"end":43},"context":{"type":"mixin","name":"text-button","code":"\n\tpadding: 5px 7px;\n\t@include base-button;\n","line":{"start":44,"end":47}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"base-button"}],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"}},{"description":"Styling for our roll buttons\n","commentRange":{"start":48,"end":48},"context":{"type":"mixin","name":"roller","code":"\n  display: flex;\n  align-items: center;\n  gap: var(--half-gap);\n  &:before{\n    content:'T';\n    font-family:dicefontd20;\n  }\n","line":{"start":49,"end":57}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"},"usedBy":[{"description":"Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.\n","context":{"type":"mixin","name":"button","code":"\n  button{\n    cursor: pointer;\n  }\n\t.roller{\n\t\t@include roller;\n\t}\n","line":{"start":59,"end":66}}}]},{"description":"Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.\n","commentRange":{"start":58,"end":58},"context":{"type":"mixin","name":"button","code":"\n  button{\n    cursor: pointer;\n  }\n\t.roller{\n\t\t@include roller;\n\t}\n","line":{"start":59,"end":66}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"roller"}],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"}},{"description":"A mixin that switches the scaffold's roll template color variables (including sheet variables) over to dark mode specific ones. Should only be used directly inside a `.sheet-rolltemplate-TEMPLATENAME` rule.\n","commentRange":{"start":22,"end":28},"context":{"type":"mixin","name":"darkRoll","code":"\n  &.sheet-rolltemplate-darkmode{\n    @include darkMode;\n    --inlineRollBackColor: var(--dm-inlineRollBackColor);\n    --inlineRollColor: var(--fontColor);\n    --inlineRollCritColor: var(--dm-inlineRollCritColor);\n    --inlineRollFumbleColor: var(--dm-inlineRollCritColor);\n    --inlineRollImportantColor: var(--dm-inlineRollCritColor);\n  }\n","line":{"start":29,"end":38}},"example":[{"type":"scss","code":"// Will apply the darkmode styling attributes to the default template when dark mode is enabled.\n@use 'k-scaffold' as k;\n.sheet-rolltemplate-default{\n  @include k.darkRoll;\n}"}],"groupDescriptions":{"color modes":"A mixin that switches the scaffold's sheet color variables over to dark mode specific versions."},"group":["color modes"],"access":"public","require":[],"file":{"path":"generic_scss\\_darkmode.scss","name":"_darkmode.scss"}},{"description":"These variables control how the default translations included with the scaffold function\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"Animation variables","code":"\n  --revealTime:500ms;\n  --revealFunction: ease-in-out;\n  --revealTrans: var(--revealTime) var(--revealFunction);\n","line":{"start":7,"end":11}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_animation.scss","name":"_animation.scss"}},{"description":"These variables control aspects of the borders in the k-scaffold\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"Border variables","code":"\n  --borderWidth:1px;\n  --borderStyle:solid;\n","line":{"start":7,"end":10}},"group":["css variables"],"access":"public","file":{"path":"generic_scss\\variables\\_border.scss","name":"_border.scss"}},{"description":"These variables control aspects of the checkbox and radio display in the k-scaffold.\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"checked variables","code":"\n  --checkContent: '✓';\n  --checkWeight: bold;\n  --checkSize: 150%;\n  --checkLineHeight: calc(var(--checkSize) / 3);\n\n  --checkboxBorderWidth: var(--borderWidth);\n  --checkboxBorderStyle: var(--borderStyle);\n  --lm-checkboxBorderColor: var(--lm-borderColor);\n  --dm-checkboxBorderColor: var(--dm-borderColor);\n  --checkboxBorderColor: var(--lm-checkBorderColor);\n\n  --checkboxWidth: 14px;\n  --checkboxHeight: 14px;\n","line":{"start":7,"end":21}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_checked.scss","name":"_checked.scss"}},{"description":"Variables that control the styling of the collapse inputs\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"collapse variables","code":"\n  --expandedSymbol:'unfold_less';\n  --collapsedSymbol: 'unfold_more';\n\n  --collapseHoverOpacity: 1;\n  --collapseBaseOpacity: 0;\n\n  --lm-collapseExpandedColor:var(--lm-selectedColor);\n  --dm-collapseExpandedColor:var(--dm-selectedColor);\n  --collapseExpandedColor: var(--lm-collapseExpandedColor);\n\n  --lm-collapseCollapsedColor:var(--lm-unselectedColor);\n  --dm-collapseCollapsedColor:var(--dm-unselectedColor);\n  --collapseCollapsedColor: var(--lm-collapseCollapsedColor);\n","line":{"start":7,"end":21}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_collapse.scss","name":"_collapse.scss"}},{"description":"Variables for defining colors in your sheet using light mode and dark mode\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"colors variables","code":"\n  --lm-backColor:#fff;\n  --dm-backColor:var(--dark-surface1);\n  --backColor:var(--lm-backColor);\n\n  --lm-selectedColor:#000;\n  --dm-selectedColor:#007476;\n  --selectedColor:var(--lm-selectedColor);\n\n  --lm-unselectedColor1:lightgrey;\n  --dm-unselectedColor1:#0e0e0e;\n  --unselectedColor1:var(--lm-unselectedColor1);\n\n  --lm-unselectedColor2:transparent;\n  --dm-unselectedColor2:transparent;\n  --unselectedColor1:var(--lm-unselectedColor2);\n\n  --lm-checkColor:#000;\n  --dm-checkColor:#ff0000;\n  --checkColor:var(--lm-checkColor);\n  --lm-checkedBackColor:transparent;\n  --dm-checkedBackColor:transparent;\n  --checkedBackColor:var(--lm-checkedBackColor);\n\n  --lm-borderColor:#000;\n  --dm-borderColor:lightgrey;\n  --borderColor:var(--lm-borderColor);\n\n  --lm-fontColor:#0f0f0f;\n  --dm-fontColor:var(--dark-primarytext);\n  --fontColor:var(--lm-fontColor);\n\n  --lm-disabledColor:var(--lm-unselectedColor1);\n  --dm-disabledColor:var(--dm-unselectedColor1);\n  --disabledColor:var(--lm-disabledColor);\n","line":{"start":7,"end":42}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_colors.scss","name":"_colors.scss"}},{"description":"Variables that control the style behavior of the fillLeft construction\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"fillLeft variables","code":"\n  --fillLeftDisplay: flex;\n  --fillLeftAlignment: center;\n\n  --fillLeftDataTransform: uppercase;\n  --fillLeftDataSize: var(--size6);\n\n  // Colors\n  --lm-fillLeftSelectedColor: var(--lm-selectedColor);\n  --dm-fillLeftSelectedColor: var(--dm-selectedColor);\n  --fillLeftSelectedColor: var(--lm-fillLeftSelectedColor);\n\n  --lm-fillLeftUnselectedColor: var(--lm-unselectedColor);\n  --dm-fillLeftUnselectedColor: var(--dm-unselectedColor);\n  --fillLeftUnselectedColor: var(--lm-fillLeftUnselectedColor);\n\n  --lm-fillLeftDataColor: var(--lm-backColor);\n  --dm-fillLeftDataColor: var(--dm-backColor);\n  --fillLeftDataColor: var(--lm-fillLeftDataColor);\n","line":{"start":7,"end":26}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_fillLeft.scss","name":"_fillLeft.scss"}},{"description":"Variables that control how font family, and font-size of text on the sheet.\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"font variables","code":"\n  // Font families\n  --font1:var(--topHeadFont);\n  --font2:var(--topHeadFont);\n  --font3:var(--midHeadFont);\n  --font4:var(--midHeadFont);\n  --font5:var(--midHeadFont);\n  --font6:var(--contentHeadFont);\n  --font7:var(--contentHeadFont);\n\n  // Font sizes\n  --baseFontSize: 16px;\n  --size1:300%;\n  --size2:250%;\n  --size3:200%;\n  --size4:150%;\n  --size5:125%;\n  --size6:100%;\n  --size7:87.5%;\n\n  // Default icon font size\n  --icon-size:24px;\n\n  //Default fonts used\n  --font-icon: 'Material Icons';\n","line":{"start":7,"end":32}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_font.scss","name":"_font.scss"}},{"description":"Variables to control the display of input elements\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"input variables","code":"\n  --inputTopPadding: 2px;\n  --inputRightPadding: 2px;\n  --inputBottomPadding: 2px;\n  --inputLeftPadding: 2px;\n  --inputPadding:\n    var(--inputTopPadding)\n    var(--inputRightPadding)\n    var(--inputBottomPadding)\n    var(--inputLeftPadding);\n  \n  --lm-placeholderColor:#ededed80;\n  --dm-placeholderColor:#3f3f3f80;\n  --placeholderColor: var(--lm-placeholderColor);\n\n  --textareaResize: vertical;\n","line":{"start":7,"end":23}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_input.scss","name":"_input.scss"}},{"description":"Variables to control the display of the various label constructions\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"label variables","code":"\n\n  --input-label-gap:var(--half-gap) var(--half-gap);\n\n  --input-label-text-transform: capitalize;\n","line":{"start":7,"end":12}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_label.scss","name":"_label.scss"}},{"description":"Variables to control basic layout of the k-scaffold\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"layout variables","code":"\n  // Layout variables\n  // Variables to define our basic gap between layout elements. Followed by several gaps that are mathematically related to it.\n  --normal-gap-x:1rem;\n  --normal-gap-y:1rem;\n  --normal-gap: var(--normal-gap-x);\n\n  // Half gaps\n  --half-gap-x:calc(var(--normal-gap-x) / 2);\n  --half-gap-y:calc(var(--normal-gap-y) / 2);\n  --half-gap: var(--half-gap-x);\n\n  // Tiny gaps (1/4 gap)\n  --tiny-gap-x:calc(var(--half-gap-x) / 2);\n  --tiny-gap-y:calc(var(--half-gap-y) / 2);\n  --tiny-gap: var(--tiny-gap-x);\n\n  // Big gaps (double gap)\n  --big-gap-x:calc(var(--normal-gap-x) * 2);\n  --big-gap-y:calc(var(--normal-gap-y) * 2);\n  --big-gap: var(--big-gap-x);\n","line":{"start":7,"end":28}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_layout.scss","name":"_layout.scss"}},{"description":"Variables to control the display of selects\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"select variables","code":"\n  --lm-selectColor: var(--lm-fontColor);\n  --dm-selectColor: var(--dm-fontColor);\n  --selectColor: var(--lm-fontColor);\n\n  --selectTextOverflow: var(--textOverflow);\n  --selectTextAlign: center;\n  --selectTextTransform: capitalize;\n","line":{"start":7,"end":15}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_select.scss","name":"_select.scss"}},{"description":"Styling for our various special fieldset constructions. e.g. [customControlFieldset](/pug.html#customControlFieldset).\n","commentRange":{"start":7,"end":7},"context":{"type":"mixin","name":"fieldsetStyling","code":"\n  .repitem {\n    >input:not([type='checkbox']) {\n      width: 100%;\n    }\n\n    .headed-textarea,\n    .description {\n      grid-column: 1/-1;\n    }\n  }\n\n  .repcontainer {\n    display: grid;\n    gap: var(--normal-gap);\n  }\n\n  .repeating-container {\n    display: grid;\n    grid-template-areas: 'header';\n    align-self: start;\n\n    >.header {\n      grid-area: header;\n    }\n    :is(.repcontrol-button,.repcontrol_edit) {\n      opacity: 0;\n      transition: var(--revealTrans);\n    }\n    &:is(:hover, :focus-within, :focus) :is(.repcontrol-button,.repcontrol_edit) {\n      opacity: 1;\n    }\n  }\n\n  // Adding pseudo rep styling\n  .repcontrol-button {\n    align-self: start;\n\n    ~.repcontrol {\n      justify-self: end;\n      z-index: 100;\n\n      >.repcontrol_add {\n        display: none !important;\n      }\n    }\n  }\n\n  .repcontrol-button--add {\n    justify-self: start;\n    width: 15px;\n    height: 15px;\n    padding: 4px;\n    font-size: 0;\n    color: var(--col-alt);\n    border: 1px solid var(--col-alt);\n\n    &::before {\n      inset: 0;\n      place-self: center;\n      font-family: var(--font-icon);\n      font-size: 12px;\n      content: 'add';\n    }\n  }\n\n  //End pseudo rep styling\n","line":{"start":8,"end":75}},"group":["fieldsets"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"fieldsets\\_fieldsetStyling.scss","name":"_fieldsetStyling.scss"}},{"description":"Styling for items that need the pictos custom font\n","commentRange":{"start":9,"end":9},"context":{"type":"mixin","name":"pictosCustom","code":"\n  font-family: pictos custom;\n  text-transform: none;\n","line":{"start":10,"end":13}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the pictos 3 font\n","commentRange":{"start":14,"end":14},"context":{"type":"mixin","name":"pictos3","code":"\n  font-family: pictos three;\n  text-transform: none;\n","line":{"start":15,"end":18}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d4 font\n","commentRange":{"start":20,"end":20},"context":{"type":"mixin","name":"diceD4","code":"\n  font-family: dicefontd4 !important;\n  text-transform: none !important;\n","line":{"start":21,"end":24}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d6 font\n","commentRange":{"start":26,"end":26},"context":{"type":"mixin","name":"diceD6","code":"\n  font-family: dicefontd6 !important;\n  text-transform: none !important;\n","line":{"start":27,"end":30}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d8 font\n","commentRange":{"start":32,"end":32},"context":{"type":"mixin","name":"diceD8","code":"\n  font-family: dicefontd8 !important;\n  text-transform: none !important;\n","line":{"start":33,"end":36}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d10 font\n","commentRange":{"start":38,"end":38},"context":{"type":"mixin","name":"diceD10","code":"\n  font-family: dicefontd10 !important;\n  text-transform: none !important;\n","line":{"start":39,"end":42}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d12 font\n","commentRange":{"start":44,"end":44},"context":{"type":"mixin","name":"diceD12","code":"\n  font-family: dicefontd12 !important;\n  text-transform: none !important;\n","line":{"start":45,"end":48}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d20 font\n","commentRange":{"start":50,"end":50},"context":{"type":"mixin","name":"diceD20","code":"\n  font-family: dicefontd20 !important;\n  text-transform: none !important;\n","line":{"start":51,"end":54}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d30 font\n","commentRange":{"start":56,"end":56},"context":{"type":"mixin","name":"diceD30","code":"\n  font-family: dicefontd30 !important;\n  text-transform: none !important;\n","line":{"start":57,"end":60}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Utility classes for applying font styles\n","commentRange":{"start":15,"end":15},"context":{"type":"mixin","name":"textStyles","code":"\n  .sheet-italics,\n  .italics{\n    @include italics;\n  }\n","line":{"start":16,"end":21}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Basic styling for headers.\n","commentRange":{"start":22,"end":22},"context":{"type":"mixin","name":"baseHeader","code":"\n  @include baseText;\n  color:var(--fontColor);\n  display: block;\n  white-space: nowrap;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-weight:normal;\n","line":{"start":23,"end":31}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h1 level headers\n","context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}}},{"description":"Base styling of h2 level headers\n","context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}}},{"description":"Base styling of h3 level headers\n","context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}}},{"description":"Base styling of h4 level headers\n","context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}}},{"description":"Base styling of h5 level headers\n","context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}}},{"description":"Base styling of h6 level headers\n","context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}}}]},{"description":"Headers that should pop!\n","commentRange":{"start":33,"end":33},"context":{"type":"mixin","name":"importantHeader","code":"\n  text-transform: uppercase;\n  font-weight: normal;\n","line":{"start":34,"end":37}},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h1 level headers\n","context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}}},{"description":"Base styling of h2 level headers\n","context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}}},{"description":"Base styling of h3 level headers\n","context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}}}]},{"description":"Headers that should be important, but not eye-catching\n","commentRange":{"start":39,"end":39},"context":{"type":"mixin","name":"midHeader","code":"\n  &:not(:where(input)){\n    text-transform:capitalize;\n  }\n","line":{"start":40,"end":44}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h4 level headers\n","context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}}},{"description":"Base styling of h5 level headers\n","context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}}},{"description":"Base styling of h6 level headers\n","context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}}}]},{"description":"Base styling of h1 level headers\n","commentRange":{"start":47,"end":47},"context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h2 level headers\n","commentRange":{"start":63,"end":63},"context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h3 level headers\n","commentRange":{"start":79,"end":79},"context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h4 level headers\n","commentRange":{"start":95,"end":95},"context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h5 level headers\n","commentRange":{"start":111,"end":111},"context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h6 level headers\n","commentRange":{"start":128,"end":128},"context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Header element styling is applied to normal header elements (h1 - h6) as well as elements that have an `aria-level` defined on them. Note that a `role='heading'` should also be defined on these html elements for full accessibility.\n","commentRange":{"start":145,"end":145},"context":{"type":"mixin","name":"headerElements","code":"\n  h1,\n  *[aria-level='1']{\n    @include h1;\n  }\n  h2,\n  *[aria-level='2']{\n    @include h2;\n  }\n  h3,\n  *[aria-level='3']{\n    @include h3;\n  }\n  h4,\n  *[aria-level='4']{\n    @include h4;\n  }\n  h5,\n  *[aria-level='5']{\n    @include h5;\n  }\n  h6,\n  *[aria-level='6']{\n    @include h6;\n  }\n","line":{"start":146,"end":171}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"The styling that is applied to all text elements.\n","commentRange":{"start":172,"end":172},"context":{"type":"mixin","name":"textElements","code":"\n  span,\n  input,\n  textarea,\n  button,\n  select{\n    @include baseText;\n    color: inherit;\n    font-family: inherit;\n    font-size:inherit;\n    line-height:inherit;\n  }\n  @each $size in 1,2,3,4,5,6,7{\n    .text-#{$size},\n    .sheet-text-#{$size}{\n      font-size: var(--size#{$size});\n    }\n  }\n  .capitalize,\n  .sheet-capitalize{\n    text-transform: capitalize !important;\n  }\n  .lowercase,\n  .sheet-lowercase{\n    text-transform:lowercase !important;\n  }\n  .uppercase,\n  .sheet-uppercase{\n    text-transform:uppercase !important;\n  }\n","line":{"start":173,"end":203}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Utility classes for applying aspect ratios and sizes\n","commentRange":{"start":7,"end":9},"context":{"type":"mixin","name":"Sizes and Ratios","code":"\n  .ratio1-1,\n  .sheet-ratio1-1{\n    @include ratio1_1;\n  }\n","line":{"start":10,"end":15}},"group":["layout"],"access":"public","require":[],"file":{"path":"generic_scss\\_sizingAndRatio.scss","name":"_sizingAndRatio.scss"}},{"description":"Mixin that includes all of the framework's styles. Should be included in a 3 class declaration for character sheets.\n","commentRange":{"start":21,"end":27},"context":{"type":"mixin","name":"defaultStyles","code":"\n  // Clear roll20 styles\n  @include genericStyle.clear;\n\n  // Basic Layout constructs\n  @include genericStyle.layout;\n  @include genericStyle.borderStyles;\n  @include genericStyle.sizesAndRatios;\n  \n  // Text stylings\n  @include genericStyle.textElements;\n  @include genericStyle.materialIcons;\n  @include genericStyle.textStyles;\n  @include genericStyle.headerElements;\n  @include genericStyle.r20FontClasses;\n\n  // Input and button\n  @include attributeConstructs.inputBase;\n  @include attributeConstructs.button;\n  @include attributeConstructs.collapsible;\n  @include attributeConstructs.fillLeft;\n  @include labels.input-label;\n  @include labels.headed-textarea;\n  @include adaptive.adaptiveText;\n\n  @include fieldsetStyling.fieldsetStyling;\n","line":{"start":28,"end":54}},"example":[{"type":"scss","code":"@use 'k-scaffold' as k;\n\n.ui-dialog .tab-content .charsheet{\n  @include k.defaultStyles;\n}"}],"access":"public","group":["undefined"],"require":[],"file":{"path":"_k.scss","name":"_k.scss"},"usedBy":[{"description":"Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.\n","context":{"type":"mixin","name":"defaultRollStyling","code":"\n  @include defaultStyles;\n  @include rolltemplate.rollStyles;\n","line":{"start":63,"end":66}}}]},{"description":"Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.\n","commentRange":{"start":56,"end":62},"context":{"type":"mixin","name":"defaultRollStyling","code":"\n  @include defaultStyles;\n  @include rolltemplate.rollStyles;\n","line":{"start":63,"end":66}},"example":[{"type":"scss","code":"@use 'k-scaffold/k';\n\n.sheet-rolltemplate-TEMPLATENAME{\n  @include k.defaultRollStyling;\n}"}],"access":"public","group":["undefined"],"require":[{"type":"mixin","name":"defaultStyles"}],"file":{"path":"_k.scss","name":"_k.scss"}},{"description":"Styling for the built-in layout out utility classes\n @group layout\n","commentRange":{"start":1,"end":2},"context":{"type":"mixin","name":"layout","code":"\n  // Flexbox variables\n  .flex-box,\n  .sheet-flex-box{\n    display:flex;\n  }\n  .flex-wrap,\n  .sheet-flex-wrap{\n    flex-wrap:wrap;\n  }\n  .justify-space-around,\n  .sheet-justify-space-around{\n    justify-content:space-around;\n  }\n  .justify-space-between,\n  .sheet-justify-space-between{\n    justify-content:space-between;\n  }\n  .justify-center,\n  .sheet-justify-center{\n    justify-content:center;\n  }\n  \n  .flex-min-content,\n  .sheet-flex-min-content{\n    flex: 1 0 min-content;\n  }\n  .stacked{\n    flex-direction:column;\n    &.center>*{\n      text-align: center;\n    }\n    &:not(.center){\n      align-items:start;\n    }\n    > [name]:not([type=\"number\"]):not([type=\"checkbox\"]):not([type=\"radio\"]){\n      width:100%;\n    }\n  }\n  .flex-column,\n  .sheet-flex-column{\n    flex-direction: column;\n  }\n  .flex-row-reverse,\n  .sheet-flex-row-revers{\n    flex-direction: row-reverse;\n  }\n  .flex-column-reverse,\n  .sheet-flex-column-reverse{\n    flex-direction: column-reverse;\n  }\n\n  // Gap/Flex combined variables\n  .normal-gap,\n  .sheet-normal-gap{\n    gap:var(--normal-gap);\n  }\n  .normal-gap-x,\n  .sheet-normal-gap-x{\n    column-gap:var(--normal-gap-x);\n  }\n  .normal-gap-y,\n  .sheet-normal-gap-y{\n    row-gap:var(--normal-gap-y);\n  }\n  \n  .half-gap,\n  .sheet-half-gap{\n    gap:var(--half-gap);\n  }\n  .half-gap-x,\n  .sheet-half-gap-x{\n    column-gap:var(--half-gap-x);\n  }\n  .half-gap-y,\n  .sheet-half-gap-y{\n    row-gap:var(--half-gap-y);\n  }\n  \n  .tiny-gap,\n  .sheet-tiny-gap{\n    gap:var(--tiny-gap);\n  }\n  .tiny-gap-x,\n  .sheet-tiny-gap-x{\n    column-gap:var(--tiny-gap-x);\n  }\n  .tiny-gap-y,\n  .sheet-tiny-gap-y{\n    row-gap:var(--tiny-gap-y);\n  }\n  \n  .big-gap,\n  .sheet-big-gap{\n    gap:var(--big-gap);\n  }\n  .big-gap-x,\n  .sheet-big-gap-x{\n    column-gap:var(--big-gap-x);\n  }\n  .big-gap-y,\n  .sheet-big-gap-y{\n    row-gap:var(--big-gap-y);\n  }\n\n  // Grid variables\n  .grid,\n  .sheet-grid{\n    display:grid;\n  }\n\n  .grid-span-2,\n  .sheet-grid-span-2{\n    grid-column:span 2;\n  }\n  .grid-span-all,\n  .sheet-grid-span-all{\n    grid-column:1/-1;\n  }\n\n  .grid-column,\n  .sheet-grid-column{\n    grid-auto-flow:column;\n  }\n  .grid-dense,\n  .sheet-grid-dense{\n    grid-auto-flow:dense;\n  }\n","line":{"start":3,"end":131}},"access":"public","group":["undefined"],"require":[],"file":{"path":"generic_scss\\_layout.scss","name":"_layout.scss"}},{"description":"Mixin that creates the properties that should be assigned for inline rolls\n","commentRange":{"start":1,"end":1},"context":{"type":"mixin","name":"rollProperties","code":"\n  // Background settings\n  background-color: var(--inlineRoll#{$type}BackColor);\n\n  // Font settings\n  color:var(--inlineRoll#{$type}Color);\n  font-family:var(--inlineRoll#{$type}Font);\n  font-size:var(--inlineRoll#{$type}Size);\n\n  // Spacing\n  padding: var(--inlineRoll#{$type}Padding);\n  border: var(--inlineRoll#{$type}Border);\n  margin: var(--inlineRoll#{$type}Margin);\n","line":{"start":2,"end":15}},"access":"public","group":["undefined"],"require":[],"file":{"path":"rolltemplate\\helpers\\_index.scss","name":"_index.scss"}},{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","commentRange":{"start":27,"end":28},"context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}},"group":["utility"],"access":"public","require":[{"type":"mixin","name":"boxed"},{"type":"mixin","name":"base-border"},{"type":"mixin","name":"inputHighlight"}],"file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"}},{"description":"Utility classes that are provided to apply material icon styling to your elements\n","commentRange":{"start":16,"end":17},"context":{"type":"mixin","name":"materialIcons","code":"\n  .sheet-material-icons,\n  .material-icons {\n    @include materialStyle;\n  }\n","line":{"start":18,"end":23}},"group":["utility"],"groupDescriptions":{"materialstyle":"Mixin to add the necessary styling to use material icons."},"example":[{"type":"scss","code":" @use 'k-scaffold' as k;\n.charsheet .material-icon{\n  @include k.materialStyle;\n}"}],"access":"public","require":[],"file":{"path":"generic_scss\\_materialIcons.scss","name":"_materialIcons.scss"}},{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","commentRange":{"start":62,"end":63},"context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}},"group":["utility"],"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"access":"public","require":[{"type":"mixin","name":"pictos3"},{"type":"mixin","name":"pictosCustom"},{"type":"mixin","name":"diceD4"},{"type":"mixin","name":"diceD6"},{"type":"mixin","name":"diceD8"},{"type":"mixin","name":"diceD10"},{"type":"mixin","name":"diceD12"},{"type":"mixin","name":"diceD20"},{"type":"mixin","name":"diceD30"}],"file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"}}];
export const pug = [{"meta":{"name":"button","description":"Creates a button element. Valid types are `roll` or `action`. If a type is not specified in the object argument, a roll button is created. If an action button is created, spaces in the name are replaced with dashes instead of underscores.","arguments":[{"name":"buttonObj","description":"The object describing the button","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - The object describing the button"},{"name":"block","description":"The contents of the button element","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the button element"}],"example":"include ../_k.pug\n//A basic roll button\n+button({name:'my button',value:'/r 3d10'})\n//An action button\n+button({name:'my button',type:'action','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})\n"},"file":"lib\\attribute_holders\\_buttons.pug","source":"mixin button(obj, _attributes)\r\n  - checkKUse();\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  - obj.name = attrName(obj.name);\r\n  - obj.title = obj.title || buttonTitle(obj.name);\r\n  if obj.type === 'action'\r\n    - obj.name = `act_${obj.name}`;\r\n  else\r\n    - obj.type = 'roll';\r\n    - obj.name = `roll_${obj.name}`;\r\n  - const elementObj = makeElementObj(obj);\r\n  if obj.type !== 'roll'\r\n    - storeTrigger(obj);\r\n  button&attributes(elementObj)&attributes(attributes)\r\n    block\r","output":"<!--A basic roll button-->\n<button name=\"roll_my_button\" value=\"/r 3d10\" title=\"%{my_button}\" type=\"roll\"></button>\n<!--An action button-->\n<button name=\"act_my_button\" type=\"action\" data-i18n=\"action button\" title=\"%{my_button}\"></button>"},{"meta":{"name":"action","arguments":[{"name":"buttonObj","description":"The object describing the button","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - The object describing the button"},{"name":"block","description":"The contents of the button element","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the button element"}],"description":"Alias for {@link button} that creates a button element with a type of `action`. Spaces in the name are replaced with dashes instead of underscores.","attributes":null,"example":"include ../_k.pug\n+action({name:'my button','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})\n"},"file":"lib\\attribute_holders\\_buttons.pug","source":"mixin action(obj, _attributes)\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  - obj.type = 'action';\r\n  - obj.name = attrName(obj.name).replace(/[\\s_]+/g,'-');\r\n  +button(obj)&attributes(attributes)\r\n    block\r","output":"<button name=\"act_my-button\" data-i18n=\"action button\" type=\"action\" title=\"%{my-button}\"></button>"},{"meta":{"name":"roller","arguments":[{"name":"buttonObj","description":"The object describing the button","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - The object describing the button"},{"name":"block","description":"The contents of the button element","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the button element"}],"description":"Creates a multi element construction made of a hidden input, a roll button, and a hidden action button. On sheet load, or character sheet name change, the hidden input is updated with an ability call to the action button. The roll button refers to the hidden input as its value. This allows for an action button to be used to call custom roll parsing (or other sheet functionality) while retaining the ability to drag the button to the macro bar. Uses the same arguments as {@link button}. A trigger should be passed, and will be associated with the action button's name.","attributes":null,"example":"include ../_k.pug\n+roller({name:'my button','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})\n"},"file":"lib\\attribute_holders\\_buttons.pug","source":"mixin roller(obj)\r\n  +rollerExtras(obj)\r\n    - let rollObj = {...obj};\r\n    - delete rollObj.trigger;\r\n    +button(obj)\r\n      block\r","output":"<button class=\"roller\" name=\"roll_my_button\" data-i18n=\"action button\" value=\"@{my_button_action}\" title=\"%{my_button}\" type=\"roll\"></button>\n<button name=\"act_my-button-action\" hidden=\"\" type=\"action\" title=\"%{my-button-action}\"></button>\n<input name=\"attr_my_button_action\" type=\"hidden\" title=\"@{my_button_action}\"/>"},{"meta":{"name":"compendiumAttributes","description":"Creates a set of compendium drop target attributes. Defaults to creating target attributes for the `Name` and `data` compendium attributes.","arguments":[{"name":"prefix","description":"A prefix to attach to the default attribute names.","type":"string","default":null,"nullable":false,"optional":true,"original":"{string} [prefix] - A prefix to attach to the default attribute names."},{"name":"lookupAttributes","description":"An array of the lookup attributes to create targets for. The target attributes are named based on the compendium attribute they are for.","type":"array","default":"['Name','data']","nullable":false,"optional":true,"original":"{array} [lookupAttributes = ['Name','data']] - An array of the lookup attributes to create targets for. The target attributes are named based on the compendium attribute they are for."},{"name":"triggerAccept","description":"The compendium attribute that should trigger the sheetworkers to handle the compendium drop.","type":"string","default":"'Name'","nullable":false,"optional":true,"original":"{string} [triggerAccept = 'Name'] - The compendium attribute that should trigger the sheetworkers to handle the compendium drop."},{"name":"trigger","description":"The trigger object.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - The trigger object."}],"attributes":null,"example":"include ../_k.pug\n//Using just defaults\n+compendiumAttributes({})\n\n//Specifying a prefix\n+compendiumAttributes({prefix:'prefix'})\n\n//Specifying lookupAttributes and a prefix\n+compendiumAttributes({lookupAttributes:['Name','data','Category'],prefix:'prefix'})\n"},"file":"lib\\attribute_holders\\_compendium.pug","source":"mixin compendiumAttributes({prefix,lookupAttributes = ['Name','data'],triggerAccept = 'Name',trigger = {triggeredFuncs:[\"handleCompendiumDrop\"]}})\r\n  - prefix = prefix ? `${prefix} ` : '';\r\n  each accept in lookupAttributes\r\n    - let inputObj = {name:`${prefix}drop ${accept.toLowerCase()}`,accept,value:''};\r\n    if accept === triggerAccept\r\n      - inputObj.trigger = trigger;\r\n    +hidden(inputObj)\r","output":"<!--Using just defaults-->\n<input name=\"attr_drop_name\" accept=\"Name\" value=\"\" type=\"hidden\" title=\"@{drop_name}\"/>\n<input name=\"attr_drop_data\" accept=\"data\" value=\"\" type=\"hidden\" title=\"@{drop_data}\"/>\n<!--Specifying a prefix-->\n<input name=\"attr_prefix_drop_name\" accept=\"Name\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_name}\"/>\n<input name=\"attr_prefix_drop_data\" accept=\"data\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_data}\"/>\n<!--Specifying lookupAttributes and a prefix-->\n<input name=\"attr_prefix_drop_name\" accept=\"Name\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_name}\"/>\n<input name=\"attr_prefix_drop_data\" accept=\"data\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_data}\"/>\n<input name=\"attr_prefix_drop_category\" accept=\"Category\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_category}\"/>"},{"meta":{"name":"adaptiveTextarea","description":"Creates an html construction for creating a [content-scaled](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs) textarea. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).","arguments":[{"name":"textObj","description":"The object describing the textarea as per the {@link textarea} mixin.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} textObj - The object describing the textarea as per the {@link textarea} mixin."}],"attributes":null,"example":"include ../_k.pug\n+adaptiveTextarea({name:'character description'})\n\n//Appending the class directly to the mixin\n+adaptiveTextarea({name:'character description'}).custom-class\n"},"file":"lib\\adaptive\\_adaptive.pug","source":"mixin adaptiveTextarea(textObj)\r\n  .adaptive.adaptive--text&attributes(attributes)\r\n    - let spanObj = {name:textObj.name,class:'adaptive--text__span'};\r\n    - textObj.class = textObj.class ? `${textObj.class} adaptive--text__textarea` : 'adaptive--text__textarea';\r\n    +span(spanObj)\r\n    +textarea(textObj)\r","output":"<div class=\"adaptive adaptive--text\">\n  <span class=\"adaptive--text__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <textarea class=\"adaptive--text__textarea\" name=\"attr_character_description\" title=\"@{character_description}\"></textarea>\n</div>\n<!--Appending the class directly to the mixin-->\n<div class=\"adaptive adaptive--text custom-class\">\n  <span class=\"adaptive--text__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <textarea class=\"adaptive--text__textarea\" name=\"attr_character_description\" title=\"@{character_description}\"></textarea>\n</div>"},{"meta":{"name":"adaptiveInput","description":"Creates an html construction for creating a [content-scaled](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs) input. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).","arguments":[{"name":"inputObj","description":"The object describing the input as per the {@link input} mixin. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - The object describing the input as per the {@link input} mixin. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example)."}],"attributes":null,"example":"include ../_k.pug\n+adaptiveInput({name:'character description',type:'text'})\n\n//Appending class directly to the mixin\n+adaptiveInput({name:'character description',type:'text'}).custom-class\n"},"file":"lib\\adaptive\\_adaptive.pug","source":"mixin adaptiveInput(textObj)\r\n  .adaptive.adaptive--input&attributes(attributes)\r\n    - let spanObj = {name:textObj.name,class:'adaptive--input__span','max-width':maxWidth};\r\n    - textObj.class = textObj.class ? `${textObj.class} adaptive--input__input` : 'adaptive--input__input';\r\n    +span(spanObj)\r\n    +input(textObj)\r","output":"<div class=\"adaptive adaptive--input\">\n  <span class=\"adaptive--input__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <input class=\"adaptive--input__input\" name=\"attr_character_description\" type=\"text\" title=\"@{character_description}\"/>\n</div>\n<!--Appending class directly to the mixin-->\n<div class=\"adaptive adaptive--input custom-class\">\n  <span class=\"adaptive--input__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <input class=\"adaptive--input__input\" name=\"attr_character_description\" type=\"text\" title=\"@{character_description}\"/>\n</div>"},{"meta":{"name":"img","description":"A mixin to create a sheet image element. Particularly useful when using the image attribute syntax.","arguments":[{"name":"imgObj","description":"An object describing the properties of the img just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} imgObj - An object describing the properties of the img just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property."}],"example":"include ../_k.pug\n+img({name:'my image',class:'some-class'})\n"},"file":"lib\\attribute_holders\\_attribute_backed.pug","source":"mixin img(obj)\r\n  - checkKUse();\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  - obj['data-i18n-alt'] = obj['data-i18n-alt'] || obj.name;\r\n  - obj.name = attrName(obj.name);\r\n  - obj.title = obj.title || attrTitle(obj.name);\r\n  - obj.name = `attr_${obj.name}`;\r\n  - const elementObj = makeElementObj(obj);\r\n  - addFieldToFieldsetObj(obj);\r\n  - storeTrigger(obj);\r\n  img&attributes(elementObj)\r","output":"<img class=\"some-class\" name=\"attr_my_image\" data-i18n-alt=\"my image\" title=\"@{my_image}\"/>"},{"meta":{"name":"span","description":"Creates a span element and formats the name of the span for compatibility with the Roll20 attribute system.","arguments":[{"name":"attrObj","description":"The object describing the span itself.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} attrObj - The object describing the span itself."},{"name":"block","description":"What is contained within the span","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - What is contained within the span"}],"attributes":null,"example":"include ../_k.pug\n+span({name:'attribute backed span',trigger:{calculation:'calculateAttribute'}})\n"},"file":"lib\\attribute_holders\\_attribute_backed.pug","source":"mixin span(obj)\r\n  - checkKUse();\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  if obj.name\r\n    - obj.name = replaceSpaces(obj.name);\r\n    - obj.title = obj.title || attrTitle(obj.name);\r\n    - obj.name = `attr_${obj.name}`;\r\n    - addFieldToFieldsetObj(obj);\r\n  - const elementObj = makeElementObj(obj);\r\n  span&attributes(elementObj)\r\n    block\r\n  if obj.name\r\n    - obj.type = 'span';\r\n    - storeTrigger(obj);\r","output":"<span name=\"attr_attribute_backed_span\" title=\"@{attribute_backed_span}\"></span>"},{"meta":{"name":"div","description":"Creates a div element and will properly format the name attribute of the div if it is provided","arguments":[{"name":"divObj","description":"The object describing the div","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - The object describing the div"},{"name":"block","description":"The contents of the div","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the div"}],"attributes":null,"example":"include ../_k.pug\n+div({name:'background image'})\n"},"file":"lib\\attribute_holders\\_attribute_backed.pug","source":"mixin div(obj)\r\n  - checkKUse();\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  if obj.name\r\n    - obj.name = replaceSpaces(obj.name);\r\n    - obj.title = obj.title || attrTitle(obj.name);\r\n    - obj.name = `attr_${obj.name}`;\r\n  div&attributes(obj)\r\n    block\r","output":"<div name=\"attr_background_image\" title=\"@{background_image}\"></div>"},{"meta":{"name":"input","description":"A generic mixin to create an input. The mixin will replace spaces in the attribute name with underscores and will add a title property if one isn't supplied that will inform the user what the attribute call for the attribute is.","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"attributes":null,"example":"include ../_k.pug\n+input({name:'my attribute',type:'text',class:'some-class',trigger:{affects:['other_attribute']}})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin input(obj)\r\n  - checkKUse();\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  - obj.name = attrName(obj.name);\r\n  - obj.title = obj.title || attrTitle(obj.name);\r\n  - obj.name = `attr_${obj.name}`;\r\n  - const elementObj = makeElementObj(obj);\r\n  - addFieldToFieldsetObj(obj);\r\n  - storeTrigger(obj);\r\n  input&attributes(elementObj)&attributes(attributes)\r","output":"<input class=\"some-class\" name=\"attr_my_attribute\" type=\"text\" title=\"@{my_attribute}\"/>"},{"meta":{"name":"text","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"An alias for {@link input} that specifies the input type as text. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+text({name:'my attribute',class:'some-class',trigger:{affects:['other_attribute']}})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin text(obj)\r\n  - obj.type = 'text';\r\n  +input(obj)\r","output":"<input class=\"some-class\" name=\"attr_my_attribute\" type=\"text\" title=\"@{my_attribute}\"/>"},{"meta":{"name":"checkbox","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"An alias for {@link input} that specifies the input type as checkbox. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+checkbox({name:'my checkbox',value:1})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin checkbox(obj)\r\n  - obj.type = 'checkbox';\r\n  +input(obj)&attributes(attributes)\r","output":"<input name=\"attr_my_checkbox\" value=\"1\" type=\"checkbox\" title=\"@{my_checkbox}\"/>"},{"meta":{"name":"collapse","arguments":[{"name":"name","description":"The name to use for the collapse element. Defaults to `collapse`","type":"string","default":"collapse","nullable":false,"optional":true,"original":"{string} [name=collapse] - The name to use for the collapse element. Defaults to `collapse`"}],"description":"Alias for {@link checkbox} that creates a checkbox for us in collapse/expanding a section. Sets the checkbox to unchecked with a checked value of `1` and a class of `collapse`. Additional classes/ids can be applied by applying them inline to the mixin call.","attributes":null,"example":"include ../_k.pug\n+collapse()\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin collapse(name='collapse')\r\n  +checkbox({name,value:1,class:'collapse'})&attributes(attributes)\r","output":"<input class=\"collapse\" name=\"attr_collapse\" value=\"1\" type=\"checkbox\" title=\"@{collapse}\"/>"},{"meta":{"name":"radio","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that specifies `radio` as the input type. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+radio({name:'my radio',value:1,checked:''})\n+radio({name:'my radio',value:2})\n+radio({name:'my radio',value:3})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin radio(obj)\r\n  - obj.type = 'radio';\r\n  +input(obj)\r","output":"<input name=\"attr_my_radio\" value=\"1\" checked=\"\" type=\"radio\" title=\"@{my_radio}\"/>\n<input name=\"attr_my_radio\" value=\"2\" type=\"radio\" title=\"@{my_radio}\"/>\n<input name=\"attr_my_radio\" value=\"3\" type=\"radio\" title=\"@{my_radio}\"/>"},{"meta":{"name":"number","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that makes a number input. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+number({name:'my number',class:'some-class',trigger:{affects:['other_attribute']}})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin number(obj)\r\n  - obj.type = 'number';\r\n  +input(obj)\r","output":"<input class=\"some-class\" name=\"attr_my_number\" type=\"number\" title=\"@{my_number}\"/>"},{"meta":{"name":"range","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that makes a range input. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+range({name:'my range',class:'some-class'})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin range(obj)\r\n  - obj.type = 'range';\r\n  +input(obj)\r","output":"<input class=\"some-class\" name=\"attr_my_range\" type=\"range\" title=\"@{my_range}\"/>"},{"meta":{"name":"hidden","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that makes a hidden input. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+hidden({name:'my hidden attribute',class:'some-class',trigger:{triggeredFuncs:['someFunction']}})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin hidden(obj)\r\n  - obj.type = 'hidden';\r\n  +input(obj)\r","output":"<input class=\"some-class\" name=\"attr_my_hidden_attribute\" type=\"hidden\" title=\"@{my_hidden_attribute}\"/>"},{"meta":{"name":"textarea","description":"A mixin to create K-scaffold compatible textareas.","arguments":[{"name":"textObj","description":"See {@link input} for information on valid properties of the textObj.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} textObj - See {@link input} for information on valid properties of the textObj."}],"attributes":null,"example":"include ../_k.pug\n+textarea({name:'my textarea',class:'some-class',trigger:{affects:['an_attribute']}})\n"},"file":"lib\\attribute_holders\\_inputs.pug","source":"mixin textarea(obj)\r\n  - checkKUse();\r\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\r\n  - obj.name = attrName(obj.name);\r\n  - obj.title = obj.title || attrTitle(obj.name);\r\n  - obj.name = `attr_${obj.name}`;\r\n  - addFieldToFieldsetObj(obj);\r\n  - storeTrigger(obj);\r\n  - const elementObj = makeElementObj(obj);\r\n  textarea&attributes(elementObj)\r","output":"<textarea class=\"some-class\" name=\"attr_my_textarea\" title=\"@{my_textarea}\"></textarea>"},{"meta":{"name":"select","arguments":[{"name":"selectObj","description":"The object describing the select","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} selectObj - The object describing the select"},{"name":"block","description":"The content within the select","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The content within the select"}],"description":"A mixin to create a select element. Also provides an option mixin that is restricted to only work within the select. Trigger objects can be passed as arguments on the select call itself or on the default selected option. Uses K-scaffold global variables to control how option mixins within the select's block behave.","example":"include ../_k.pug\n+select({name:'my select'})\n  +option({value:'a value','data-i18n':'a translation key',trigger:{affects:['some_attribute']}})\n  +option({value:'value 2','data-i18n':'translation 2'})\n  +option({value:'value 3'})\n  |Some Text we include via the option's block\n|\n|\n+select({\n  name:'my select',\n  trigger:{\n    affects:['some_attribute']\n  }\n})\n  +option({value:'a value','data-i18n':'a translation key'})\n  +option({value:'value 2','data-i18n':'translation 2'})\n  +option({value:'value 3'})\n    |Some Text we include via the option's block\n"},"file":"lib\\attribute_holders\\_selects.pug","source":"mixin select(obj)\r\n  - checkKUse();\r\n  -\r\n    obj.class = obj.class ?\r\n      replaceProblems(obj.class) :\r\n      undefined;\r\n  - obj.name = attrName(obj.name);\r\n  - obj.title = obj.title || attrTitle(obj.name);\r\n  - obj.name = `attr_${obj.name}`;\r\n  - addFieldToFieldsetObj(obj);\r\n\r\n  //- Initialize the object that will be passed to the cascade\r\n  - const triggerObj = {...obj,type:'select'};\r\n  - const options = [];\r\n  \r\n  mixin option(optObj)\r\n    -\r\n      optObj.class = optObj.class ?\r\n        replaceProblems(optObj.class) :\r\n        undefined;\r\n    -\r\n      const pushObj = {\r\n        obj:optObj,\r\n        attributes: attributes || {}\r\n      };\r\n    if block\r\n      - pushObj.block = block;\r\n    - options.push(pushObj);\r\n\r\n\r\n  if !block\r\n    option(value='!!! Error: empty select !!!')\r\n  else\r\n    - block();\r\n    - const selObj = makeElementObj(obj);\r\n    select&attributes(selObj)&attributes(attributes)\r\n      each o in options\r\n        if o.hasOwnProperty('selected') && o.hasOwnProperty('value')\r\n          - triggerObj.value = o.value;\r\n          if o.trigger && !triggerObj.trigger\r\n            - triggerObj.trigger = o.trigger;\r\n        - const elemObj = makeElementObj(o.obj);\r\n        option&attributes(elemObj)&attributes(o.attributes)\r\n    - storeTrigger(triggerObj);\r","output":"Some Text we include via the option's block<select name=\"attr_my_select\" title=\"@{my_select}\">\n  <option value=\"a value\" data-i18n=\"a translation key\"></option>\n  <option value=\"value 2\" data-i18n=\"translation 2\"></option>\n  <option value=\"value 3\"></option>\n</select>\n\n<select name=\"attr_my_select\" title=\"@{my_select}\">\n  <option value=\"a value\" data-i18n=\"a translation key\"></option>\n  <option value=\"value 2\" data-i18n=\"translation 2\"></option>\n  <option value=\"value 3\"></option>\n</select>"},{"meta":{"name":"fillLeft","description":"A mixin that creates an html construction ready to be styled for use as a [fill-to-left section](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).","arguments":[{"name":"radioObj","description":"The object containing the details of the radio input to create. Similar to the {@link radio}, but the value property passed is used as the default checked value.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} radioObj - The object containing the details of the radio input to create. Similar to the {@link radio}, but the value property passed is used as the default checked value."},{"name":"divObj","description":"Optional object containing any details of the div to be applied such as class, id, or other properties. Class and ID can also be supplied by attaching them to the mixin invocation just like with a regular div.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [divObj] - Optional object containing any details of the div to be applied such as class, id, or other properties. Class and ID can also be supplied by attaching them to the mixin invocation just like with a regular div."},{"name":"valueArray","description":"Array containing the values to be used for the fill to left construction. These should be in the order that they should be displayed left to right.","type":"array","default":null,"nullable":false,"optional":false,"original":"{array} valueArray - Array containing the values to be used for the fill to left construction. These should be in the order that they should be displayed left to right."},{"name":"noClear","description":"Optional argument that tells the mixin whether or not to apply the `fill-left__radio--clearer` class to the first radio button value. If falsy (or not passed), the class is applied. If truthy, the class is not applied.","type":"boolean","default":null,"nullable":false,"optional":true,"original":"{boolean} [noClear] - Optional argument that tells the mixin whether or not to apply the `fill-left__radio--clearer` class to the first radio button value. If falsy (or not passed), the class is applied. If truthy, the class is not applied."}],"example":"include ../_k.pug\n+fillLeft({\n  radioObj:{name:'my radio'},\n  divObj:{class:'some-custom-class'},\n  valueArray:[1,2,3,4,5]\n})\n"},"file":"lib\\attribute_holders\\_fill_left.pug","source":"mixin fillLeft({radioObj,divObj,valueArray,noClear,displayValues})\r\n  - divObj = divObj || {};\r\n  .fill-left&attributes(divObj)&attributes(attributes)\r\n    if !noClear\r\n      - const clearObj = {...radioObj,value:0};\r\n      -\r\n        clearObj.class = clearObj.class ? \r\n          `${clearObj.class} fill-left__radio` :\r\n          `fill-left__radio`;\r\n      if value === 0\r\n        - clearObj.checked = '';\r\n      +hidden(clearObj)\r\n    each value,index in valueArray\r\n      - const usedObj = {...radioObj,value};\r\n      -\r\n        usedObj.class = usedObj.class ? \r\n          `${usedObj.class} fill-left__radio` :\r\n          `fill-left__radio`;\r\n      if displayValues\r\n        - usedObj['data-value'] = displayValues[index];\r\n      if value === radioObj.value\r\n        - usedObj.checked = '';\r\n      \r\n      +#{noClear ? 'radio' : 'checkbox'}(usedObj)\r","output":"<div class=\"fill-left some-custom-class\">\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"0\" type=\"hidden\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"1\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"2\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"3\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"4\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"5\" type=\"checkbox\" title=\"@{my_radio}\"/>\n</div>"},{"meta":{"name":"fieldset","description":"A mixin that creates a fieldset for the creation of a repeating section. The mixin prefixes the name with `repeating_` and replaces problem characters (e.g. spaces are replaced with dashes). Additionally, the auto-generated title properties from the K-scaffold\\'s mixins will include the proper repeating section information.","arguments":[{"name":"name","description":"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{"name":"trigger","description":"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{"name":"addClass","description":"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],"attributes":null,"example":"include ../_k.pug\n//A basic fieldset declaration with a trigger\n+fieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']}\n})\n  +text({name:'name'})\n\n//A Fieldset with an added class\n+fieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']},\n  addClass:'some-class'\n})\n  +text({name:'name'})\n"},"file":"lib\\fieldsets\\_fieldsets.pug","source":"mixin fieldset({name,trigger,addClass})\r\n  -\r\n    name = repeatsIgnoreSystemPrefix || !getSystemPrefix() ?\r\n      name :\r\n      `${getSystemPrefix()} ${name}`;\r\n  - name = name.replace(/\\s+/g,'-');\r\n  - let section = `repeating_${name}`;\r\n  - k.repeatingPrefix = `${section}_$X_`;\r\n  - createFieldsetObj(section)\r\n  if trigger\r\n    - storeTrigger({name:section,type:'fieldset',trigger})\r\n  if addClass\r\n    span(hidden=\"\" class=addClass)\r\n  fieldset(class=`${section}`)\r\n    block\r\n  - k.repeatingPrefix = '';\r","output":"<!--A basic fieldset declaration with a trigger-->\n<fieldset class=\"repeating_fieldset\">\n  <input name=\"attr_name\" type=\"text\" title=\"@{repeating_fieldset_$X_name}\"/>\n</fieldset>\n<!--A Fieldset with an added class-->\n<span class=\"some-class\" hidden=\"\"></span>\n<fieldset class=\"repeating_fieldset\">\n  <input name=\"attr_name\" type=\"text\" title=\"@{repeating_fieldset_$X_name}\"/>\n</fieldset>"},{"meta":{"name":"inlineFieldset","description":"An alias for {@link fieldset} that creates a fieldset with an added class that can be easily hooked into via CSS to style the fieldset for inline display.","arguments":[{"name":"name","description":"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{"name":"trigger","description":"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{"name":"addClass","description":"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],"attributes":null,"example":"include ../_k.pug\n+inlineFieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']},\n  addClass:'some-class'\n})\n"},"file":"lib\\fieldsets\\_fieldsets.pug","source":"mixin inlineFieldset({name,trigger,addClass})\r\n  - addClass = addClass ? `${addClass} inline-fieldset` : 'inline-fieldset';\r\n  - varObjects.inlineFieldsets = varObjects.inlineFieldsets || [];\r\n  - varObjects.inlineFieldsets.push(name);\r\n  \r\n  +action({name:`add ${name}`,class:'repcontrol-button repcontrol-button--add repcontrol-button--inline',trigger:{listenerFunc:'sectionInteract'}})\r\n  +fieldset({name,trigger,addClass})\r\n    +radio({name:'display state',class:'display-control',value:'short-display',hidden:''})\r\n    .inline-fieldset__summary.display-target\r\n      label.pointer\r\n        +checkbox({name:'collapse',value:1,hidden:'',trigger:{triggeredFuncs:['collapseSection']}})\r\n        +span({name:'name',class:'inline-fieldset__summary__text'})\r\n    +radio({name:'display state',class:'display-control',value:'display',checked:'',hidden:''})\r\n    .inline-fieldset__detail.display-target\r\n      +collapse\r\n      block\r","output":"<button class=\"repcontrol-button repcontrol-button--add repcontrol-button--inline\" name=\"act_add-fieldset\" type=\"action\" title=\"%{add-fieldset}\"></button>\n<span class=\"some-class inline-fieldset\" hidden=\"\"></span>\n<fieldset class=\"repeating_fieldset\">\n  <input class=\"display-control\" name=\"attr_display_state\" value=\"short-display\" hidden=\"\" type=\"radio\" title=\"@{repeating_fieldset_$X_display_state}\"/>\n  <div class=\"inline-fieldset__summary display-target\">\n    <label class=\"pointer\">\n      <input name=\"attr_collapse\" value=\"1\" hidden=\"\" type=\"checkbox\" title=\"@{repeating_fieldset_$X_collapse}\"/>\n      <span class=\"inline-fieldset__summary__text\" name=\"attr_name\" title=\"@{repeating_fieldset_$X_name}\"></span>\n    </label>\n  </div>\n  <input class=\"display-control\" name=\"attr_display_state\" value=\"display\" checked=\"\" hidden=\"\" type=\"radio\" title=\"@{repeating_fieldset_$X_display_state}\"/>\n  <div class=\"inline-fieldset__detail display-target\">\n    <input class=\"collapse\" name=\"attr_collapse\" value=\"1\" type=\"checkbox\" title=\"@{repeating_fieldset_$X_collapse}\"/>\n  </div>\n</fieldset>"},{"meta":{"name":"button-label","description":"A mixin to create a combined button and input that are within the same container. Similar to {@link input-label}, but does not use a label.","arguments":[{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"buttonObj","description":"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{"name":"divObj","description":"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],"attributes":null,"example":"include ../_k.pug\n+button-label({\n  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},\n  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},\n  divObj:{class:'strength'}\n})\n"},"file":"lib\\labels\\_labels.pug","source":"mixin button-label({inputObj,buttonObj,divObj})\r\n  if divObj\r\n    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;\r\n  - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;\r\n  - buttonObj.class = buttonObj.class ? replaceProblems(buttonObj.class) : undefined;\r\n  - inputObj.name = inputObj.name.replace(/\\s+/g,'_');\r\n  - buttonObj.name = (buttonObj.name || inputObj.name).replace(/\\s+/g,'_');\r\n  .input-label.input-label--button&attributes(divObj)\r\n    - inputObj.class = inputObj.class ? `${inputObj.class} input-label__input` : 'input-label__input';\r\n    if spanObj\r\n      - buttonObj.class = buttonObj.class ? `${buttonObj.class} input-label__text` : 'input-label__text';\r\n    +button(buttonObj)\r\n    +input(inputObj)\r","output":"<div class=\"input-label input-label--button strength\">\n  <button name=\"roll_strength_roll\" type=\"roll\" value=\"/r 1d20+@{strength}\" title=\"%{strength_roll}\"></button>\n  <input class=\"underlined input-label__input\" name=\"attr_strength\" type=\"number\" value=\"10\" title=\"@{strength}\"/>\n</div>"},{"meta":{"name":"roller-label","description":"Similar to the construction created by {@link button-label}, except that it creates a {@link roller} construction instead of just a straight button.","arguments":[{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"buttonObj","description":"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{"name":"divObj","description":"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],"attributes":null,"example":"include ../_k.pug\n+roller-label({\n  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},\n  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},\n  divObj:{class:'strength'}\n})\n"},"file":"lib\\labels\\_labels.pug","source":"mixin roller-label({inputObj,buttonObj,divObj})\r\n  +rollerExtras(buttonObj)\r\n    +button-label({inputObj,buttonObj,divObj})\r","output":"<div class=\"input-label input-label--button strength\">\n  <button class=\"roller\" name=\"roll_strength_roll\" type=\"roll\" value=\"@{strength_action}\" title=\"%{strength_roll}\"></button>\n  <input class=\"underlined input-label__input\" name=\"attr_strength\" type=\"number\" value=\"10\" title=\"@{strength}\"/>\n</div>\n<button name=\"act_strength-action\" hidden=\"\" type=\"action\" title=\"%{strength-action}\"></button>\n<input name=\"attr_strength_action\" type=\"hidden\" title=\"@{strength_action}\"/>"},{"meta":{"name":"action-label","description":"Similar to the construction created by {@link button-label}, except that it specifcally creates an [action button](https://wiki.roll20.net/Button#Action_Button) as per {@link action}.","arguments":[{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"buttonObj","description":"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{"name":"divObj","description":"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],"attributes":null,"example":"include ../_k.pug\n+roller-label({\n  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},\n  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},\n  divObj:{class:'strength'}\n})\n"},"file":"lib\\labels\\_labels.pug","source":"mixin action-label({inputObj,buttonObj,divObj})\r\n  - buttonObj.type = 'action';\r\n  +button-label({inputObj,buttonObj,divObj})\r","output":"<div class=\"input-label input-label--button strength\">\n  <button class=\"roller\" name=\"roll_strength_roll\" type=\"roll\" value=\"@{strength_action}\" title=\"%{strength_roll}\"></button>\n  <input class=\"underlined input-label__input\" name=\"attr_strength\" type=\"number\" value=\"10\" title=\"@{strength}\"/>\n</div>\n<button name=\"act_strength-action\" hidden=\"\" type=\"action\" title=\"%{strength-action}\"></button>\n<input name=\"attr_strength_action\" type=\"hidden\" title=\"@{strength_action}\"/>"},{"meta":{"name":"select-label","description":"Similar to the construction created by {@link input-label}, except that the input is replaced with a select.","arguments":[{"name":"label","description":"The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} label - The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key"},{"name":"inputObj","description":"An object describing the select to be paired with the button. This is the same object that you would pass to {@link select}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the select to be paired with the button. This is the same object that you would pass to {@link select}."},{"name":"divObj","description":"An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [divObj] - An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all."},{"name":"spanObj","description":"An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [spanObj] - An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}."},{"name":"block","description":"The mixin uses the pug block as the content of the select.","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The mixin uses the pug block as the content of the select."}],"attributes":null,"example":"include ../_k.pug\n+select-label({\n  label:'Whisper to GM',\n  inputObj:{name:'whisper'},\n  divObj:{class:'div-class'},\n  spanObj:{class:'span-class'}\n})\n  +option({value:'','data-i18n':'never',selected:''})\n  +option({value:'/w gm ','data-i18n':'always'})\n"},"file":"lib\\labels\\_labels.pug","source":"mixin select-label({label,inputObj,divObj,spanObj})\r\n  if divObj\r\n    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;\r\n  if inputObj\r\n    - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;\r\n  if spanObj\r\n    - spanObj.class = spanObj.class ? replaceProblems(spanObj.class) : undefined;\r\n  label.input-label&attributes(divObj)\r\n    - inputObj.name = inputObj.name.replace(/\\s+/g,'_');\r\n    - inputObj.class = inputObj.class ? `${inputObj.class} input-label__input` : 'input-label__input';\r\n    if spanObj\r\n      - spanObj.class = spanObj.class ? `${spanObj.class} input-label__text` : 'input-label__text';\r\n    span(data-i18n=label)&attributes(spanObj)\r\n    +select(inputObj)\r\n      block\r","output":"<label class=\"input-label div-class\">\n  <span class=\"span-class input-label__text\" data-i18n=\"Whisper to GM\"></span>\n  <select class=\"input-label__input\" name=\"attr_whisper\" title=\"@{whisper}\">\n    <option value=\"\" data-i18n=\"never\" selected=\"\"></option>\n    <option value=\"/w gm \" data-i18n=\"always\"></option>\n  </select>\n</label>"},{"meta":{"name":"input-label","description":null,"arguments":[{"name":"label","description":"The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} label - The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key"},{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"divObj","description":"An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [divObj] - An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all."},{"name":"spanObj","description":"An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [spanObj] - An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}."}],"attributes":null,"example":"include ../_k.pug\n+input-label({\n  label:'strength',\n  inputObj:{name:'strength',type:'number'},\n  divObj:{class:'div-class'},\n  spanObj:{class:'span-class'}\n})\n"},"file":"lib\\labels\\_labels.pug","source":"mixin input-label({label,inputObj,divObj,spanObj})\r\n  if divObj\r\n    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;\r\n  if inputObj\r\n    - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;\r\n  if spanObj\r\n    - spanObj.class = spanObj.class ? replaceProblems(spanObj.class) : undefined;\r\n  label.input-label&attributes(divObj)\r\n    - inputObj.name = inputObj.name.replace(/\\s+/g,'_');\r\n    - inputObj.class = inputObj.class ? `${inputObj.class} input-label__input` : 'input-label__input';\r\n    if spanObj\r\n      - spanObj.class = spanObj.class ? `${spanObj.class} input-label__text` : 'input-label__text';\r\n    span(data-i18n=label)&attributes(spanObj)\r\n    +input(inputObj)\r","output":"<label class=\"input-label div-class\">\n  <span class=\"span-class input-label__text\" data-i18n=\"strength\"></span>\n  <input class=\"input-label__input\" name=\"attr_strength\" type=\"number\" title=\"@{strength}\"/>\n</label>"},{"meta":{"name":"headedTextarea","description":"Creates a construction for pairing a header with a textarea. Currently is locked to creating an `h3`.  This mixin also accepts classes and IDs appended directly to it (see the second example)","arguments":[{"name":"textObj","description":"The object describing the textarea as per {@link textarea}","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} textObj - The object describing the textarea as per {@link textarea}"},{"name":"header","description":"The `data-i18n` translation key to use for the header","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} header - The `data-i18n` translation key to use for the header"}],"attributes":null,"example":"include ../_k.pug\n+headedTextarea({textObj:{name:'character description','data-i18n-placeholder':'The description of your character'},header:'description'})\n//With class appended to the mixin itself\n+headedTextarea({textObj:{name:'character description','data-i18n-placeholder':'The description of your character'},header:'description'}).character-description\n"},"file":"lib\\labels\\_labels.pug","source":"mixin headedTextarea({textObj,header})\r\n  .headed-textarea&attributes(attributes)\r\n    - textObj.class = textObj.class ? `${textObj.class} headed-textarea__textarea` : 'headed-textarea__textarea';\r\n    h3(data-i18n=header class='headed-textarea__header')\r\n    +textarea(textObj)\r","output":"<div class=\"headed-textarea\">\n  <h3 class=\"headed-textarea__header\" data-i18n=\"description\"></h3>\n    <textarea class=\"headed-textarea__textarea\" name=\"attr_character_description\" data-i18n-placeholder=\"The description of your character\" title=\"@{character_description}\"></textarea>\n  </div>\n  <!--With class appended to the mixin itself-->\n  <div class=\"headed-textarea character-description\">\n    <h3 class=\"headed-textarea__header\" data-i18n=\"description\"></h3>\n      <textarea class=\"headed-textarea__textarea\" name=\"attr_character_description\" data-i18n-placeholder=\"The description of your character\" title=\"@{character_description}\"></textarea>\n    </div>"},{"meta":{"name":"script","description":"Creates a generic [Roll20 script block](https://wiki.roll20.net/Building_Character_Sheets#JavaScript_2) for use with the sheetworker system.","arguments":null,"attributes":null,"example":"include ../_k.pug\n+script\n"},"file":"lib\\scripts\\_scripts.pug","source":"mixin script\r\n  script(type='text/worker')\r\n    block\r","output":"<script type=\"text/worker\"></script>"},{"meta":{"name":"kscript","description":"Similar to {@link script}, but includes the K-scaffold\\'s javascript function library.","arguments":null,"attributes":null,"example":"include ../_k.pug\n+kscript\n"},"file":"lib\\scripts\\_scripts.pug","source":"mixin kscript\r\n  - scriptUsed = true;\r\n  +script\r\n    |const k = (function(){\r\n    |const kFuncs = {};\r\n    //- The below declarations import variables from the pug file and mixins into the sheetworker code\r\n    - const propArray = ['cascades','repeatingSectionDetails','persistentTabs'];\r\n    each prop in propArray\r\n      |\r\n      |const !{prop} = !{JSON.stringify(varObjects[prop])};\r\n      |\r\n      |kFuncs.!{prop} = !{prop};\r\n      - delete varObjects[prop];\r\n    |\r\n    |\r\n    include kvariables.js\r\n    include utility.js\r\n    include attribute_proxy.js\r\n    include accessSheet.js\r\n    include parse_cascade.js\r\n    include sheetworker_aliases.js\r\n    include listeners.js\r\n    include ../tabs/tabs.js\r\n    |\r\n    |return kFuncs;\r\n    |}());\r\n    |\r\n    each content,prop in varObjects\r\n      |\r\n      if typeof content === 'object'\r\n        |const !{prop} = !{JSON.stringify(content)};\r\n      else\r\n        |let !{prop} = !{content};\r\n      |\r\n    |\r\n    block\r\n    each jsBlock in k.scriptBlocks\r\n      |\r\n      |\r\n      - jsBlock();\r","output":"<script type=\"text/worker\">\n  const k = (function(){\nconst kFuncs = {};\nconst cascades = {\"attr_character_name\":{\"name\":\"character_name\",\"type\":\"text\",\"defaultValue\":\"\",\"affects\":[],\"triggeredFuncs\":[\"setActionCalls\"],\"listenerFunc\":\"accessSheet\",\"listener\":\"change:character_name\"},\"act_my_button\":{\"triggeredFuncs\":[\"doSomethingOnClick\"],\"name\":\"my_button\",\"listener\":\"clicked:my_button\",\"listenerFunc\":\"accessSheet\",\"type\":\"action\"},\"act_my-button\":{\"triggeredFuncs\":[\"doSomethingOnClick\"],\"name\":\"my-button\",\"listener\":\"clicked:my-button\",\"listenerFunc\":\"accessSheet\",\"type\":\"action\"},\"act_my-button-action\":{\"triggeredFuncs\":[\"doSomethingOnClick\"],\"name\":\"my-button-action\",\"listener\":\"clicked:my-button-action\",\"listenerFunc\":\"accessSheet\",\"type\":\"action\"},\"attr_my_button_action\":{\"name\":\"my_button_action\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_drop_name\":{\"triggeredFuncs\":[\"handleCompendiumDrop\"],\"name\":\"drop_name\",\"listener\":\"change:drop_name\",\"listenerFunc\":\"accessSheet\",\"type\":\"hidden\",\"defaultValue\":\"\",\"affects\":[]},\"attr_drop_data\":{\"name\":\"drop_data\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_prefix_drop_name\":{\"triggeredFuncs\":[\"handleCompendiumDrop\"],\"name\":\"prefix_drop_name\",\"listener\":\"change:prefix_drop_name\",\"listenerFunc\":\"accessSheet\",\"type\":\"hidden\",\"defaultValue\":\"\",\"affects\":[]},\"attr_prefix_drop_data\":{\"name\":\"prefix_drop_data\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_prefix_drop_category\":{\"name\":\"prefix_drop_category\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_character_description\":{\"name\":\"character_description\",\"type\":\"span\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_image\":{\"name\":\"my_image\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_attribute_backed_span\":{\"calculation\":\"calculateAttribute\",\"name\":\"attribute_backed_span\",\"type\":\"span\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_attribute\":{\"affects\":[\"other_attribute\"],\"name\":\"my_attribute\",\"listener\":\"change:my_attribute\",\"listenerFunc\":\"accessSheet\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[]},\"attr_my_checkbox\":{\"name\":\"my_checkbox\",\"type\":\"checkbox\",\"defaultValue\":0,\"triggeredFuncs\":[],\"affects\":[]},\"attr_collapse\":{\"name\":\"collapse\",\"type\":\"checkbox\",\"defaultValue\":0,\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_radio\":{\"name\":\"my_radio\",\"type\":\"radio\",\"defaultValue\":1,\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_number\":{\"affects\":[\"other_attribute\"],\"name\":\"my_number\",\"listener\":\"change:my_number\",\"listenerFunc\":\"accessSheet\",\"type\":\"number\",\"defaultValue\":0,\"triggeredFuncs\":[]},\"attr_my_range\":{\"name\":\"my_range\",\"type\":\"range\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_hidden_attribute\":{\"triggeredFuncs\":[\"someFunction\"],\"name\":\"my_hidden_attribute\",\"listener\":\"change:my_hidden_attribute\",\"listenerFunc\":\"accessSheet\",\"type\":\"hidden\",\"defaultValue\":\"\",\"affects\":[]},\"attr_my_textarea\":{\"affects\":[\"an_attribute\"],\"name\":\"my_textarea\",\"listener\":\"change:my_textarea\",\"listenerFunc\":\"accessSheet\",\"defaultValue\":\"\",\"triggeredFuncs\":[]},\"attr_my_select\":{\"name\":\"my_select\",\"type\":\"select\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[\"some_attribute\"],\"listener\":\"change:my_select\",\"listenerFunc\":\"accessSheet\"},\"fieldset_repeating_fieldset\":{\"triggeredFuncs\":[\"doWhenRemoved\"],\"name\":\"repeating_fieldset\",\"listener\":\"remove:repeating_fieldset\",\"listenerFunc\":\"accessSheet\",\"type\":\"fieldset\"},\"attr_repeating_fieldset_$X_name\":{\"name\":\"repeating_fieldset_$X_name\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"act_add-undefined\":{\"listenerFunc\":\"addItem\",\"name\":\"add-undefined\",\"listener\":\"clicked:add-undefined\",\"type\":\"action\"},\"act_add-fieldset\":{\"listenerFunc\":\"sectionInteract\",\"name\":\"add-fieldset\",\"listener\":\"clicked:add-fieldset\",\"type\":\"action\"},\"attr_repeating_fieldset_$X_display_state\":{\"name\":\"repeating_fieldset_$X_display_state\",\"type\":\"radio\",\"defaultValue\":\"short-display\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_repeating_fieldset_$X_collapse\":{\"triggeredFuncs\":[\"collapseSection\"],\"name\":\"repeating_fieldset_$X_collapse\",\"listener\":\"change:repeating_fieldset:collapse\",\"listenerFunc\":\"accessSheet\",\"type\":\"checkbox\",\"defaultValue\":0,\"affects\":[]},\"attr_strength\":{\"affects\":[\"athletics\"],\"name\":\"strength\",\"listener\":\"change:strength\",\"listenerFunc\":\"accessSheet\",\"type\":\"number\",\"defaultValue\":10,\"triggeredFuncs\":[]},\"act_strength-action\":{\"listenerFunc\":\"initiateRoll\",\"name\":\"strength-action\",\"listener\":\"clicked:strength-action\",\"type\":\"action\"},\"attr_strength_action\":{\"name\":\"strength_action\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_whisper\":{\"name\":\"whisper\",\"type\":\"select\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]}};\n\nkFuncs.cascades = cascades;\nconst repeatingSectionDetails = [{\"section\":\"repeating_fieldset\",\"fields\":[\"name\",\"display_state\",\"collapse\"]}];\n\nkFuncs.repeatingSectionDetails = repeatingSectionDetails;\nconst persistentTabs = [];\n\nkFuncs.persistentTabs = persistentTabs;\n/**\n * The K-scaffold provides several variables to allow your scripts to tap into its information flow.\n * @namespace Sheetworkers.Variables\n */\n/**\n * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`\n * @memberof Variables\n * @var\n * @type {string}\n */\nlet sheetName = 'kScaffold Powered Sheet';\nkFuncs.sheetName = sheetName;\n/**\n\t* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`\n * @memberof Variables\n\t* @var\n\t* @type {number}\n\t*/\nlet version = 0;\nkFuncs.version = version;\n/**\n\t* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.\n * @memberof Variables\n\t* @var\n\t* @type {boolean}\n\t*/\nlet debugMode = false;\nkFuncs.debugMode = debugMode;\nconst funcs = {};\nkFuncs.funcs = funcs;\nconst updateHandlers = {};\nconst openHandlers = {};\nconst initialSetups = {};\nconst allHandlers = {};\nconst addFuncs = {};\n\nconst kscaffoldJSVersion = '1.0.0';\nconst kscaffoldPUGVersion = '1.0.0';\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.\n * @namespace Sheetworkers.Utilities\n * @alias Utilities\n */\n/**\n * Replaces problem characters to use a string as a regex\n * @memberof Utilities\n * @param {string} text - The text to replace characters in\n * @returns {string}\n * @example\n * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\n * console.log(textForRegex);// =>\n     \"\\.some thing\\[with characters\\]\"\n */\nconst sanitizeForRegex = function(text){\n  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');\n};\nkFuncs.sanitizeForRegex = sanitizeForRegex;\n\n/**\n * Converts a value to a number, it\\'s default value, or `0` if no default value passed.\n * @memberof Utilities\n * @param {string|number} val - Value to convert to a number\n * @param {number} def - The default value, uses 0 if not passed\n * @returns {number|undefined}\n * @example\n * const num = k.value('100');\n * console.log(num);// =>\n       100\n */\nconst value = function(val,def){\n  const convertVal = +val;\n  if(def !== undefined && isNaN(def)){\n    throw(`K-scaffold Error: invalid default for value(). Default: ${def}`);\n  }\n  return convertVal === 0 ?\n    convertVal :\n    (+val||def||0);\n};\nkFuncs.value = value;\n\n/**\n * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.\n * @memberof Utilities\n * @param {string} string - The string to parse\n * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute\n * @returns {string[]}\n * @example\n * //Extract info from a full repeating name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\n * console.log(section);// =>\n         \"repeating_equipment\"\n * console.log(rowID);// =>\n           \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n             \"name\"\n * \n * //Extract info from just a row name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\n * console.log(section);// =>\n               \"repeating_equipment\"\n * console.log(rowID);// =>\n                 \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n                   undefined\n */\nconst parseRepeatName = function(string){\n  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);\n  match.shift();\n  return match;\n};\nkFuncs.parseRepeatName = parseRepeatName;\n\n/**\n * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n * \n * Aliases: `k.parseClickTrigger`\n * @memberof Utilities\n * @param {string} string The triggerName property of the\n * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`\n * @returns {string[]}\n * @example\n * //Parse a non repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\n * console.log(section);// =>\n                     undefined\n * console.log(rowID);// =>\n                       undefined\n * console.log(attrName);// =>\n                         \"some-button\"\n * \n * //Parse a repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                           \"repeating_attack\"\n * console.log(rowID);// =>\n                             \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                               \"some-button\"\n * \n * //Parse a repeating name\n * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                                 \"repeating_attack\"\n * console.log(rowID);// =>\n                                   \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                                     \"some-button\"\n */\nconst parseTriggerName = function(string){\n  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);\n  match.shift();\n  return match;\n};\nkFuncs.parseTriggerName = parseTriggerName;\nconst parseClickTrigger = parseTriggerName;\nkFuncs.parseClickTrigger = parseClickTrigger;\n\n/**\n * Parses out the attribute name from the htmlattribute name.\n * @memberof Utilities\n * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).\n * @returns {string}\n * @example\n * //Parse a name\n * const attrName = k.parseHtmlName('attr_attribute_1');\n * console.log(attrName);// =>\n                                       \"attribute_1\"\n */\nconst parseHTMLName = function(string){\n  let match = string.match(/(?:attr|act|roll)_(.+)/);\n  match.shift();\n  return match[0];\n};\nkFuncs.parseHTMLName = parseHTMLName;\n\n/**\n * Capitalize each word in a string\n * @memberof Utilities\n * @param {string} string - The string to capitalize\n * @returns {string}\n * @example\n * const capitalized = k.capitalize('a word');\n * console.log(capitalized);// =>\n                                         \"A Word\"\n */\nconst capitalize = function(string){\n  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>\n                                          letter.toUpperCase());\n};\nkFuncs.capitalize = capitalize;\n\n/**\n * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).\n * @memberof Utilities\n * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.\n * @returns {Promise} - Resolves to the selected value from the roll query\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\n *  console.log(queryResult);//=>\n                                             \"Option 1\" or \"Option 2\" depending on what the user selects\n * \n *  //Get free form input from the user\n *  const freeResult = await extractQueryResult('Prompt Text Here');\n *  consoel.log(freeResult);// =>\n                                               Whatever the user entered\n * }\n */\nconst extractQueryResult = async function(query){\n\tdebug('entering extractQueryResult');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=?{${query}}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.extractQueryResult = extractQueryResult;\n\n/**\n * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.\n * @memberof Utilities\n * @param {string|number} [value] - The value to return. Optional.\n * @returns {Promise} - Resolves to the value passed to the function\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await pseudoQuery('a value');\n *  console.log(queryResult);//=>\n                                                 \"a value\"\n * }\n */\nconst pseudoQuery = async function(value){\n\tdebug('entering pseudoQuery');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=${value}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.pseudoQuery = pseudoQuery;\n\n/**\n * An alias for console.log.\n * @memberof Utilities\n * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.\n */\nconst log = function(msg){\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} log| ${msg}`,\"background-color:#159ccf\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                  {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} log| ${m}: ${msg[m]}`,\"background-color:#159ccf\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} log| ${typeof msg[m]} ${m}`,\"background-color:#159ccf\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.log = log;\n\n/**\n * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.\n * @memberof Utilities\n * @param {any} msg - 'See {@link k.log}\n * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.\n * @returns {void}\n */\nconst debug = function(msg,force){\n  console.warn('kFuncs.version',kFuncs.version);\n  if(!kFuncs.debugMode && !force && kFuncs.version >\n                                                     0) return;\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} DEBUG| ${msg}`,\"background-color:tan;color:red;\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                      {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${m}: ${msg[m]}`,\"background-color:tan;color:red;\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${typeof msg[m]} ${m}`,\"background-color:tan;color:red;font-weight:bold;\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.debug = debug;\n\n/**\n * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.\n * @memberof Utilities\n * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.\n * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.\n */\nconst orderSections = function(attributes,sections){\n  Object.keys(sections).forEach((section)=>\n                                                        {\n    attributes.attributes[`_reporder_${section}`] = commaArray(attributes[`_reporder_${section}`]);\n    orderSection(attributes.attributes[`_reporder_${section}`],sections[section]);\n  });\n};\nkFuncs.orderSections = orderSections;\n\n/**\n * Orders a single ID array.\n * @memberof Utilities\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\n * @param {string[]} IDs - Array of IDs to be ordered.\n */\nconst orderSection = function(repOrder,IDs=[]){\n  IDs.sort((a,b)=>\n                                                          {\n    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());\n  });\n};\nkFuncs.orderSection = orderSection;\n\n/**\n * Splits a comma delimited string into an array\n * @memberof Utilities\n * @param {string} string - The string to split.\n * @returns {array} - The string segments of the comma delimited list.\n */\nconst commaArray = function(string=''){\n  return string.toLowerCase().split(/\\s*,\\s*/);\n};\nkFuncs.commaArray = commaArray;\n\n// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.\nconst RE = {\n  chars: {\n      '\"': '%quot;',\n      ',': '%comma;',\n      ':': '%colon;',\n      '}': '%rcub;',\n      '{': '%lcub;',\n  },\n  escape(data) {\n    return typeof data === 'object' ?\n      `KDATA${btoa(JSON.stringify(data))}` :\n      `KSTRING${btoa(data)}`;\n  },\n  unescape(string) {\n    const isData = typeof string === 'string' &&\n      (\n        string.startsWith('KDATA') ||\n        string.startsWith('KSTRING')\n      );\n    return isData ?\n      (\n        string.startsWith('KDATA') ?\n          JSON.parse(atob(string.replace(/^KDATA/,''))) :\n          atob(string.replace(/^KSTRING/,''))\n      ) :\n      string;\n  }\n};\n\n/**\n * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.\n * @function\n * @param {string|object|any[]} data - The data that you want to Base64 encode\n * @returns {string} - The encoded data\n * @memberof! Utilities\n */\nconst escape = RE.escape;\n/**\n * Decodes Base64 encoded strings that were created by the K-scaffold\n * @function\n * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.\n * @returns {string|object|any[]}\n * @memberof! Utilities\n */\nconst unescape = RE.unescape;\n\nObject.assign(kFuncs,{escape,unescape});/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n\n//# Attribute Obj Proxy handler\nconst createAttrProxy = function(attrs){\n  //creates a proxy for the attributes object so that values can be worked with more easily.\n  const getCascObj = function(event,casc){\n    const eventName = event.triggerName || event.sourceAttribute;\n    let typePrefix = eventName.startsWith('clicked:') ?\n      'act_' :\n      event.removedInfo ?\n      'fieldset_' :\n      'attr_';\n    let cascName = `${typePrefix}${eventName.replace(/(?:removed|clicked):/,'')}`;\n    let cascObj = casc[cascName];\n    k.debug({[cascName]:cascObj});\n    if(event && cascObj){\n      if(event.previousValue){\n        cascObj.previousValue = event.previousValue;\n      }else if(event.originalRollId){\n        cascObj.originalRollId = event.originalRollId;\n        cascObj.rollData = RE.unescape(event.originalRollId);\n      }\n    }\n    return cascObj || {};\n  };\n  \n  const triggerFunctions = function(obj,attributes,sections,casc){\n    if(obj.triggeredFuncs && obj.triggeredFuncs.length){\n      debug(`triggering functions for ${obj.name}`);\n      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>\n                                                            funcs[func] ? \n        funcs[func]({trigger:obj,attributes,sections,casc}) :\n        debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));\n    }\n  };\n  \n  const initialFunction = function(obj,attributes,sections){\n    if(obj.initialFunc){\n      debug(`initial functions for ${obj.name}`);\n      funcs[obj.initialFunc] ?\n        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :\n        debug(`!!!Warning!!! no function named ${obj.initialFunc} found. Initial function not called for ${obj.name}`,true);\n    }\n  };\n  const alwaysFunctions = function(trigger,attributes,sections,casc){\n    Object.values(allHandlers).forEach((handler)=>\n                                                              {\n      handler({trigger,attributes,sections,casc});\n    });\n  };\n  const processChange = function({event,trigger,attributes,sections,casc}){\n    if(event && !trigger){\n      debug(`${event.sourceAttribute} change detected. No trigger found`);\n      return;\n    }\n    if(!attributes || !sections || !casc){\n      debug(`!!! Insufficient arguments || attributes >\n                                                                 ${!!attributes} | sections >\n                                                                   ${!!sections} | casc >\n                                                                     ${!!casc} !!!`);\n      return;\n    }\n    debug({trigger});\n    if(event){\n      debug('checking for initial & always functions');\n      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.\n      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user\n    }\n    if(trigger){\n      debug(`processing ${trigger.name}`);\n      triggerFunctions(trigger,attributes,sections,casc);\n      if(!event && trigger.calculation && funcs[trigger.calculation]){\n        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});\n      }else if(trigger.calculation && !funcs[trigger.calculation]){\n        debug(`K-Scaffold Error: No function named ${trigger.calculation} found`);\n      }\n      if(Array.isArray(trigger.affects)){\n        attributes.queue.push(...trigger.affects);\n      }\n    }\n    attributes.set({attributes,sections,casc});\n  };\n  const attrTarget = {\n    updates:{},\n    attributes:{...attrs},\n    repOrders:{},\n    queue: [],\n    casc:{},\n    alwaysFunctions,\n    processChange,\n    triggerFunctions,\n    initialFunction,\n    getCascObj\n  };\n  const attrHandler = {\n    get:function(obj,prop){//gets the most value of the attribute.\n      //If it is a repeating order, returns the array, otherwise returns the update value or the original value\n      if(prop === 'set'){\n        return function(){\n          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};\n          if(attributes && attributes.queue.length && sections && casc){\n            let triggerName = attributes.queue.shift();\n            let trigger = getCascObj({sourceAttribute:triggerName},casc);\n            attributes.processChange({trigger,attributes,sections,casc});\n          }else{\n            debug({updates:obj.updates});\n            let trueCallback = Object.keys(obj.repOrders).length ?\n              function(){\n                Object.entries(obj.repOrders).forEach(([section,order])=>\n                                                                      {\n                  _setSectionOrder(section,order,)\n                });\n                callback && callback();\n              }:\n              callback;\n            Object.keys(obj.updates).forEach((key)=>\n                                                                        obj.attributes[key] = obj.updates[key]);\n            const update = obj.updates;\n            obj.updates = {};\n            set(update,vocal,trueCallback);\n          }\n        }\n      }else if(Object.keys(obj).some(key=>\n                                                                          key===prop)){ \n        return Reflect.get(...arguments)\n      }else{\n        let retValue;\n        switch(true){\n          case obj.repOrders.hasOwnProperty(prop):\n            retValue = obj.repOrders[prop];\n            break;\n          case obj.updates.hasOwnProperty(prop):\n            retValue = obj.updates[prop];\n            break;\n          default:\n            retValue = obj.attributes[prop];\n            break;\n        }\n        let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}`;\n        let numRetVal = +retValue;\n        if(!Number.isNaN(numRetVal) && retValue !== ''){\n          retValue = numRetVal;\n        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){\n          retValue = cascades[cascRef].defaultValue;\n        }\n        return retValue;\n      }\n    },\n    set:function(obj,prop,value){\n      //Sets the value. Also verifies that the value is a valid attribute value\n      //e.g. not undefined, null, or NaN\n      if(value || value===0 || value===''){\n        if(/reporder|^repeating_[^_]+$/.test(prop)){\n          let section = prop.replace(/_reporder_/,'');\n          obj.repOrders[section] = value;\n        }else if(`${obj.attributes}` !== `${value}` || \n          (obj.updates[prop] && `${obj.updates}` !== `${value}`)\n        ){\n          obj.updates[prop] = value;\n        }\n      }else{\n        debug(`!!!Warning: Attempted to set ${prop} to an invalid value:${value}; value not stored!!!`);\n      }\n      return true;\n    },\n    deleteProperty(obj,prop){\n      //removes the property from the original attributes, updates, and the reporders\n      Object.keys(obj).forEach((key)=>\n                                                                            {\n        delete obj[key][prop.toLowerCase()];\n      });\n    }\n  };\n  return new Proxy(attrTarget,attrHandler);\n};\n\n/**\n * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.\n * @memberof Utilities\n * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.\n * @param {object} optionsObj - Object that contains options to use for this registration.\n * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.\n * @returns {boolean} - True if the registration succeeded, false if it failed.\n * @example\n * //Basic Registration\n * const myFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({myFunc});\n * \n * //Register a function to run on sheet open\n * const openFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({openFunc},{type:['opener']})\n * \n * //Register a function to run on all events\n * const allFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({allFunc},{type:['all']})\n */\nconst registerFuncs = function(funcObj,optionsObj = {}){\n  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){\n    debug(`!!!! K-scaffold error: Improper arguments to register functions !!!!`);\n    return false;\n  }\n  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];\n  const typeSwitch = {\n    'opener':openHandlers,\n    'updater':updateHandlers,\n    'new':initialSetups,\n    'all':allHandlers,\n    'default':funcs\n  };\n  let setState;\n  Object.entries(funcObj).map(([prop,value])=>\n                                                                              {\n    typeArr.forEach((type)=>\n                                                                                {\n      if(typeSwitch[type][prop]){\n        debug(`!!! Duplicate function name for ${prop} as ${type}!!!`);\n        setState = false;\n      }else if(typeof value === 'function'){\n        typeSwitch[type][prop] = value;\n        setState = setState !== false ? true : false;\n      }else{\n        debug(`!!! K-scaffold error: Function registration requires a function. Invalid value to register as ${type} !!!`);\n        setState = false;\n      }\n    });\n  });\n  return setState;\n};\nkFuncs.registerFuncs = registerFuncs;\n\n/**\n * Function that sets up the action calls used in the roller mixin.\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n * @param {object[]} sections - All the repeating section IDs\n */\nconst setActionCalls = function({attributes,sections}){\n  actionAttributes.forEach((base)=>\n                                                                                  {\n    let [section,,field] = k.parseTriggerName(base);\n    let fieldAction = field.replace(/_/g,'-');\n    if(section){\n      sections[section].forEach((id)=>\n                                                                                    {\n        attributes[`${section}_${id}_${field}`] = `%{${attributes.character_name}|${section}_${id}_${fieldAction}}`;\n      });\n    }else{\n      attributes[`${field}`] = `%{${attributes.character_name}|${fieldAction}}`;\n    }\n  });\n};\nfuncs.setActionCalls = setActionCalls;\n\n/**\n * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.\n * @memberof Sheetworkers\n * @param {string} funcName - The name of the function to invoke.\n * @param {...any} args - The arguments to call the function with.\n * @returns {function|null}\n * @example\n * //Call myFunc with two arguments\n * k.callFunc('myFunc','an argument','another argument');\n */\nconst callFunc = function(funcName,...args){\n  if(funcs[funcName]){\n    debug(`calling ${funcName}`);\n    return funcs[funcName](...args);\n  }else{\n    debug(`Invalid function name: ${funcName}`);\n    return null;\n  }\n};\nkFuncs.callFunc = callFunc;/**@namespace Sheetworkers */\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n//Sheet Updaters and styling functions\nconst updateSheet = function(){\n  log('updating sheet');\n  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>\n                                                                                      {\n    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;\n    debug({sheet_version:attributes.sheet_version});\n    if(!attributes.sheet_version){\n      Object.entries(initialSetups).forEach(([funcName,handler])=>\n                                                                                        {\n        if(typeof funcs[funcName] === 'function'){\n          debug(`running ${funcName}`);\n          funcs[funcName]({attributes,sections,casc});\n        }else{\n          debug(`!!!Warning!!! no function named ${funcName} found. Initial sheet setup not performed.`);\n        }\n      });\n    }else{\n      Object.entries(updateHandlers).forEach(([ver,handler])=>\n                                                                                          {\n        if(attributes.sheet_version < +ver){\n          handler({attributes,sections,casc});\n        }\n      });\n    }\n    k.debug({openHandlers});\n    Object.entries(openHandlers).forEach(([funcName,func])=>\n                                                                                            {\n      if(typeof funcs[funcName] === 'function'){\n        debug(`running ${funcName}`);\n        funcs[funcName]({attributes,sections,casc});\n      }else{\n        debug(`!!!Warning!!! no function named ${funcName} found. Sheet open handling not performed.`);\n      }\n    });\n    setActionCalls({attributes,sections});\n    attributes.sheet_version = kFuncs.version;\n    log(`Sheet Update applied. Current Sheet Version ${kFuncs.version}`);\n    attributes.set();\n    log('Sheet ready for use');\n  }});\n};\n\nconst initialSetup = function(attributes,sections){\n  debug('Initial sheet setup');\n};\n\n/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof Sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */\nconst accessSheet = function(event){\n  debug({funcs:Object.keys(funcs)});\n  debug({event});\n  getAllAttrs({callback:(attributes,sections,casc)=>\n                                                                                              {\n    let trigger = attributes.getCascObj(event,casc);\n    attributes.processChange({event,trigger,attributes,sections,casc});\n  }});\n};\nfuncs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/*\nCascade Expansion functions\n*/\n//Expands the repeating section templates in cascades to reflect the rows actually available\nconst expandCascade = function(cascade,sections,attributes){\n  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.\n    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic\n      expandRepeating(memo,key,cascade,sections,attributes);\n    }else if(key){//for non repeating attributes do this logic\n      expandNormal(memo,key,cascade,sections);\n    }\n    return memo;\n  },{});\n};\n\nconst expandRepeating = function(memo,key,cascade,sections,attributes){\n  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>\n                                                                                                {\n    (sections[section]||[]).forEach((id)=>\n                                                                                                  {\n      memo[`${type}${section}_${id}_${field}`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids\n      memo[`${type}${section}_${id}_${field}`].name = `${section}_${id}_${field}`;\n      if(key.startsWith('attr_')){\n        memo[`${type}${section}_${id}_${field}`].affects = memo[`${type}${section}_${id}_${field}`].affects.reduce((m,affected)=>\n                                                                                                    {\n          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.\n            m.push(applyID(affected,id));\n          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section\n            addAllRows(affected,m,sections);\n          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array\n            m.push(affected);\n          }\n          return m;\n        },[]);\n      }\n    });\n  });\n};\n\nconst applyID = function(affected,id){\n  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,`$1${id}$2`);\n};\n\nconst expandNormal = function(memo,key,cascade,sections){\n  memo[key] = _.clone(cascade[key]);\n  if(key.startsWith('attr_')){\n    memo[key].affects = memo[key].affects || [];\n    memo[key].affects = memo[key].affects.reduce((m,a)=>\n                                                                                                      {\n      if(/^repeating/.test(a)){\n        addAllRows(a,m,sections);\n      }else{\n        m.push(a);\n      }\n      return m;\n    },[]);\n  }\n};\n\nconst addAllRows = function(affected,memo,sections){\n  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>\n                                                                                                        {\n    sections[section].forEach(id=>\n                                                                                                          memo.push(`${section}_${id}_${field}`));\n  });\n};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.\n * @namespace Sheetworkers.Sheetworker Aliases\n */\n/**\n * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.\n * @memberof Sheetworker Aliases\n * @name setSectionOrder\n * @param {string} section - The name of the section, with or without `repeating_`\n * @param {string[]} order - Array of ids describing the desired order of the section.\n * @returns {void}\n * @example\n * //Set the order of a repeating_weapon section\n * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);\n * //Can also specify the section name without the repeating_ prefix\n * k.setSectionOrder('equipment',['id1','id2','id3']);\n */\nconst _setSectionOrder = function(section,order){\n  let trueSection = section.replace(/repeating_/,'');\n  setSectionOrder(trueSection,order);\n};\nkFuncs.setSectionOrder = _setSectionOrder;\n\n/**\n * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.\n * @memberof Sheetworker Aliases\n * @name removeRepeatingRow\n * @param {string} row - The row id to be removed\n * @param {attributesProxy} attributes - The attribute values currently in memory\n * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.\n * @returns {void}\n * @example\n * //Remove a repeating Row\n * k.getAllAttrs({\n *  callback:(attributes,sections)=>\n                                                                                                            {\n *    const rowID = sections.repeating_equipment[0];\n *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\n *    console.log(sections.repeating_equipment); // =>\n                                                                                                               rowID no longer exists in the array.\n *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // =>\n                                                                                                                 undefined\n *  }\n * })\n */\nconst _removeRepeatingRow = function(row,attributes,sections){\n  debug(`removing ${row}`);\n  Object.keys(attributes.attributes).forEach((key)=>\n                                                                                                                  {\n    if(key.startsWith(row)){\n      delete attributes[key];\n    }\n  });\n  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');\n  sections[section] = sections[section].filter((id)=>\n                                                                                                                    id!==rowID);\n  removeRepeatingRow(row);\n};\nkFuncs.removeRepeatingRow = _removeRepeatingRow;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.\n * @memberof Sheetworker Aliases\n * @name getAttrs\n * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.\n * @example\n * //Gets the attributes named in props.\n * k.getAttrs({\n *  props:['attribute_1','attribute_2'],\n *  callback:(attributes)=>\n                                                                                                                      {\n *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\n *    attributes.attribute_1 = 'new value';\n *    attributes.set();\n *  }\n * })\n */\nconst _getAttrs = function({props=baseGet,callback}){\n  getAttrs(props,(values)=>\n                                                                                                                        {\n    const attributes = createAttrProxy(values);\n    callback(attributes);\n  });\n};\nkFuncs.getAttrs = _getAttrs;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.\n * @memberof Sheetworker Aliases\n * @param {Object} args\n * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. \n * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.\n * @example\n * //Get every K-scaffold linked attribute on the sheet\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                          {\n *    //Work with the attributes as you please.\n *    attributes.some_attribute = 'a value';\n *    attributes.set();//Apply our change\n *  }\n * })\n */\nconst getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){\n  getSections(sectionDetails,(repeats,sections)=>\n                                                                                                                            {\n    getAttrs([...props,...repeats],(values)=>\n                                                                                                                              {\n      const attributes = createAttrProxy(values);\n      orderSections(attributes,sections);\n      const casc = expandCascade(cascades,sections,attributes);\n      callback(attributes,sections,casc);\n    })\n  });\n};\nkFuncs.getAllAttrs = getAllAttrs;\n\n/**\n * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.\n * @memberof Sheetworker Aliases\n * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.\n * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.\n * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section\n * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.\n * @example\n * // Get some section details\n * const sectionDetails = {\n *  {section:'repeating_equipment',fields:['name','weight','cost']},\n *  {section:'repeating_weapon',fields:['name','attack','damage']}\n * };\n * k.getSections(sectionDetails,(attributeNames,sections)=>\n                                                                                                                                {\n *  console.log(attributeNames);// =>\n                                                                                                                                   Array containing all row specific attribute names\n *  console.log(sections);// =>\n                                                                                                                                     Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\n * })\n */\nconst getSections = function(sectionDetails,callback){\n  let queueClone = _.clone(sectionDetails);\n  const worker = (queue,repeatAttrs=[],sections={})=>\n                                                                                                                                      {\n    let detail = queue.shift();\n    getSectionIDs(detail.section,(IDs)=>\n                                                                                                                                        {\n      sections[detail.section] = IDs;\n      IDs.forEach((id)=>\n                                                                                                                                          {\n        detail.fields.forEach((f)=>\n                                                                                                                                            {\n          repeatAttrs.push(`${detail.section}_${id}_${f}`);\n        });\n      });\n      repeatAttrs.push(`_reporder_${detail.section}`);\n      if(queue.length){\n        worker(queue,repeatAttrs,sections);\n      }else{\n        callback(repeatAttrs,sections);\n      }\n    });\n  };\n  if(!queueClone[0]){\n    callback([],{});\n  }else{\n    worker(queueClone);\n  }\n};\nkFuncs.getSections = getSections;\n\n// Sets the attributes while always calling with {silent:true}\n// Can be awaited to get the values returned from _setAttrs\n/**\n * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.\n * @memberof Sheetworker Aliases\n * @param {object} obj - The object containting attributes to set\n * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.\n * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.\n * @example\n * //Set some attributes silently\n * k.setAttrs({attribute_1:'new value'})\n * //Set some attributes and triggers listeners\n * k.setAttrs({attribute_1:'new value',true})\n * //Set some attributes and call a callback function\n * k.setAttrs({attribute_1:'new value'},null,()=>\n                                                                                                                                              {\n *  //Do something after the attribute is set\n * })\n */\nconst set = function(obj,vocal=false,callback){\n  setAttrs(obj,{silent:!vocal},callback);\n};\nkFuncs.setAttrs = set;\n\nconst generateCustomID = function(string){\n  if(!string.startsWith('-')){\n    string = `-${string}`;\n  }\n  rowID = generateRowID();\n  let re = new RegExp(`^.{${string.length}}`);\n  return `${string}${rowID.replace(re,'')}`;\n};\n\n\n/**\n * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.\n * @memberof Sheetworker Aliases\n * @name generateRowID\n * @param {sectionObj} sections\n * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.\n * @returns {string} - The created ID\n * @example\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                                                {\n *    //Create a new row ID\n *    const rowID = k.generateRowID('repeating_equipment',sections);\n *    console.log(rowID);// =>\n                                                                                                                                                   -p8rg908ug0suzz\n *    //Create a custom row ID\n *    const customID = k.generateRowID('repeating_equipment',sections,'custom');\n *    console.log(customID);// =>\n                                                                                                                                                     -custom98uadj89kj\n *  }\n * });\n */\nconst _generateRowID = function(section,sections,customText){\n  let rowID = customText ?\n    generateCustomID(customText) :\n    generateRowID();\n  section = section.match(/^repeating_[^_]+$/) ?\n    section :\n    `repeating_${section}`;\n  sections[section] = sections[section] || [];\n  sections[section].push(rowID);\n  return `${section}_${rowID}`;\n};\nkFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\nconst listeners = {};\n\n/**\n * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.\n * @memberof Variables\n * @var\n * @type {array}\n */\nconst baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>\n                                                                                                                                                      {\n  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){\n    memo.push(detailObj.name);\n  }\n  if(detailObj.listener){\n    listeners[detailObj.listener] = detailObj.listenerFunc;\n  }\n  return memo;\n},[]);\nkFuncs.baseGet = baseGet;\n\nconst registerEventHandlers = function(){\n  on('sheet:opened',updateSheet);\n  debug({funcKeys:Object.keys(funcs),funcs});\n  //Roll20 change and click listeners\n  Object.entries(listeners).forEach(([event,funcName])=>\n                                                                                                                                                        {\n    if(funcs[funcName]){\n      on(event,funcs[funcName]);\n    }else{\n      debug(`!!!Warning!!! no function named ${funcName} found. No listener created for ${event}`,true);\n    }\n  });\n  log(`kScaffold Loaded`);\n};\nsetTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.\n\n/**\n * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.\n * @memberof Sheetworkers\n * @param {object} event - The R20 event object\n */\nconst addItem = function(event){\n  let [,,section] = parseClickTrigger(event.triggerName);\n  section = section.replace(/add-/,'');\n  getAllAttrs({\n    callback:(attributes,sections,casc) =>\n                                                                                                                                                           {\n      let row = _generateRowID(section,sections);\n      debug({row});\n      attributes[`${row}_name`] = '';\n      setActionCalls({attributes,sections});\n      const trigger = cascades[`fieldset_repeating_${section}`];\n      if(trigger && trigger.addFuncs){\n        trigger.addFuncs.forEach((funcName) =>\n                                                                                                                                                             {\n          if(funcs[funcName]){\n            funcs[funcName]({attributes,sections,casc,trigger});\n          }\n        });\n      }\n      attributes.set({attributes,sections,casc});\n    }\n  });\n};\nfuncs.addItem = addItem;/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof Sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */\nconst kSwitchTab = function ({ trigger, attributes }) {\n  const [container, tab] = (\n    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||\n    []\n  ).slice(1);\n  $20(`[data-container-tab=\"${container}\"]`).removeClass('k-active-tab');\n  $20(`[data-container-tab=\"${container}\"][data-tab=\"${tab}\"]`).addClass('k-active-tab');\n  $20(`[data-container-button=\"${container}\"]`).removeClass('k-active-button');\n  $20(`[data-container-button=\"${container}\"][data-button=\"${tab}\"]`).addClass('k-active-button');\n  const tabInputName = `${container.replace(/\\-/g,'_')}_tab`;\n  if(persistentTabs.indexOf(tabInputName) >\n                                                                                                                                                               -1){\n    attributes[tabInputName] = trigger.name;\n  }\n}\n\nregisterFuncs({ kSwitchTab });\n\n/**\n * Sets persistent tabs to their last active state\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n */\nconst kTabOnOpen = function({trigger,attributes,sections,casc}){\n  if(typeof persistentTabs === 'undefined') return;\n  persistentTabs.forEach((tabInput) =>\n                                                                                                                                                                 {\n    const pseudoTrigger = {name:attributes[tabInput]};\n    kSwitchTab({trigger:pseudoTrigger, attributes});\n  });\n};\nregisterFuncs({ kTabOnOpen },{type:['opener']});\nreturn kFuncs;\n}());\nconst actionAttributes = [\"my_button_action\",\"strength_action\"];const inlineFieldsets = [\"fieldset\"];\n                                                                                                                                                              </script>"},{"meta":{"name":"module","description":"A mixin that works with {@link kscript}. It allows you to link your js directly in the pug file that the js is related to. The K-scaffold will then put the js in the final script tag.","arguments":null,"attributes":null,"example":"include ../_k.pug\n+module\n  |// include local js file here\n+kscript\n  |// local js file will be put here\n"},"file":"lib\\scripts\\_scripts.pug","source":"mixin module\r\n  if block\r\n    - k.scriptBlocks.push(block)\r","output":"<script type=\"text/worker\">\n  const k = (function(){\nconst kFuncs = {};\nconst cascades = ;\n\nkFuncs.cascades = cascades;\nconst repeatingSectionDetails = ;\n\nkFuncs.repeatingSectionDetails = repeatingSectionDetails;\nconst persistentTabs = ;\n\nkFuncs.persistentTabs = persistentTabs;\n/**\n * The K-scaffold provides several variables to allow your scripts to tap into its information flow.\n * @namespace Sheetworkers.Variables\n */\n/**\n * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`\n * @memberof Variables\n * @var\n * @type {string}\n */\nlet sheetName = 'kScaffold Powered Sheet';\nkFuncs.sheetName = sheetName;\n/**\n\t* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`\n * @memberof Variables\n\t* @var\n\t* @type {number}\n\t*/\nlet version = 0;\nkFuncs.version = version;\n/**\n\t* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.\n * @memberof Variables\n\t* @var\n\t* @type {boolean}\n\t*/\nlet debugMode = false;\nkFuncs.debugMode = debugMode;\nconst funcs = {};\nkFuncs.funcs = funcs;\nconst updateHandlers = {};\nconst openHandlers = {};\nconst initialSetups = {};\nconst allHandlers = {};\nconst addFuncs = {};\n\nconst kscaffoldJSVersion = '1.0.0';\nconst kscaffoldPUGVersion = '1.0.0';\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.\n * @namespace Sheetworkers.Utilities\n * @alias Utilities\n */\n/**\n * Replaces problem characters to use a string as a regex\n * @memberof Utilities\n * @param {string} text - The text to replace characters in\n * @returns {string}\n * @example\n * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\n * console.log(textForRegex);// =>\n     \"\\.some thing\\[with characters\\]\"\n */\nconst sanitizeForRegex = function(text){\n  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');\n};\nkFuncs.sanitizeForRegex = sanitizeForRegex;\n\n/**\n * Converts a value to a number, it\\'s default value, or `0` if no default value passed.\n * @memberof Utilities\n * @param {string|number} val - Value to convert to a number\n * @param {number} def - The default value, uses 0 if not passed\n * @returns {number|undefined}\n * @example\n * const num = k.value('100');\n * console.log(num);// =>\n       100\n */\nconst value = function(val,def){\n  const convertVal = +val;\n  if(def !== undefined && isNaN(def)){\n    throw(`K-scaffold Error: invalid default for value(). Default: ${def}`);\n  }\n  return convertVal === 0 ?\n    convertVal :\n    (+val||def||0);\n};\nkFuncs.value = value;\n\n/**\n * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.\n * @memberof Utilities\n * @param {string} string - The string to parse\n * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute\n * @returns {string[]}\n * @example\n * //Extract info from a full repeating name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\n * console.log(section);// =>\n         \"repeating_equipment\"\n * console.log(rowID);// =>\n           \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n             \"name\"\n * \n * //Extract info from just a row name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\n * console.log(section);// =>\n               \"repeating_equipment\"\n * console.log(rowID);// =>\n                 \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n                   undefined\n */\nconst parseRepeatName = function(string){\n  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);\n  match.shift();\n  return match;\n};\nkFuncs.parseRepeatName = parseRepeatName;\n\n/**\n * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n * \n * Aliases: `k.parseClickTrigger`\n * @memberof Utilities\n * @param {string} string The triggerName property of the\n * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`\n * @returns {string[]}\n * @example\n * //Parse a non repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\n * console.log(section);// =>\n                     undefined\n * console.log(rowID);// =>\n                       undefined\n * console.log(attrName);// =>\n                         \"some-button\"\n * \n * //Parse a repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                           \"repeating_attack\"\n * console.log(rowID);// =>\n                             \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                               \"some-button\"\n * \n * //Parse a repeating name\n * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                                 \"repeating_attack\"\n * console.log(rowID);// =>\n                                   \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                                     \"some-button\"\n */\nconst parseTriggerName = function(string){\n  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);\n  match.shift();\n  return match;\n};\nkFuncs.parseTriggerName = parseTriggerName;\nconst parseClickTrigger = parseTriggerName;\nkFuncs.parseClickTrigger = parseClickTrigger;\n\n/**\n * Parses out the attribute name from the htmlattribute name.\n * @memberof Utilities\n * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).\n * @returns {string}\n * @example\n * //Parse a name\n * const attrName = k.parseHtmlName('attr_attribute_1');\n * console.log(attrName);// =>\n                                       \"attribute_1\"\n */\nconst parseHTMLName = function(string){\n  let match = string.match(/(?:attr|act|roll)_(.+)/);\n  match.shift();\n  return match[0];\n};\nkFuncs.parseHTMLName = parseHTMLName;\n\n/**\n * Capitalize each word in a string\n * @memberof Utilities\n * @param {string} string - The string to capitalize\n * @returns {string}\n * @example\n * const capitalized = k.capitalize('a word');\n * console.log(capitalized);// =>\n                                         \"A Word\"\n */\nconst capitalize = function(string){\n  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>\n                                          letter.toUpperCase());\n};\nkFuncs.capitalize = capitalize;\n\n/**\n * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).\n * @memberof Utilities\n * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.\n * @returns {Promise} - Resolves to the selected value from the roll query\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\n *  console.log(queryResult);//=>\n                                             \"Option 1\" or \"Option 2\" depending on what the user selects\n * \n *  //Get free form input from the user\n *  const freeResult = await extractQueryResult('Prompt Text Here');\n *  consoel.log(freeResult);// =>\n                                               Whatever the user entered\n * }\n */\nconst extractQueryResult = async function(query){\n\tdebug('entering extractQueryResult');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=?{${query}}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.extractQueryResult = extractQueryResult;\n\n/**\n * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.\n * @memberof Utilities\n * @param {string|number} [value] - The value to return. Optional.\n * @returns {Promise} - Resolves to the value passed to the function\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await pseudoQuery('a value');\n *  console.log(queryResult);//=>\n                                                 \"a value\"\n * }\n */\nconst pseudoQuery = async function(value){\n\tdebug('entering pseudoQuery');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=${value}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.pseudoQuery = pseudoQuery;\n\n/**\n * An alias for console.log.\n * @memberof Utilities\n * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.\n */\nconst log = function(msg){\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} log| ${msg}`,\"background-color:#159ccf\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                  {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} log| ${m}: ${msg[m]}`,\"background-color:#159ccf\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} log| ${typeof msg[m]} ${m}`,\"background-color:#159ccf\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.log = log;\n\n/**\n * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.\n * @memberof Utilities\n * @param {any} msg - 'See {@link k.log}\n * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.\n * @returns {void}\n */\nconst debug = function(msg,force){\n  console.warn('kFuncs.version',kFuncs.version);\n  if(!kFuncs.debugMode && !force && kFuncs.version >\n                                                     0) return;\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} DEBUG| ${msg}`,\"background-color:tan;color:red;\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                      {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${m}: ${msg[m]}`,\"background-color:tan;color:red;\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${typeof msg[m]} ${m}`,\"background-color:tan;color:red;font-weight:bold;\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.debug = debug;\n\n/**\n * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.\n * @memberof Utilities\n * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.\n * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.\n */\nconst orderSections = function(attributes,sections){\n  Object.keys(sections).forEach((section)=>\n                                                        {\n    attributes.attributes[`_reporder_${section}`] = commaArray(attributes[`_reporder_${section}`]);\n    orderSection(attributes.attributes[`_reporder_${section}`],sections[section]);\n  });\n};\nkFuncs.orderSections = orderSections;\n\n/**\n * Orders a single ID array.\n * @memberof Utilities\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\n * @param {string[]} IDs - Array of IDs to be ordered.\n */\nconst orderSection = function(repOrder,IDs=[]){\n  IDs.sort((a,b)=>\n                                                          {\n    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());\n  });\n};\nkFuncs.orderSection = orderSection;\n\n/**\n * Splits a comma delimited string into an array\n * @memberof Utilities\n * @param {string} string - The string to split.\n * @returns {array} - The string segments of the comma delimited list.\n */\nconst commaArray = function(string=''){\n  return string.toLowerCase().split(/\\s*,\\s*/);\n};\nkFuncs.commaArray = commaArray;\n\n// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.\nconst RE = {\n  chars: {\n      '\"': '%quot;',\n      ',': '%comma;',\n      ':': '%colon;',\n      '}': '%rcub;',\n      '{': '%lcub;',\n  },\n  escape(data) {\n    return typeof data === 'object' ?\n      `KDATA${btoa(JSON.stringify(data))}` :\n      `KSTRING${btoa(data)}`;\n  },\n  unescape(string) {\n    const isData = typeof string === 'string' &&\n      (\n        string.startsWith('KDATA') ||\n        string.startsWith('KSTRING')\n      );\n    return isData ?\n      (\n        string.startsWith('KDATA') ?\n          JSON.parse(atob(string.replace(/^KDATA/,''))) :\n          atob(string.replace(/^KSTRING/,''))\n      ) :\n      string;\n  }\n};\n\n/**\n * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.\n * @function\n * @param {string|object|any[]} data - The data that you want to Base64 encode\n * @returns {string} - The encoded data\n * @memberof! Utilities\n */\nconst escape = RE.escape;\n/**\n * Decodes Base64 encoded strings that were created by the K-scaffold\n * @function\n * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.\n * @returns {string|object|any[]}\n * @memberof! Utilities\n */\nconst unescape = RE.unescape;\n\nObject.assign(kFuncs,{escape,unescape});/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n\n//# Attribute Obj Proxy handler\nconst createAttrProxy = function(attrs){\n  //creates a proxy for the attributes object so that values can be worked with more easily.\n  const getCascObj = function(event,casc){\n    const eventName = event.triggerName || event.sourceAttribute;\n    let typePrefix = eventName.startsWith('clicked:') ?\n      'act_' :\n      event.removedInfo ?\n      'fieldset_' :\n      'attr_';\n    let cascName = `${typePrefix}${eventName.replace(/(?:removed|clicked):/,'')}`;\n    let cascObj = casc[cascName];\n    k.debug({[cascName]:cascObj});\n    if(event && cascObj){\n      if(event.previousValue){\n        cascObj.previousValue = event.previousValue;\n      }else if(event.originalRollId){\n        cascObj.originalRollId = event.originalRollId;\n        cascObj.rollData = RE.unescape(event.originalRollId);\n      }\n    }\n    return cascObj || {};\n  };\n  \n  const triggerFunctions = function(obj,attributes,sections,casc){\n    if(obj.triggeredFuncs && obj.triggeredFuncs.length){\n      debug(`triggering functions for ${obj.name}`);\n      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>\n                                                            funcs[func] ? \n        funcs[func]({trigger:obj,attributes,sections,casc}) :\n        debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));\n    }\n  };\n  \n  const initialFunction = function(obj,attributes,sections){\n    if(obj.initialFunc){\n      debug(`initial functions for ${obj.name}`);\n      funcs[obj.initialFunc] ?\n        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :\n        debug(`!!!Warning!!! no function named ${obj.initialFunc} found. Initial function not called for ${obj.name}`,true);\n    }\n  };\n  const alwaysFunctions = function(trigger,attributes,sections,casc){\n    Object.values(allHandlers).forEach((handler)=>\n                                                              {\n      handler({trigger,attributes,sections,casc});\n    });\n  };\n  const processChange = function({event,trigger,attributes,sections,casc}){\n    if(event && !trigger){\n      debug(`${event.sourceAttribute} change detected. No trigger found`);\n      return;\n    }\n    if(!attributes || !sections || !casc){\n      debug(`!!! Insufficient arguments || attributes >\n                                                                 ${!!attributes} | sections >\n                                                                   ${!!sections} | casc >\n                                                                     ${!!casc} !!!`);\n      return;\n    }\n    debug({trigger});\n    if(event){\n      debug('checking for initial & always functions');\n      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.\n      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user\n    }\n    if(trigger){\n      debug(`processing ${trigger.name}`);\n      triggerFunctions(trigger,attributes,sections,casc);\n      if(!event && trigger.calculation && funcs[trigger.calculation]){\n        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});\n      }else if(trigger.calculation && !funcs[trigger.calculation]){\n        debug(`K-Scaffold Error: No function named ${trigger.calculation} found`);\n      }\n      if(Array.isArray(trigger.affects)){\n        attributes.queue.push(...trigger.affects);\n      }\n    }\n    attributes.set({attributes,sections,casc});\n  };\n  const attrTarget = {\n    updates:{},\n    attributes:{...attrs},\n    repOrders:{},\n    queue: [],\n    casc:{},\n    alwaysFunctions,\n    processChange,\n    triggerFunctions,\n    initialFunction,\n    getCascObj\n  };\n  const attrHandler = {\n    get:function(obj,prop){//gets the most value of the attribute.\n      //If it is a repeating order, returns the array, otherwise returns the update value or the original value\n      if(prop === 'set'){\n        return function(){\n          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};\n          if(attributes && attributes.queue.length && sections && casc){\n            let triggerName = attributes.queue.shift();\n            let trigger = getCascObj({sourceAttribute:triggerName},casc);\n            attributes.processChange({trigger,attributes,sections,casc});\n          }else{\n            debug({updates:obj.updates});\n            let trueCallback = Object.keys(obj.repOrders).length ?\n              function(){\n                Object.entries(obj.repOrders).forEach(([section,order])=>\n                                                                      {\n                  _setSectionOrder(section,order,)\n                });\n                callback && callback();\n              }:\n              callback;\n            Object.keys(obj.updates).forEach((key)=>\n                                                                        obj.attributes[key] = obj.updates[key]);\n            const update = obj.updates;\n            obj.updates = {};\n            set(update,vocal,trueCallback);\n          }\n        }\n      }else if(Object.keys(obj).some(key=>\n                                                                          key===prop)){ \n        return Reflect.get(...arguments)\n      }else{\n        let retValue;\n        switch(true){\n          case obj.repOrders.hasOwnProperty(prop):\n            retValue = obj.repOrders[prop];\n            break;\n          case obj.updates.hasOwnProperty(prop):\n            retValue = obj.updates[prop];\n            break;\n          default:\n            retValue = obj.attributes[prop];\n            break;\n        }\n        let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}`;\n        let numRetVal = +retValue;\n        if(!Number.isNaN(numRetVal) && retValue !== ''){\n          retValue = numRetVal;\n        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){\n          retValue = cascades[cascRef].defaultValue;\n        }\n        return retValue;\n      }\n    },\n    set:function(obj,prop,value){\n      //Sets the value. Also verifies that the value is a valid attribute value\n      //e.g. not undefined, null, or NaN\n      if(value || value===0 || value===''){\n        if(/reporder|^repeating_[^_]+$/.test(prop)){\n          let section = prop.replace(/_reporder_/,'');\n          obj.repOrders[section] = value;\n        }else if(`${obj.attributes}` !== `${value}` || \n          (obj.updates[prop] && `${obj.updates}` !== `${value}`)\n        ){\n          obj.updates[prop] = value;\n        }\n      }else{\n        debug(`!!!Warning: Attempted to set ${prop} to an invalid value:${value}; value not stored!!!`);\n      }\n      return true;\n    },\n    deleteProperty(obj,prop){\n      //removes the property from the original attributes, updates, and the reporders\n      Object.keys(obj).forEach((key)=>\n                                                                            {\n        delete obj[key][prop.toLowerCase()];\n      });\n    }\n  };\n  return new Proxy(attrTarget,attrHandler);\n};\n\n/**\n * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.\n * @memberof Utilities\n * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.\n * @param {object} optionsObj - Object that contains options to use for this registration.\n * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.\n * @returns {boolean} - True if the registration succeeded, false if it failed.\n * @example\n * //Basic Registration\n * const myFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({myFunc});\n * \n * //Register a function to run on sheet open\n * const openFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({openFunc},{type:['opener']})\n * \n * //Register a function to run on all events\n * const allFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({allFunc},{type:['all']})\n */\nconst registerFuncs = function(funcObj,optionsObj = {}){\n  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){\n    debug(`!!!! K-scaffold error: Improper arguments to register functions !!!!`);\n    return false;\n  }\n  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];\n  const typeSwitch = {\n    'opener':openHandlers,\n    'updater':updateHandlers,\n    'new':initialSetups,\n    'all':allHandlers,\n    'default':funcs\n  };\n  let setState;\n  Object.entries(funcObj).map(([prop,value])=>\n                                                                              {\n    typeArr.forEach((type)=>\n                                                                                {\n      if(typeSwitch[type][prop]){\n        debug(`!!! Duplicate function name for ${prop} as ${type}!!!`);\n        setState = false;\n      }else if(typeof value === 'function'){\n        typeSwitch[type][prop] = value;\n        setState = setState !== false ? true : false;\n      }else{\n        debug(`!!! K-scaffold error: Function registration requires a function. Invalid value to register as ${type} !!!`);\n        setState = false;\n      }\n    });\n  });\n  return setState;\n};\nkFuncs.registerFuncs = registerFuncs;\n\n/**\n * Function that sets up the action calls used in the roller mixin.\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n * @param {object[]} sections - All the repeating section IDs\n */\nconst setActionCalls = function({attributes,sections}){\n  actionAttributes.forEach((base)=>\n                                                                                  {\n    let [section,,field] = k.parseTriggerName(base);\n    let fieldAction = field.replace(/_/g,'-');\n    if(section){\n      sections[section].forEach((id)=>\n                                                                                    {\n        attributes[`${section}_${id}_${field}`] = `%{${attributes.character_name}|${section}_${id}_${fieldAction}}`;\n      });\n    }else{\n      attributes[`${field}`] = `%{${attributes.character_name}|${fieldAction}}`;\n    }\n  });\n};\nfuncs.setActionCalls = setActionCalls;\n\n/**\n * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.\n * @memberof Sheetworkers\n * @param {string} funcName - The name of the function to invoke.\n * @param {...any} args - The arguments to call the function with.\n * @returns {function|null}\n * @example\n * //Call myFunc with two arguments\n * k.callFunc('myFunc','an argument','another argument');\n */\nconst callFunc = function(funcName,...args){\n  if(funcs[funcName]){\n    debug(`calling ${funcName}`);\n    return funcs[funcName](...args);\n  }else{\n    debug(`Invalid function name: ${funcName}`);\n    return null;\n  }\n};\nkFuncs.callFunc = callFunc;/**@namespace Sheetworkers */\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n//Sheet Updaters and styling functions\nconst updateSheet = function(){\n  log('updating sheet');\n  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>\n                                                                                      {\n    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;\n    debug({sheet_version:attributes.sheet_version});\n    if(!attributes.sheet_version){\n      Object.entries(initialSetups).forEach(([funcName,handler])=>\n                                                                                        {\n        if(typeof funcs[funcName] === 'function'){\n          debug(`running ${funcName}`);\n          funcs[funcName]({attributes,sections,casc});\n        }else{\n          debug(`!!!Warning!!! no function named ${funcName} found. Initial sheet setup not performed.`);\n        }\n      });\n    }else{\n      Object.entries(updateHandlers).forEach(([ver,handler])=>\n                                                                                          {\n        if(attributes.sheet_version < +ver){\n          handler({attributes,sections,casc});\n        }\n      });\n    }\n    k.debug({openHandlers});\n    Object.entries(openHandlers).forEach(([funcName,func])=>\n                                                                                            {\n      if(typeof funcs[funcName] === 'function'){\n        debug(`running ${funcName}`);\n        funcs[funcName]({attributes,sections,casc});\n      }else{\n        debug(`!!!Warning!!! no function named ${funcName} found. Sheet open handling not performed.`);\n      }\n    });\n    setActionCalls({attributes,sections});\n    attributes.sheet_version = kFuncs.version;\n    log(`Sheet Update applied. Current Sheet Version ${kFuncs.version}`);\n    attributes.set();\n    log('Sheet ready for use');\n  }});\n};\n\nconst initialSetup = function(attributes,sections){\n  debug('Initial sheet setup');\n};\n\n/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof Sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */\nconst accessSheet = function(event){\n  debug({funcs:Object.keys(funcs)});\n  debug({event});\n  getAllAttrs({callback:(attributes,sections,casc)=>\n                                                                                              {\n    let trigger = attributes.getCascObj(event,casc);\n    attributes.processChange({event,trigger,attributes,sections,casc});\n  }});\n};\nfuncs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/*\nCascade Expansion functions\n*/\n//Expands the repeating section templates in cascades to reflect the rows actually available\nconst expandCascade = function(cascade,sections,attributes){\n  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.\n    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic\n      expandRepeating(memo,key,cascade,sections,attributes);\n    }else if(key){//for non repeating attributes do this logic\n      expandNormal(memo,key,cascade,sections);\n    }\n    return memo;\n  },{});\n};\n\nconst expandRepeating = function(memo,key,cascade,sections,attributes){\n  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>\n                                                                                                {\n    (sections[section]||[]).forEach((id)=>\n                                                                                                  {\n      memo[`${type}${section}_${id}_${field}`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids\n      memo[`${type}${section}_${id}_${field}`].name = `${section}_${id}_${field}`;\n      if(key.startsWith('attr_')){\n        memo[`${type}${section}_${id}_${field}`].affects = memo[`${type}${section}_${id}_${field}`].affects.reduce((m,affected)=>\n                                                                                                    {\n          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.\n            m.push(applyID(affected,id));\n          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section\n            addAllRows(affected,m,sections);\n          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array\n            m.push(affected);\n          }\n          return m;\n        },[]);\n      }\n    });\n  });\n};\n\nconst applyID = function(affected,id){\n  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,`$1${id}$2`);\n};\n\nconst expandNormal = function(memo,key,cascade,sections){\n  memo[key] = _.clone(cascade[key]);\n  if(key.startsWith('attr_')){\n    memo[key].affects = memo[key].affects || [];\n    memo[key].affects = memo[key].affects.reduce((m,a)=>\n                                                                                                      {\n      if(/^repeating/.test(a)){\n        addAllRows(a,m,sections);\n      }else{\n        m.push(a);\n      }\n      return m;\n    },[]);\n  }\n};\n\nconst addAllRows = function(affected,memo,sections){\n  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>\n                                                                                                        {\n    sections[section].forEach(id=>\n                                                                                                          memo.push(`${section}_${id}_${field}`));\n  });\n};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.\n * @namespace Sheetworkers.Sheetworker Aliases\n */\n/**\n * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.\n * @memberof Sheetworker Aliases\n * @name setSectionOrder\n * @param {string} section - The name of the section, with or without `repeating_`\n * @param {string[]} order - Array of ids describing the desired order of the section.\n * @returns {void}\n * @example\n * //Set the order of a repeating_weapon section\n * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);\n * //Can also specify the section name without the repeating_ prefix\n * k.setSectionOrder('equipment',['id1','id2','id3']);\n */\nconst _setSectionOrder = function(section,order){\n  let trueSection = section.replace(/repeating_/,'');\n  setSectionOrder(trueSection,order);\n};\nkFuncs.setSectionOrder = _setSectionOrder;\n\n/**\n * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.\n * @memberof Sheetworker Aliases\n * @name removeRepeatingRow\n * @param {string} row - The row id to be removed\n * @param {attributesProxy} attributes - The attribute values currently in memory\n * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.\n * @returns {void}\n * @example\n * //Remove a repeating Row\n * k.getAllAttrs({\n *  callback:(attributes,sections)=>\n                                                                                                            {\n *    const rowID = sections.repeating_equipment[0];\n *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\n *    console.log(sections.repeating_equipment); // =>\n                                                                                                               rowID no longer exists in the array.\n *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // =>\n                                                                                                                 undefined\n *  }\n * })\n */\nconst _removeRepeatingRow = function(row,attributes,sections){\n  debug(`removing ${row}`);\n  Object.keys(attributes.attributes).forEach((key)=>\n                                                                                                                  {\n    if(key.startsWith(row)){\n      delete attributes[key];\n    }\n  });\n  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');\n  sections[section] = sections[section].filter((id)=>\n                                                                                                                    id!==rowID);\n  removeRepeatingRow(row);\n};\nkFuncs.removeRepeatingRow = _removeRepeatingRow;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.\n * @memberof Sheetworker Aliases\n * @name getAttrs\n * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.\n * @example\n * //Gets the attributes named in props.\n * k.getAttrs({\n *  props:['attribute_1','attribute_2'],\n *  callback:(attributes)=>\n                                                                                                                      {\n *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\n *    attributes.attribute_1 = 'new value';\n *    attributes.set();\n *  }\n * })\n */\nconst _getAttrs = function({props=baseGet,callback}){\n  getAttrs(props,(values)=>\n                                                                                                                        {\n    const attributes = createAttrProxy(values);\n    callback(attributes);\n  });\n};\nkFuncs.getAttrs = _getAttrs;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.\n * @memberof Sheetworker Aliases\n * @param {Object} args\n * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. \n * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.\n * @example\n * //Get every K-scaffold linked attribute on the sheet\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                          {\n *    //Work with the attributes as you please.\n *    attributes.some_attribute = 'a value';\n *    attributes.set();//Apply our change\n *  }\n * })\n */\nconst getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){\n  getSections(sectionDetails,(repeats,sections)=>\n                                                                                                                            {\n    getAttrs([...props,...repeats],(values)=>\n                                                                                                                              {\n      const attributes = createAttrProxy(values);\n      orderSections(attributes,sections);\n      const casc = expandCascade(cascades,sections,attributes);\n      callback(attributes,sections,casc);\n    })\n  });\n};\nkFuncs.getAllAttrs = getAllAttrs;\n\n/**\n * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.\n * @memberof Sheetworker Aliases\n * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.\n * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.\n * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section\n * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.\n * @example\n * // Get some section details\n * const sectionDetails = {\n *  {section:'repeating_equipment',fields:['name','weight','cost']},\n *  {section:'repeating_weapon',fields:['name','attack','damage']}\n * };\n * k.getSections(sectionDetails,(attributeNames,sections)=>\n                                                                                                                                {\n *  console.log(attributeNames);// =>\n                                                                                                                                   Array containing all row specific attribute names\n *  console.log(sections);// =>\n                                                                                                                                     Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\n * })\n */\nconst getSections = function(sectionDetails,callback){\n  let queueClone = _.clone(sectionDetails);\n  const worker = (queue,repeatAttrs=[],sections={})=>\n                                                                                                                                      {\n    let detail = queue.shift();\n    getSectionIDs(detail.section,(IDs)=>\n                                                                                                                                        {\n      sections[detail.section] = IDs;\n      IDs.forEach((id)=>\n                                                                                                                                          {\n        detail.fields.forEach((f)=>\n                                                                                                                                            {\n          repeatAttrs.push(`${detail.section}_${id}_${f}`);\n        });\n      });\n      repeatAttrs.push(`_reporder_${detail.section}`);\n      if(queue.length){\n        worker(queue,repeatAttrs,sections);\n      }else{\n        callback(repeatAttrs,sections);\n      }\n    });\n  };\n  if(!queueClone[0]){\n    callback([],{});\n  }else{\n    worker(queueClone);\n  }\n};\nkFuncs.getSections = getSections;\n\n// Sets the attributes while always calling with {silent:true}\n// Can be awaited to get the values returned from _setAttrs\n/**\n * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.\n * @memberof Sheetworker Aliases\n * @param {object} obj - The object containting attributes to set\n * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.\n * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.\n * @example\n * //Set some attributes silently\n * k.setAttrs({attribute_1:'new value'})\n * //Set some attributes and triggers listeners\n * k.setAttrs({attribute_1:'new value',true})\n * //Set some attributes and call a callback function\n * k.setAttrs({attribute_1:'new value'},null,()=>\n                                                                                                                                              {\n *  //Do something after the attribute is set\n * })\n */\nconst set = function(obj,vocal=false,callback){\n  setAttrs(obj,{silent:!vocal},callback);\n};\nkFuncs.setAttrs = set;\n\nconst generateCustomID = function(string){\n  if(!string.startsWith('-')){\n    string = `-${string}`;\n  }\n  rowID = generateRowID();\n  let re = new RegExp(`^.{${string.length}}`);\n  return `${string}${rowID.replace(re,'')}`;\n};\n\n\n/**\n * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.\n * @memberof Sheetworker Aliases\n * @name generateRowID\n * @param {sectionObj} sections\n * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.\n * @returns {string} - The created ID\n * @example\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                                                {\n *    //Create a new row ID\n *    const rowID = k.generateRowID('repeating_equipment',sections);\n *    console.log(rowID);// =>\n                                                                                                                                                   -p8rg908ug0suzz\n *    //Create a custom row ID\n *    const customID = k.generateRowID('repeating_equipment',sections,'custom');\n *    console.log(customID);// =>\n                                                                                                                                                     -custom98uadj89kj\n *  }\n * });\n */\nconst _generateRowID = function(section,sections,customText){\n  let rowID = customText ?\n    generateCustomID(customText) :\n    generateRowID();\n  section = section.match(/^repeating_[^_]+$/) ?\n    section :\n    `repeating_${section}`;\n  sections[section] = sections[section] || [];\n  sections[section].push(rowID);\n  return `${section}_${rowID}`;\n};\nkFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\nconst listeners = {};\n\n/**\n * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.\n * @memberof Variables\n * @var\n * @type {array}\n */\nconst baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>\n                                                                                                                                                      {\n  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){\n    memo.push(detailObj.name);\n  }\n  if(detailObj.listener){\n    listeners[detailObj.listener] = detailObj.listenerFunc;\n  }\n  return memo;\n},[]);\nkFuncs.baseGet = baseGet;\n\nconst registerEventHandlers = function(){\n  on('sheet:opened',updateSheet);\n  debug({funcKeys:Object.keys(funcs),funcs});\n  //Roll20 change and click listeners\n  Object.entries(listeners).forEach(([event,funcName])=>\n                                                                                                                                                        {\n    if(funcs[funcName]){\n      on(event,funcs[funcName]);\n    }else{\n      debug(`!!!Warning!!! no function named ${funcName} found. No listener created for ${event}`,true);\n    }\n  });\n  log(`kScaffold Loaded`);\n};\nsetTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.\n\n/**\n * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.\n * @memberof Sheetworkers\n * @param {object} event - The R20 event object\n */\nconst addItem = function(event){\n  let [,,section] = parseClickTrigger(event.triggerName);\n  section = section.replace(/add-/,'');\n  getAllAttrs({\n    callback:(attributes,sections,casc) =>\n                                                                                                                                                           {\n      let row = _generateRowID(section,sections);\n      debug({row});\n      attributes[`${row}_name`] = '';\n      setActionCalls({attributes,sections});\n      const trigger = cascades[`fieldset_repeating_${section}`];\n      if(trigger && trigger.addFuncs){\n        trigger.addFuncs.forEach((funcName) =>\n                                                                                                                                                             {\n          if(funcs[funcName]){\n            funcs[funcName]({attributes,sections,casc,trigger});\n          }\n        });\n      }\n      attributes.set({attributes,sections,casc});\n    }\n  });\n};\nfuncs.addItem = addItem;/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof Sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */\nconst kSwitchTab = function ({ trigger, attributes }) {\n  const [container, tab] = (\n    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||\n    []\n  ).slice(1);\n  $20(`[data-container-tab=\"${container}\"]`).removeClass('k-active-tab');\n  $20(`[data-container-tab=\"${container}\"][data-tab=\"${tab}\"]`).addClass('k-active-tab');\n  $20(`[data-container-button=\"${container}\"]`).removeClass('k-active-button');\n  $20(`[data-container-button=\"${container}\"][data-button=\"${tab}\"]`).addClass('k-active-button');\n  const tabInputName = `${container.replace(/\\-/g,'_')}_tab`;\n  if(persistentTabs.indexOf(tabInputName) >\n                                                                                                                                                               -1){\n    attributes[tabInputName] = trigger.name;\n  }\n}\n\nregisterFuncs({ kSwitchTab });\n\n/**\n * Sets persistent tabs to their last active state\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n */\nconst kTabOnOpen = function({trigger,attributes,sections,casc}){\n  if(typeof persistentTabs === 'undefined') return;\n  persistentTabs.forEach((tabInput) =>\n                                                                                                                                                                 {\n    const pseudoTrigger = {name:attributes[tabInput]};\n    kSwitchTab({trigger:pseudoTrigger, attributes});\n  });\n};\nregisterFuncs({ kTabOnOpen },{type:['opener']});\nreturn kFuncs;\n}());\nconst actionAttributes = [\"my_button_action\",\"strength_action\"];const inlineFieldsets = [\"fieldset\"];// local js file will be put here\n// include local js file here\n                                                                                                                                                              </script>"}];
export const js = [
{
"comment": "",
"meta": {
"range": [
6,
32
],
"filename": "errorHead.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000003",
"name": "colors",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "colors",
"longname": "colors",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
43,
260
],
"filename": "errorHead.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000009",
"name": "kErrorHead",
"type": "ArrowFunctionExpression"
},
"vars": {
"borderForString": "kErrorHead~borderForString",
"": null
}
},
"undocumented": true,
"name": "kErrorHead",
"longname": "kErrorHead",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
79,
151
],
"filename": "errorHead.js",
"lineno": 4,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000015",
"name": "borderForString",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "borderForString",
"longname": "kErrorHead~borderForString",
"kind": "constant",
"memberof": "kErrorHead",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
264,
291
],
"filename": "errorHead.js",
"lineno": 8,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000052",
"name": "module.exports",
"type": "Identifier",
"value": "kErrorHead",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
33
],
"filename": "getTemplate.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000060",
"name": "fs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fs",
"longname": "fs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
44,
219
],
"filename": "getTemplate.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000066",
"name": "getTemplate",
"type": "ArrowFunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "getTemplate",
"longname": "getTemplate",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
224,
252
],
"filename": "getTemplate.js",
"lineno": 8,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000090",
"name": "module.exports",
"type": "Identifier",
"value": "getTemplate",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "/**\r\n * The build functionality used by the CLI and API build interfaces.\r\n * @namespace Build\r\n */",
"meta": {
"filename": "index.js",
"lineno": 1,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {}
},
"description": "The build functionality used by the CLI and API build interfaces.",
"kind": "namespace",
"name": "Build",
"longname": "Build",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
107,
138
],
"filename": "index.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000098",
"name": "watchSheet",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "watchSheet",
"longname": "watchSheet",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
147,
187
],
"filename": "index.js",
"lineno": 6,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000104",
"name": "processSheet",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "processSheet",
"longname": "processSheet",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * Renders PUG and SCSS into HTML and CSS text\r\n * @memberof Build\r\n * @alias all\r\n * @param {string} source - The path to the directory containing your PUG and SCSS files\r\n * @param {string} destination - The path to the directory where you want your HTML and CSS files to be created\r\n * @param {object} [pugOptions] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:\r\n * @param {boolean} [pugOptions.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.\r\n * @param {object} [scssOptions = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.\r\n * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1.\r\n */",
"meta": {
"range": [
1500,
1866
],
"filename": "index.js",
"lineno": 19,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000110",
"name": "build",
"type": "ArrowFunctionExpression"
},
"vars": {
"undefined": null
}
},
"description": "Renders PUG and SCSS into HTML and CSS text",
"memberof": "Build",
"alias": "all",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The path to the directory containing your PUG and SCSS files",
"name": "source"
},
{
"type": {
"names": [
"string"
]
},
"description": "The path to the directory where you want your HTML and CSS files to be created",
"name": "destination"
},
{
"type": {
"names": [
"object"
]
},
"optional": true,
"description": "Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:",
"name": "pugOptions"
},
{
"type": {
"names": [
"boolean"
]
},
"optional": true,
"defaultvalue": true,
"description": "Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.",
"name": "pugOptions.suppressStack"
},
{
"type": {
"names": [
"object"
]
},
"optional": true,
"defaultvalue": "{}",
"description": "Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.",
"name": "scssOptions"
}
],
"returns": [
{
"type": {
"names": [
"Promise.<Array.<array>>"
]
},
"description": "- Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1."
}
],
"name": "all",
"longname": "all",
"kind": "function",
"async": true
},
{
"comment": "",
"meta": {
"range": [
1516,
1528
],
"filename": "index.js",
"lineno": 19,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000114",
"name": "source",
"type": "AssignmentPattern",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1529,
1540
],
"filename": "index.js",
"lineno": 19,
"columnno": 35,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000118",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1541,
1556
],
"filename": "index.js",
"lineno": 19,
"columnno": 47,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000120",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1557,
1588
],
"filename": "index.js",
"lineno": 19,
"columnno": 63,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000122",
"name": "pugOptions",
"type": "AssignmentPattern",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "pugOptions",
"longname": "pugOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1569,
1587
],
"filename": "index.js",
"lineno": 19,
"columnno": 75,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000126",
"name": "suppressStack",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "suppressStack",
"longname": "suppressStack",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1589,
1603
],
"filename": "index.js",
"lineno": 19,
"columnno": 95,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000128",
"name": "scssOptions",
"type": "AssignmentPattern",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "scssOptions",
"longname": "scssOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1604,
1615
],
"filename": "index.js",
"lineno": 19,
"columnno": 110,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000132",
"name": "watch",
"type": "AssignmentPattern",
"value": "watch"
}
},
"undocumented": true,
"name": "watch",
"longname": "watch",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1665,
1671
],
"filename": "index.js",
"lineno": 20,
"columnno": 41,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000144",
"name": "source",
"type": "Identifier",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1672,
1683
],
"filename": "index.js",
"lineno": 20,
"columnno": 48,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000146",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1684,
1699
],
"filename": "index.js",
"lineno": 20,
"columnno": 60,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000148",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1700,
1710
],
"filename": "index.js",
"lineno": 20,
"columnno": 76,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000150",
"name": "pugOptions",
"type": "Identifier",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "pugOptions",
"longname": "pugOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1711,
1722
],
"filename": "index.js",
"lineno": 20,
"columnno": 87,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000152",
"name": "scssOptions",
"type": "Identifier",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "scssOptions",
"longname": "scssOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1764,
1770
],
"filename": "index.js",
"lineno": 22,
"columnno": 23,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000161",
"name": "source",
"type": "Identifier",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1771,
1782
],
"filename": "index.js",
"lineno": 22,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000163",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1783,
1798
],
"filename": "index.js",
"lineno": 22,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000165",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1799,
1809
],
"filename": "index.js",
"lineno": 22,
"columnno": 58,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000167",
"name": "pugOptions",
"type": "Identifier",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "pugOptions",
"longname": "pugOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1810,
1821
],
"filename": "index.js",
"lineno": 22,
"columnno": 69,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000169",
"name": "scssOptions",
"type": "Identifier",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "scssOptions",
"longname": "scssOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1871,
1893
],
"filename": "index.js",
"lineno": 28,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000177",
"name": "module.exports",
"type": "Identifier",
"value": "build",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
32
],
"filename": "kStatus.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000185",
"name": "colors",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "colors",
"longname": "colors",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
43,
105
],
"filename": "kStatus.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000191",
"name": "kStatus",
"type": "ArrowFunctionExpression"
}
},
"undocumented": true,
"name": "kStatus",
"longname": "kStatus",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
109,
133
],
"filename": "kStatus.js",
"lineno": 7,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000208",
"name": "module.exports",
"type": "Identifier",
"value": "kStatus",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "/**\r\n * The local functions and variables that the K-scaffold provides for use in your pug.\r\n * @namespace Locals\r\n*/",
"meta": {
"filename": "index.js",
"lineno": 1,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {}
},
"description": "The local functions and variables that the K-scaffold provides for use in your pug.",
"kind": "namespace",
"name": "Locals",
"longname": "Locals",
"scope": "global"
},
{
"comment": "/**\r\n * Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.\r\n * @memberof Locals\r\n * @property {object[]} repeatingSectionDetails - Array of objects that describe each repeating section and the attributes contained in them.\r\n * @property {string[]} actionAttributes - Array of attribute names created by use of the `roller` mixin.\r\n * @property {object} cascades - Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.\r\n */",
"meta": {
"range": [
806,
821
],
"filename": "index.js",
"lineno": 12,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000216",
"name": "varObjects",
"type": "ObjectExpression",
"value": "{}"
}
},
"description": "Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.",
"memberof": "Locals",
"properties": [
{
"type": {
"names": [
"Array.<object>"
]
},
"description": "Array of objects that describe each repeating section and the attributes contained in them.",
"name": "repeatingSectionDetails"
},
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "Array of attribute names created by use of the `roller` mixin.",
"name": "actionAttributes"
},
{
"type": {
"names": [
"object"
]
},
"description": "Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.",
"name": "cascades"
}
],
"name": "varObjects",
"longname": "Locals.varObjects",
"kind": "constant",
"scope": "static",
"params": []
},
{
"comment": "/**\r\n * Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.\r\n * @memberof Locals\r\n * @property {boolean} scriptUsed - Boolean that tracks whether the kScript mixin has been called or not. Default `false`.\r\n * @property {string} repeatingPrefix - The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`\r\n * @property {boolean} repeatsIgnoreSystemPrefix - Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.\r\n * @property {string} systemPrefix - A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`\r\n */",
"meta": {
"range": [
1757,
1763
],
"filename": "index.js",
"lineno": 22,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000220",
"name": "k",
"type": "ObjectExpression",
"value": "{}"
}
},
"description": "Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.",
"memberof": "Locals",
"properties": [
{
"type": {
"names": [
"boolean"
]
},
"description": "Boolean that tracks whether the kScript mixin has been called or not. Default `false`.",
"name": "scriptUsed"
},
{
"type": {
"names": [
"string"
]
},
"description": "The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`",
"name": "repeatingPrefix"
},
{
"type": {
"names": [
"boolean"
]
},
"description": "Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.",
"name": "repeatsIgnoreSystemPrefix"
},
{
"type": {
"names": [
"string"
]
},
"description": "A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`",
"name": "systemPrefix"
}
],
"name": "k",
"longname": "Locals.k",
"kind": "constant",
"scope": "static",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1774,
2594
],
"filename": "index.js",
"lineno": 24,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000224",
"name": "resetObjs",
"type": "ArrowFunctionExpression"
},
"vars": {
"varTemplate": "resetObjs~varTemplate",
"kTemplate": "resetObjs~kTemplate",
"": null
}
},
"undocumented": true,
"name": "resetObjs",
"longname": "resetObjs",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1802,
2184
],
"filename": "index.js",
"lineno": 25,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000229",
"name": "varTemplate",
"type": "ObjectExpression",
"value": "{\"repeatingSectionDetails\":\"\",\"actionAttributes\":\"\",\"cascades\":\"\",\"persistentTabs\":\"\"}"
}
},
"undocumented": true,
"name": "varTemplate",
"longname": "resetObjs~varTemplate",
"kind": "constant",
"memberof": "resetObjs",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1823,
1849
],
"filename": "index.js",
"lineno": 26,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000232",
"name": "repeatingSectionDetails",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "repeatingSectionDetails",
"longname": "resetObjs~varTemplate.repeatingSectionDetails",
"kind": "member",
"memberof": "resetObjs~varTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1856,
1875
],
"filename": "index.js",
"lineno": 27,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000234",
"name": "actionAttributes",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "actionAttributes",
"longname": "resetObjs~varTemplate.actionAttributes",
"kind": "member",
"memberof": "resetObjs~varTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1882,
2155
],
"filename": "index.js",
"lineno": 28,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000236",
"name": "cascades",
"type": "ObjectExpression",
"value": "{\"attr_character_name\":\"\"}"
}
},
"undocumented": true,
"name": "cascades",
"longname": "resetObjs~varTemplate.cascades",
"kind": "member",
"memberof": "resetObjs~varTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1900,
2146
],
"filename": "index.js",
"lineno": 29,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000238",
"name": "attr_character_name",
"type": "ObjectExpression",
"value": "{\"name\":\"character_name\",\"type\":\"text\",\"defaultValue\":\"\",\"affects\":\"\",\"triggeredFuncs\":\"\",\"listenerFunc\":\"accessSheet\",\"listener\":\"change:character_name\"}"
}
},
"undocumented": true,
"name": "attr_character_name",
"longname": "resetObjs~varTemplate.cascades.attr_character_name",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1931,
1952
],
"filename": "index.js",
"lineno": 30,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000240",
"name": "name",
"type": "Literal",
"value": "character_name"
}
},
"undocumented": true,
"name": "name",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.name",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1963,
1974
],
"filename": "index.js",
"lineno": 31,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000242",
"name": "type",
"type": "Literal",
"value": "text"
}
},
"undocumented": true,
"name": "type",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.type",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1985,
2000
],
"filename": "index.js",
"lineno": 32,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000244",
"name": "defaultValue",
"type": "Literal",
"value": ""
}
},
"undocumented": true,
"name": "defaultValue",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.defaultValue",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2011,
2021
],
"filename": "index.js",
"lineno": 33,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000246",
"name": "affects",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "affects",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.affects",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2032,
2065
],
"filename": "index.js",
"lineno": 34,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000248",
"name": "triggeredFuncs",
"type": "ArrayExpression",
"value": "[\"setActionCalls\"]"
}
},
"undocumented": true,
"name": "triggeredFuncs",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.triggeredFuncs",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2076,
2102
],
"filename": "index.js",
"lineno": 35,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000251",
"name": "listenerFunc",
"type": "Literal",
"value": "accessSheet"
}
},
"undocumented": true,
"name": "listenerFunc",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.listenerFunc",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2113,
2145
],
"filename": "index.js",
"lineno": 36,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000253",
"name": "listener",
"type": "Literal",
"value": "change:character_name"
}
},
"undocumented": true,
"name": "listener",
"longname": "resetObjs~varTemplate.cascades.attr_character_name.listener",
"kind": "member",
"memberof": "resetObjs~varTemplate.cascades.attr_character_name",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2162,
2179
],
"filename": "index.js",
"lineno": 38,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000255",
"name": "persistentTabs",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "persistentTabs",
"longname": "resetObjs~varTemplate.persistentTabs",
"kind": "member",
"memberof": "resetObjs~varTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2195,
2343
],
"filename": "index.js",
"lineno": 40,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000258",
"name": "kTemplate",
"type": "ObjectExpression",
"value": "{\"scriptUsed\":false,\"repeatingPrefix\":\"\",\"repeatsIgnoreSystemPrefix\":false,\"systemPrefix\":\"\",\"scriptBlocks\":\"\"}"
}
},
"undocumented": true,
"name": "kTemplate",
"longname": "resetObjs~kTemplate",
"kind": "constant",
"memberof": "resetObjs",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2214,
2231
],
"filename": "index.js",
"lineno": 41,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000261",
"name": "scriptUsed",
"type": "Literal",
"value": false
}
},
"undocumented": true,
"name": "scriptUsed",
"longname": "resetObjs~kTemplate.scriptUsed",
"kind": "member",
"memberof": "resetObjs~kTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2238,
2256
],
"filename": "index.js",
"lineno": 42,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000263",
"name": "repeatingPrefix",
"type": "Literal",
"value": ""
}
},
"undocumented": true,
"name": "repeatingPrefix",
"longname": "resetObjs~kTemplate.repeatingPrefix",
"kind": "member",
"memberof": "resetObjs~kTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2263,
2294
],
"filename": "index.js",
"lineno": 43,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000265",
"name": "repeatsIgnoreSystemPrefix",
"type": "Literal",
"value": false
}
},
"undocumented": true,
"name": "repeatsIgnoreSystemPrefix",
"longname": "resetObjs~kTemplate.repeatsIgnoreSystemPrefix",
"kind": "member",
"memberof": "resetObjs~kTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2301,
2316
],
"filename": "index.js",
"lineno": 44,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000267",
"name": "systemPrefix",
"type": "Literal",
"value": ""
}
},
"undocumented": true,
"name": "systemPrefix",
"longname": "resetObjs~kTemplate.systemPrefix",
"kind": "member",
"memberof": "resetObjs~kTemplate",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2323,
2338
],
"filename": "index.js",
"lineno": 45,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000269",
"name": "scriptBlocks",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "scriptBlocks",
"longname": "resetObjs~kTemplate.scriptBlocks",
"kind": "member",
"memberof": "resetObjs~kTemplate",
"scope": "static"
},
{
"comment": "/**\r\n * checks that the kScript mixin is the final mixin used.\r\n */",
"meta": {
"range": [
2674,
2829
],
"filename": "index.js",
"lineno": 57,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000332",
"name": "checkKUse",
"type": "ArrowFunctionExpression"
}
},
"description": "checks that the kScript mixin is the final mixin used.",
"name": "checkKUse",
"longname": "checkKUse",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * Gets the current state of the system prefix\r\n * @returns {string}\r\n */",
"meta": {
"range": [
2922,
2966
],
"filename": "index.js",
"lineno": 67,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000346",
"name": "getSystemPrefix",
"type": "ArrowFunctionExpression"
}
},
"description": "Gets the current state of the system prefix",
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "getSystemPrefix",
"longname": "getSystemPrefix",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.\r\n * @param {string} val - The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.\r\n * @param {boolean} normalRepeating - Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.\r\n * @returns {string}\r\n */",
"meta": {
"range": [
3585,
3806
],
"filename": "index.js",
"lineno": 75,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000355",
"name": "setSystemPrefix",
"type": "ArrowFunctionExpression"
},
"vars": {
"k.repeatsIgnoreSystemPrefix": "Locals.k.repeatsIgnoreSystemPrefix",
"prevPrefix": "setSystemPrefix~prevPrefix",
"k.systemPrefix": "Locals.k.systemPrefix"
}
},
"description": "Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.",
"name": "val"
},
{
"type": {
"names": [
"boolean"
]
},
"description": "Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.",
"name": "normalRepeating",
"defaultvalue": false
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "setSystemPrefix",
"longname": "setSystemPrefix",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3641,
3686
],
"filename": "index.js",
"lineno": 76,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000364",
"name": "k.repeatsIgnoreSystemPrefix",
"type": "Identifier",
"value": "normalRepeating",
"paramnames": []
}
},
"undocumented": true,
"name": "repeatsIgnoreSystemPrefix",
"longname": "Locals.k.repeatsIgnoreSystemPrefix",
"kind": "member",
"memberof": "Locals.k",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3697,
3724
],
"filename": "index.js",
"lineno": 77,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000370",
"name": "prevPrefix",
"type": "MemberExpression",
"value": "k.systemPrefix"
}
},
"undocumented": true,
"name": "prevPrefix",
"longname": "setSystemPrefix~prevPrefix",
"kind": "constant",
"memberof": "setSystemPrefix",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3729,
3780
],
"filename": "index.js",
"lineno": 78,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000376",
"name": "k.systemPrefix",
"type": "ConditionalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "systemPrefix",
"longname": "Locals.k.systemPrefix",
"kind": "member",
"memberof": "Locals.k",
"scope": "static"
},
{
"comment": "/**\r\n * Converts an attribute name into an attribute call for that attribute. Converts `_max` attribute names to the proper attribute call syntax for `_max` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.\r\n * @memberof Locals\r\n * @param {string} string - The attribute name to create an attribute call for.\r\n * @returns {string}\r\n */",
"meta": {
"range": [
4275,
4372
],
"filename": "index.js",
"lineno": 88,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000390",
"name": "attrTitle",
"type": "ArrowFunctionExpression"
}
},
"description": "Converts an attribute name into an attribute call for that attribute. Converts `_max` attribute names to the proper attribute call syntax for `_max` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The attribute name to create an attribute call for.",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "attrTitle",
"longname": "Locals.attrTitle",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Converts a string to a valid snake_case attribute name or kebab-case action button name.\r\n * @memberof Locals\r\n * @param {string} string - The string to adapt\r\n * @returns {string}\r\n */",
"meta": {
"range": [
4578,
4947
],
"filename": "index.js",
"lineno": 96,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000410",
"name": "attrName",
"type": "ArrowFunctionExpression"
},
"vars": {
"sysPrefix": "Locals.attrName~sysPrefix",
"tempString": "Locals.attrName~tempString"
}
},
"description": "Converts a string to a valid snake_case attribute name or kebab-case action button name.",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to adapt",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "attrName",
"longname": "Locals.attrName",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4612,
4641
],
"filename": "index.js",
"lineno": 97,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000416",
"name": "sysPrefix",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "sysPrefix",
"longname": "Locals.attrName~sysPrefix",
"kind": "constant",
"memberof": "Locals.attrName",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4650,
4798
],
"filename": "index.js",
"lineno": 98,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000421",
"name": "tempString",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "tempString",
"longname": "Locals.attrName~tempString",
"kind": "member",
"memberof": "Locals.attrName",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4823,
4916
],
"filename": "index.js",
"lineno": 104,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000451",
"name": "tempString",
"type": "CallExpression",
"funcscope": "Locals.attrName",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "tempString",
"longname": "Locals.attrName~tempString",
"kind": "member",
"memberof": "Locals.attrName",
"scope": "inner"
},
{
"comment": "/**\r\n * Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.\r\n * @memberof Locals\r\n * @param {string} string - The ability name to create a call for.\r\n * @returns {string}\r\n */",
"meta": {
"range": [
5287,
5362
],
"filename": "index.js",
"lineno": 116,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000469",
"name": "buttonTitle",
"type": "ArrowFunctionExpression"
}
},
"description": "Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The ability name to create a call for.",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "buttonTitle",
"longname": "Locals.buttonTitle",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Replaces spaces in a string with underscores (`_`).\r\n * @memberof Locals\r\n * @param {string} string - The string to work on\r\n * @returns {string}\r\n */",
"meta": {
"range": [
5535,
5589
],
"filename": "index.js",
"lineno": 124,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000484",
"name": "replaceSpaces",
"type": "ArrowFunctionExpression"
}
},
"description": "Replaces spaces in a string with underscores (`_`).",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to work on",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "replaceSpaces",
"longname": "Locals.replaceSpaces",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Escapes problem characters in a string for use as a regex.\r\n * @memberof Locals\r\n * @param {string} string - The string to work on\r\n * @returns {string}\r\n */",
"meta": {
"range": [
5767,
5836
],
"filename": "index.js",
"lineno": 132,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000495",
"name": "replaceProblems",
"type": "ArrowFunctionExpression"
}
},
"description": "Escapes problem characters in a string for use as a regex.",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to work on",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "replaceProblems",
"longname": "Locals.replaceProblems",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Capitalizes the first letter of words in a string.\r\n * @memberof Locals\r\n * @param {string} string \r\n * @returns {string}\r\n */",
"meta": {
"range": [
5983,
6075
],
"filename": "index.js",
"lineno": 140,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000506",
"name": "capitalize",
"type": "ArrowFunctionExpression"
},
"vars": {
"": null
}
},
"description": "Capitalizes the first letter of words in a string.",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "capitalize",
"longname": "Locals.capitalize",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Converts a string to a valid kebab-case action button name\r\n * @memberof Locals\r\n * @param {string} name - The string to convert to an action button name\r\n * @returns {string}\r\n */",
"meta": {
"range": [
6276,
6336
],
"filename": "index.js",
"lineno": 148,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000522",
"name": "actionButtonName",
"type": "ArrowFunctionExpression"
}
},
"description": "Converts a string to a valid kebab-case action button name",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to convert to an action button name",
"name": "name"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "actionButtonName",
"longname": "Locals.actionButtonName",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Converts the name of an action button in a roller construction to the controlling attribute name.\r\n * @memberof Locals\r\n * @param {string} name - The string to convert\r\n * @returns {string}\r\n */",
"meta": {
"range": [
6549,
6625
],
"filename": "index.js",
"lineno": 155,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000536",
"name": "actionInputName",
"type": "ArrowFunctionExpression"
}
},
"description": "Converts the name of an action button in a roller construction to the controlling attribute name.",
"memberof": "Locals",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to convert",
"name": "name"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "actionInputName",
"longname": "Locals.actionInputName",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Converts a title back to an attribute name\r\n * @param {string} string - The string to convert to an attribute name\r\n * @memberof Locals\r\n * @returns {string}\r\n */",
"meta": {
"range": [
6808,
6865
],
"filename": "index.js",
"lineno": 163,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000550",
"name": "titleToName",
"type": "ArrowFunctionExpression"
}
},
"description": "Converts a title back to an attribute name",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to convert to an attribute name",
"name": "string"
}
],
"memberof": "Locals",
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"name": "titleToName",
"longname": "Locals.titleToName",
"kind": "function",
"scope": "static"
},
{
"comment": "/**\r\n * Adds an item to a designated array property of `varObjects` for tracking.\r\n * @param {any} item - \r\n * @param {string} arrName - Name of the array to manipulate\r\n */",
"meta": {
"range": [
7051,
7230
],
"filename": "index.js",
"lineno": 170,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000561",
"name": "addIfUnique",
"type": "ArrowFunctionExpression"
},
"vars": {
"varObjects[undefined]": "Locals.varObjects.undefined]"
}
},
"description": "Adds an item to a designated array property of `varObjects` for tracking.",
"params": [
{
"type": {
"names": [
"any"
]
},
"description": "-",
"name": "item"
},
{
"type": {
"names": [
"string"
]
},
"description": "Name of the array to manipulate",
"name": "arrName"
}
],
"name": "addIfUnique",
"longname": "addIfUnique",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
7088,
7135
],
"filename": "index.js",
"lineno": 171,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000568",
"name": "varObjects[undefined]",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "undefined]",
"longname": "Locals.varObjects.undefined]",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "/**\r\n * Stores the attribute in the cascades object.\r\n * @param {object} element - Object describing the element\r\n */",
"meta": {
"range": [
7360,
10238
],
"filename": "index.js",
"lineno": 181,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000598",
"name": "storeTrigger",
"type": "FunctionExpression"
},
"vars": {
"trigger": "storeTrigger~trigger",
"namePrefix": "storeTrigger~namePrefix",
"typeDefs": "storeTrigger~typeDefs",
"eventTypes": "storeTrigger~eventTypes",
"elementName": "storeTrigger~elementName",
"trigger.name": "storeTrigger~trigger.name",
"cascName": "storeTrigger~cascName",
"match": "storeTrigger~match",
"undefined": null,
"eventType": "storeTrigger~eventType",
"trigger.listener": "storeTrigger~trigger.listener",
"trigger.listenerFunc": "storeTrigger~trigger.listenerFunc",
"trigger.type": "storeTrigger~trigger.type",
"trigger.defaultValue": "storeTrigger~trigger.defaultValue",
"trigger.triggeredFuncs": "storeTrigger~trigger.triggeredFuncs",
"trigger.affects": "storeTrigger~trigger.affects",
"": null,
"varObjects.cascades[undefined]": "Locals.varObjects.cascades[undefined]",
"varObjects.cascades[undefined].triggeredFuncs": "Locals.varObjects.cascades[undefined].triggeredFuncs",
"varObjects.cascades[undefined].affects": "Locals.varObjects.cascades[undefined].affects",
"varObjects.cascades[undefined].calculation": "Locals.varObjects.cascades[undefined].calculation",
"varObjects.cascades[undefined].listener": "Locals.varObjects.cascades[undefined].listener",
"varObjects.cascades[undefined].listenerFunc": "Locals.varObjects.cascades[undefined].listenerFunc"
}
},
"description": "Stores the attribute in the cascades object.",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "Object describing the element",
"name": "element"
}
],
"name": "storeTrigger",
"longname": "storeTrigger",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
7401,
7432
],
"filename": "index.js",
"lineno": 182,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000604",
"name": "trigger",
"type": "LogicalExpression",
"value": ""
}
},
"undocumented": true,
"name": "trigger",
"longname": "storeTrigger~trigger",
"kind": "member",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7443,
7527
],
"filename": "index.js",
"lineno": 183,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000612",
"name": "namePrefix",
"type": "ObjectExpression",
"value": "{\"roll\":\"roll_\",\"action\":\"act_\",\"fieldset\":\"fieldset_\"}"
}
},
"undocumented": true,
"name": "namePrefix",
"longname": "storeTrigger~namePrefix",
"kind": "constant",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7463,
7475
],
"filename": "index.js",
"lineno": 184,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000615",
"name": "roll",
"type": "Literal",
"value": "roll_"
}
},
"undocumented": true,
"name": "roll",
"longname": "storeTrigger~namePrefix.roll",
"kind": "member",
"memberof": "storeTrigger~namePrefix",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7482,
7495
],
"filename": "index.js",
"lineno": 185,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000617",
"name": "action",
"type": "Literal",
"value": "act_"
}
},
"undocumented": true,
"name": "action",
"longname": "storeTrigger~namePrefix.action",
"kind": "member",
"memberof": "storeTrigger~namePrefix",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7502,
7522
],
"filename": "index.js",
"lineno": 186,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000619",
"name": "fieldset",
"type": "Literal",
"value": "fieldset_"
}
},
"undocumented": true,
"name": "fieldset",
"longname": "storeTrigger~namePrefix.fieldset",
"kind": "member",
"memberof": "storeTrigger~namePrefix",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7538,
7644
],
"filename": "index.js",
"lineno": 188,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000622",
"name": "typeDefs",
"type": "ObjectExpression",
"value": "{\"select\":\"\",\"radio\":0,\"checkbox\":0,\"number\":0,\"text\":\"\",\"span\":\"\"}"
}
},
"undocumented": true,
"name": "typeDefs",
"longname": "storeTrigger~typeDefs",
"kind": "constant",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7556,
7565
],
"filename": "index.js",
"lineno": 189,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000625",
"name": "select",
"type": "Literal",
"value": ""
}
},
"undocumented": true,
"name": "select",
"longname": "storeTrigger~typeDefs.select",
"kind": "member",
"memberof": "storeTrigger~typeDefs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7572,
7579
],
"filename": "index.js",
"lineno": 190,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000627",
"name": "radio",
"type": "Literal",
"value": 0
}
},
"undocumented": true,
"name": "radio",
"longname": "storeTrigger~typeDefs.radio",
"kind": "member",
"memberof": "storeTrigger~typeDefs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7586,
7596
],
"filename": "index.js",
"lineno": 191,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000629",
"name": "checkbox",
"type": "Literal",
"value": 0
}
},
"undocumented": true,
"name": "checkbox",
"longname": "storeTrigger~typeDefs.checkbox",
"kind": "member",
"memberof": "storeTrigger~typeDefs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7603,
7611
],
"filename": "index.js",
"lineno": 192,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000631",
"name": "number",
"type": "Literal",
"value": 0
}
},
"undocumented": true,
"name": "number",
"longname": "storeTrigger~typeDefs.number",
"kind": "member",
"memberof": "storeTrigger~typeDefs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7618,
7625
],
"filename": "index.js",
"lineno": 193,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000633",
"name": "text",
"type": "Literal",
"value": ""
}
},
"undocumented": true,
"name": "text",
"longname": "storeTrigger~typeDefs.text",
"kind": "member",
"memberof": "storeTrigger~typeDefs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7632,
7639
],
"filename": "index.js",
"lineno": 194,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000635",
"name": "span",
"type": "Literal",
"value": ""
}
},
"undocumented": true,
"name": "span",
"longname": "storeTrigger~typeDefs.span",
"kind": "member",
"memberof": "storeTrigger~typeDefs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7655,
7741
],
"filename": "index.js",
"lineno": 196,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000638",
"name": "eventTypes",
"type": "ObjectExpression",
"value": "{\"roll\":\"clicked\",\"action\":\"clicked\",\"fieldset\":\"remove\"}"
}
},
"undocumented": true,
"name": "eventTypes",
"longname": "storeTrigger~eventTypes",
"kind": "constant",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7675,
7689
],
"filename": "index.js",
"lineno": 197,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000641",
"name": "roll",
"type": "Literal",
"value": "clicked"
}
},
"undocumented": true,
"name": "roll",
"longname": "storeTrigger~eventTypes.roll",
"kind": "member",
"memberof": "storeTrigger~eventTypes",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7696,
7712
],
"filename": "index.js",
"lineno": 198,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000643",
"name": "action",
"type": "Literal",
"value": "clicked"
}
},
"undocumented": true,
"name": "action",
"longname": "storeTrigger~eventTypes.action",
"kind": "member",
"memberof": "storeTrigger~eventTypes",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7719,
7736
],
"filename": "index.js",
"lineno": 199,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000645",
"name": "fieldset",
"type": "Literal",
"value": "remove"
}
},
"undocumented": true,
"name": "fieldset",
"longname": "storeTrigger~eventTypes.fieldset",
"kind": "member",
"memberof": "storeTrigger~eventTypes",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7750,
7831
],
"filename": "index.js",
"lineno": 201,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000648",
"name": "elementName",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "elementName",
"longname": "storeTrigger~elementName",
"kind": "member",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7836,
7881
],
"filename": "index.js",
"lineno": 204,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000663",
"name": "trigger.name",
"type": "CallExpression",
"funcscope": "storeTrigger",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "name",
"longname": "storeTrigger~trigger.name",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7890,
7956
],
"filename": "index.js",
"lineno": 205,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000674",
"name": "cascName",
"type": "TemplateLiteral",
"value": ""
}
},
"undocumented": true,
"name": "cascName",
"longname": "storeTrigger~cascName",
"kind": "member",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7965,
8023
],
"filename": "index.js",
"lineno": 206,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000691",
"name": "match",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "match",
"longname": "storeTrigger~match",
"kind": "member",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8085,
8133
],
"filename": "index.js",
"lineno": 208,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000710",
"name": "eventType",
"type": "LogicalExpression",
"value": ""
}
},
"undocumented": true,
"name": "eventType",
"longname": "storeTrigger~eventType",
"kind": "member",
"memberof": "storeTrigger",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8300,
8393
],
"filename": "index.js",
"lineno": 211,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000749",
"name": "trigger.listener",
"type": "LogicalExpression",
"funcscope": "storeTrigger",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "listener",
"longname": "storeTrigger~trigger.listener",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8402,
8462
],
"filename": "index.js",
"lineno": 212,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000772",
"name": "trigger.listenerFunc",
"type": "LogicalExpression",
"funcscope": "storeTrigger",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "listenerFunc",
"longname": "storeTrigger~trigger.listenerFunc",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8476,
8503
],
"filename": "index.js",
"lineno": 214,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000782",
"name": "trigger.type",
"type": "MemberExpression",
"funcscope": "storeTrigger",
"value": "element.type",
"paramnames": []
}
},
"undocumented": true,
"name": "type",
"longname": "storeTrigger~trigger.type",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8548,
8922
],
"filename": "index.js",
"lineno": 216,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000798",
"name": "trigger.defaultValue",
"type": "ConditionalExpression",
"funcscope": "storeTrigger",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "defaultValue",
"longname": "storeTrigger~trigger.defaultValue",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8931,
8984
],
"filename": "index.js",
"lineno": 225,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000849",
"name": "trigger.triggeredFuncs",
"type": "LogicalExpression",
"funcscope": "storeTrigger",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "triggeredFuncs",
"longname": "storeTrigger~trigger.triggeredFuncs",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9023,
9093
],
"filename": "index.js",
"lineno": 227,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000864",
"name": "trigger.affects",
"type": "CallExpression",
"funcscope": "storeTrigger",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "affects",
"longname": "storeTrigger~trigger.affects",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9118,
9138
],
"filename": "index.js",
"lineno": 229,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000881",
"name": "trigger.affects",
"type": "ArrayExpression",
"funcscope": "storeTrigger",
"value": "[]",
"paramnames": []
}
},
"undocumented": true,
"name": "affects",
"longname": "storeTrigger~trigger.affects",
"kind": "member",
"memberof": "storeTrigger~trigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9161,
9205
],
"filename": "index.js",
"lineno": 232,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000887",
"name": "varObjects.cascades[undefined]",
"type": "ObjectExpression",
"value": "{}",
"paramnames": []
}
},
"undocumented": true,
"name": "cascades[undefined]",
"longname": "Locals.varObjects.cascades[undefined]",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9282,
9508
],
"filename": "index.js",
"lineno": 235,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000910",
"name": "varObjects.cascades[undefined].triggeredFuncs",
"type": "ConditionalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "cascades[undefined].triggeredFuncs",
"longname": "Locals.varObjects.cascades[undefined].triggeredFuncs",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9517,
9709
],
"filename": "index.js",
"lineno": 238,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000947",
"name": "varObjects.cascades[undefined].affects",
"type": "ConditionalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "cascades[undefined].affects",
"longname": "Locals.varObjects.cascades[undefined].affects",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9718,
9836
],
"filename": "index.js",
"lineno": 241,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100000984",
"name": "varObjects.cascades[undefined].calculation",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "cascades[undefined].calculation",
"longname": "Locals.varObjects.cascades[undefined].calculation",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9928,
10085
],
"filename": "index.js",
"lineno": 245,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001017",
"name": "varObjects.cascades[undefined].listener",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "cascades[undefined].listener",
"longname": "Locals.varObjects.cascades[undefined].listener",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
10094,
10222
],
"filename": "index.js",
"lineno": 246,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001052",
"name": "varObjects.cascades[undefined].listenerFunc",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "cascades[undefined].listenerFunc",
"longname": "Locals.varObjects.cascades[undefined].listenerFunc",
"kind": "member",
"memberof": "Locals.varObjects",
"scope": "static"
},
{
"comment": "/**\r\n * Finds the details for a specific repeating section\r\n * @param {string} section - The name of the repeating section\r\n * @returns {object}\r\n */",
"meta": {
"range": [
10400,
10531
],
"filename": "index.js",
"lineno": 256,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001074",
"name": "getSectionDetails",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Finds the details for a specific repeating section",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The name of the repeating section",
"name": "section"
}
],
"returns": [
{
"type": {
"names": [
"object"
]
}
}
],
"name": "getSectionDetails",
"longname": "getSectionDetails",
"kind": "function",
"scope": "global"
},
{
"comment": "/**\r\n * Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.\r\n * @param {string} section - The name of the repeating section\r\n */",
"meta": {
"range": [
10744,
10900
],
"filename": "index.js",
"lineno": 264,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001096",
"name": "createFieldsetObj",
"type": "FunctionExpression"
}
},
"description": "Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The name of the repeating section",
"name": "section"
}
],
"name": "createFieldsetObj",
"longname": "createFieldsetObj",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
10865,
10872
],
"filename": "index.js",
"lineno": 266,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001114",
"name": "section",
"type": "Identifier",
"value": "section"
}
},
"undocumented": true,
"name": "section",
"longname": "section",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
10873,
10882
],
"filename": "index.js",
"lineno": 266,
"columnno": 53,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001116",
"name": "fields",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "fields",
"longname": "fields",
"kind": "member",
"scope": "global"
},
{
"comment": "/**\r\n * Adds info on an attribute to an existing repeating section detail object.\r\n * @param {object} obj - Object describing the attribute element being created\r\n */",
"meta": {
"range": [
11079,
11386
],
"filename": "index.js",
"lineno": 274,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001120",
"name": "addFieldToFieldsetObj",
"type": "FunctionExpression"
},
"vars": {
"section": "addFieldToFieldsetObj~section",
"sectionDetails": "addFieldToFieldsetObj~sectionDetails",
"name": "addFieldToFieldsetObj~name"
}
},
"description": "Adds info on an attribute to an existing repeating section detail object.",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "Object describing the attribute element being created",
"name": "obj"
}
],
"name": "addFieldToFieldsetObj",
"longname": "addFieldToFieldsetObj",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
11125,
11175
],
"filename": "index.js",
"lineno": 275,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001126",
"name": "section",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "section",
"longname": "addFieldToFieldsetObj~section",
"kind": "member",
"memberof": "addFieldToFieldsetObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
11184,
11227
],
"filename": "index.js",
"lineno": 276,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001137",
"name": "sectionDetails",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "sectionDetails",
"longname": "addFieldToFieldsetObj~sectionDetails",
"kind": "member",
"memberof": "addFieldToFieldsetObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
11236,
11272
],
"filename": "index.js",
"lineno": 277,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001143",
"name": "name",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "name",
"longname": "addFieldToFieldsetObj~name",
"kind": "member",
"memberof": "addFieldToFieldsetObj",
"scope": "inner",
"params": []
},
{
"comment": "/**\r\n * Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.\r\n * @param {object} obj - The object to convert\r\n * @returns {object}\r\n */",
"meta": {
"range": [
11595,
11701
],
"filename": "index.js",
"lineno": 288,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001175",
"name": "makeElementObj",
"type": "FunctionExpression"
},
"vars": {
"newObj": "makeElementObj~newObj"
}
},
"description": "Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "The object to convert",
"name": "obj"
}
],
"returns": [
{
"type": {
"names": [
"object"
]
}
}
],
"name": "makeElementObj",
"longname": "makeElementObj",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
11636,
11653
],
"filename": "index.js",
"lineno": 289,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001181",
"name": "newObj",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "newObj",
"longname": "makeElementObj~newObj",
"kind": "constant",
"memberof": "makeElementObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
11706,
12026
],
"filename": "index.js",
"lineno": 294,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001194",
"name": "module.exports",
"type": "ObjectExpression",
"value": "{\"varObjects\":\"\",\"k\":\"\",\"resetObjs\":\"\",\"checkKUse\":\"\",\"getSystemPrefix\":\"\",\"setSystemPrefix\":\"\",\"attrTitle\":\"\",\"attrName\":\"\",\"buttonTitle\":\"\",\"replaceSpaces\":\"\",\"replaceProblems\":\"\",\"capitalize\":\"\",\"actionButtonName\":\"\",\"actionInputName\":\"\",\"titleToName\":\"\",\"addIfUnique\":\"\",\"storeTrigger\":\"\",\"getSectionDetails\":\"\",\"createFieldsetObj\":\"\",\"addFieldToFieldsetObj\":\"\",\"makeElementObj\":\"\"}",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11725,
11735
],
"filename": "index.js",
"lineno": 294,
"columnno": 19,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001199",
"name": "varObjects",
"type": "Identifier",
"value": "varObjects"
}
},
"undocumented": true,
"name": "varObjects",
"longname": "module.exports.varObjects",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11737,
11738
],
"filename": "index.js",
"lineno": 294,
"columnno": 31,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001201",
"name": "k",
"type": "Identifier",
"value": "k"
}
},
"undocumented": true,
"name": "k",
"longname": "module.exports.k",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11740,
11749
],
"filename": "index.js",
"lineno": 294,
"columnno": 34,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001203",
"name": "resetObjs",
"type": "Identifier",
"value": "resetObjs"
}
},
"undocumented": true,
"name": "resetObjs",
"longname": "module.exports.resetObjs",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11751,
11760
],
"filename": "index.js",
"lineno": 294,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001205",
"name": "checkKUse",
"type": "Identifier",
"value": "checkKUse"
}
},
"undocumented": true,
"name": "checkKUse",
"longname": "module.exports.checkKUse",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11762,
11777
],
"filename": "index.js",
"lineno": 294,
"columnno": 56,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001207",
"name": "getSystemPrefix",
"type": "Identifier",
"value": "getSystemPrefix"
}
},
"undocumented": true,
"name": "getSystemPrefix",
"longname": "module.exports.getSystemPrefix",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11779,
11794
],
"filename": "index.js",
"lineno": 294,
"columnno": 73,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001209",
"name": "setSystemPrefix",
"type": "Identifier",
"value": "setSystemPrefix"
}
},
"undocumented": true,
"name": "setSystemPrefix",
"longname": "module.exports.setSystemPrefix",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11796,
11805
],
"filename": "index.js",
"lineno": 294,
"columnno": 90,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001211",
"name": "attrTitle",
"type": "Identifier",
"value": "attrTitle"
}
},
"undocumented": true,
"name": "attrTitle",
"longname": "module.exports.attrTitle",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11807,
11815
],
"filename": "index.js",
"lineno": 294,
"columnno": 101,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001213",
"name": "attrName",
"type": "Identifier",
"value": "attrName"
}
},
"undocumented": true,
"name": "attrName",
"longname": "module.exports.attrName",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11817,
11828
],
"filename": "index.js",
"lineno": 294,
"columnno": 111,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001215",
"name": "buttonTitle",
"type": "Identifier",
"value": "buttonTitle"
}
},
"undocumented": true,
"name": "buttonTitle",
"longname": "module.exports.buttonTitle",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11830,
11843
],
"filename": "index.js",
"lineno": 294,
"columnno": 124,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001217",
"name": "replaceSpaces",
"type": "Identifier",
"value": "replaceSpaces"
}
},
"undocumented": true,
"name": "replaceSpaces",
"longname": "module.exports.replaceSpaces",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11845,
11860
],
"filename": "index.js",
"lineno": 294,
"columnno": 139,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001219",
"name": "replaceProblems",
"type": "Identifier",
"value": "replaceProblems"
}
},
"undocumented": true,
"name": "replaceProblems",
"longname": "module.exports.replaceProblems",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11862,
11872
],
"filename": "index.js",
"lineno": 294,
"columnno": 156,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001221",
"name": "capitalize",
"type": "Identifier",
"value": "capitalize"
}
},
"undocumented": true,
"name": "capitalize",
"longname": "module.exports.capitalize",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11874,
11890
],
"filename": "index.js",
"lineno": 294,
"columnno": 168,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001223",
"name": "actionButtonName",
"type": "Identifier",
"value": "actionButtonName"
}
},
"undocumented": true,
"name": "actionButtonName",
"longname": "module.exports.actionButtonName",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11892,
11907
],
"filename": "index.js",
"lineno": 294,
"columnno": 186,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001225",
"name": "actionInputName",
"type": "Identifier",
"value": "actionInputName"
}
},
"undocumented": true,
"name": "actionInputName",
"longname": "module.exports.actionInputName",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11909,
11920
],
"filename": "index.js",
"lineno": 294,
"columnno": 203,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001227",
"name": "titleToName",
"type": "Identifier",
"value": "titleToName"
}
},
"undocumented": true,
"name": "titleToName",
"longname": "module.exports.titleToName",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11922,
11933
],
"filename": "index.js",
"lineno": 294,
"columnno": 216,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001229",
"name": "addIfUnique",
"type": "Identifier",
"value": "addIfUnique"
}
},
"undocumented": true,
"name": "addIfUnique",
"longname": "module.exports.addIfUnique",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11935,
11947
],
"filename": "index.js",
"lineno": 294,
"columnno": 229,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001231",
"name": "storeTrigger",
"type": "Identifier",
"value": "storeTrigger"
}
},
"undocumented": true,
"name": "storeTrigger",
"longname": "module.exports.storeTrigger",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11949,
11966
],
"filename": "index.js",
"lineno": 294,
"columnno": 243,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001233",
"name": "getSectionDetails",
"type": "Identifier",
"value": "getSectionDetails"
}
},
"undocumented": true,
"name": "getSectionDetails",
"longname": "module.exports.getSectionDetails",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11968,
11985
],
"filename": "index.js",
"lineno": 294,
"columnno": 262,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001235",
"name": "createFieldsetObj",
"type": "Identifier",
"value": "createFieldsetObj"
}
},
"undocumented": true,
"name": "createFieldsetObj",
"longname": "module.exports.createFieldsetObj",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11987,
12008
],
"filename": "index.js",
"lineno": 294,
"columnno": 281,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001237",
"name": "addFieldToFieldsetObj",
"type": "Identifier",
"value": "addFieldToFieldsetObj"
}
},
"undocumented": true,
"name": "addFieldToFieldsetObj",
"longname": "module.exports.addFieldToFieldsetObj",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
12010,
12024
],
"filename": "index.js",
"lineno": 294,
"columnno": 304,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals",
"code": {
"id": "astnode100001239",
"name": "makeElementObj",
"type": "Identifier",
"value": "makeElementObj"
}
},
"undocumented": true,
"name": "makeElementObj",
"longname": "module.exports.makeElementObj",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
28
],
"filename": "outputPug.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001244",
"name": "path",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "path",
"longname": "path",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
37,
64
],
"filename": "outputPug.js",
"lineno": 2,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001250",
"name": "fs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fs",
"longname": "fs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
73,
97
],
"filename": "outputPug.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001256",
"name": "jsdom",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "jsdom",
"longname": "jsdom",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
108,
113
],
"filename": "outputPug.js",
"lineno": 4,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001264",
"name": "JSDOM",
"type": "Identifier",
"value": "JSDOM"
}
},
"undocumented": true,
"name": "JSDOM",
"longname": "JSDOM",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
134,
172
],
"filename": "outputPug.js",
"lineno": 6,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001268",
"name": "outputTests",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "outputTests",
"longname": "outputTests",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
183,
2013
],
"filename": "outputPug.js",
"lineno": 8,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001274",
"name": "outputPug",
"type": "ArrowFunctionExpression"
},
"vars": {
"destDir": "outputPug~destDir",
"dom": "outputPug~dom",
"undefined": null,
"i18nSubTypes": "outputPug~i18nSubTypes",
"translations": "outputPug~translations",
"": null,
"transPath": "outputPug~transPath",
"currTranslation": "outputPug~currTranslation",
"toUse": "outputPug~toUse"
}
},
"undocumented": true,
"name": "outputPug",
"longname": "outputPug",
"kind": "function",
"scope": "global",
"params": [],
"async": true
},
{
"comment": "",
"meta": {
"range": [
278,
313
],
"filename": "outputPug.js",
"lineno": 10,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001286",
"name": "destDir",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "destDir",
"longname": "outputPug~destDir",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
342,
356
],
"filename": "outputPug.js",
"lineno": 11,
"columnno": 26,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001301",
"name": "recursive",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "recursive",
"longname": "recursive",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
460,
481
],
"filename": "outputPug.js",
"lineno": 14,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001321",
"name": "dom",
"type": "NewExpression",
"value": ""
}
},
"undocumented": true,
"name": "dom",
"longname": "outputPug~dom",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
494,
500
],
"filename": "outputPug.js",
"lineno": 15,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001329",
"name": "window",
"type": "Identifier",
"value": "window"
}
},
"undocumented": true,
"name": "window",
"longname": "window",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
521,
529
],
"filename": "outputPug.js",
"lineno": 16,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001335",
"name": "document",
"type": "Identifier",
"value": "document"
}
},
"undocumented": true,
"name": "document",
"longname": "document",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
693,
793
],
"filename": "outputPug.js",
"lineno": 21,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001348",
"name": "i18nSubTypes",
"type": "ArrayExpression",
"value": "[\"\",\"-title\",\"-placeholder\",\"-label\",\"-aria-label\",\"-alt\",\"-vars\",\"-dynamic\",\"-list\"]"
}
},
"undocumented": true,
"name": "i18nSubTypes",
"longname": "outputPug~i18nSubTypes",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
804,
1646
],
"filename": "outputPug.js",
"lineno": 22,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001361",
"name": "translations",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "translations",
"longname": "outputPug~translations",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
865,
930
],
"filename": "outputPug.js",
"lineno": 23,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001372",
"name": "transElems",
"type": "ArrayExpression",
"value": "[\"\"]"
}
},
"undocumented": true,
"name": "transElems",
"longname": "<anonymous>~transElems",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
943,
975
],
"filename": "outputPug.js",
"lineno": 24,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001385",
"name": "baseType",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "baseType",
"longname": "<anonymous>~baseType",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1053,
1065
],
"filename": "outputPug.js",
"lineno": 27,
"columnno": 14,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001407",
"name": "listArr",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "listArr",
"longname": "<anonymous>~listArr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1082,
1139
],
"filename": "outputPug.js",
"lineno": 28,
"columnno": 14,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001411",
"name": "items",
"type": "ArrayExpression",
"value": "[\"\"]"
}
},
"undocumented": true,
"name": "items",
"longname": "<anonymous>~items",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1310,
1386
],
"filename": "outputPug.js",
"lineno": 34,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001444",
"name": "memo[undefined]",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1411,
1599
],
"filename": "outputPug.js",
"lineno": 36,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001470",
"name": "memo[undefined]",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1680,
1750
],
"filename": "outputPug.js",
"lineno": 47,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001505",
"name": "transPath",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "transPath",
"longname": "outputPug~transPath",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1763,
1882
],
"filename": "outputPug.js",
"lineno": 48,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001518",
"name": "currTranslation",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "currTranslation",
"longname": "outputPug~currTranslation",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1895,
1939
],
"filename": "outputPug.js",
"lineno": 51,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001546",
"name": "toUse",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "toUse",
"longname": "outputPug~toUse",
"kind": "constant",
"memberof": "outputPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2018,
2044
],
"filename": "outputPug.js",
"lineno": 56,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001568",
"name": "module.exports",
"type": "Identifier",
"value": "outputPug",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
28
],
"filename": "outputTests.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001576",
"name": "path",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "path",
"longname": "path",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
37,
64
],
"filename": "outputTests.js",
"lineno": 2,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001582",
"name": "fs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fs",
"longname": "fs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
75,
2080
],
"filename": "outputTests.js",
"lineno": 4,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001588",
"name": "outputTests",
"type": "ArrowFunctionExpression"
},
"vars": {
"mockPath": "outputTests~mockPath",
"mockScafPath": "outputTests~mockScafPath",
"scriptContent": "outputTests~scriptContent",
"repeatingAttributes": "outputTests~repeatingAttributes",
"": null,
"attributes": "outputTests~attributes",
"scriptPrepend": "outputTests~scriptPrepend",
"scriptAppend": "outputTests~scriptAppend",
"testContent": "outputTests~testContent"
}
},
"undocumented": true,
"name": "outputTests",
"longname": "outputTests",
"kind": "function",
"scope": "global",
"params": [],
"async": true
},
{
"comment": "",
"meta": {
"range": [
132,
191
],
"filename": "outputTests.js",
"lineno": 5,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001595",
"name": "mockPath",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "mockPath",
"longname": "outputTests~mockPath",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
202,
271
],
"filename": "outputTests.js",
"lineno": 6,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001604",
"name": "mockScafPath",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "mockScafPath",
"longname": "outputTests~mockScafPath",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
282,
341
],
"filename": "outputTests.js",
"lineno": 7,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001613",
"name": "scriptContent",
"type": "ChainExpression",
"value": ""
}
},
"undocumented": true,
"name": "scriptContent",
"longname": "outputTests~scriptContent",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
382,
599
],
"filename": "outputTests.js",
"lineno": 9,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001621",
"name": "repeatingAttributes",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "repeatingAttributes",
"longname": "outputTests~repeatingAttributes",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
484,
543
],
"filename": "outputTests.js",
"lineno": 10,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001638",
"name": "repAttr",
"type": "ArrayExpression",
"value": "[\"\"]"
}
},
"undocumented": true,
"name": "repAttr",
"longname": "<anonymous>~repAttr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
610,
1652
],
"filename": "outputTests.js",
"lineno": 14,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001658",
"name": "attributes",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "attributes",
"longname": "outputTests~attributes",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
786,
836
],
"filename": "outputTests.js",
"lineno": 17,
"columnno": 14,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001688",
"name": "name",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "name",
"longname": "<anonymous>~name",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
950,
966
],
"filename": "outputTests.js",
"lineno": 21,
"columnno": 14,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001719",
"name": "tag",
"type": "MemberExpression",
"value": "el.tagName"
}
},
"undocumented": true,
"name": "tag",
"longname": "<anonymous>~tag",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1074,
1214
],
"filename": "outputTests.js",
"lineno": 24,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001730",
"name": "memo[undefined]",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1331,
1352
],
"filename": "outputTests.js",
"lineno": 31,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001750",
"name": "memo[undefined]",
"type": "MemberExpression",
"value": "el.value",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1459,
1523
],
"filename": "outputTests.js",
"lineno": 35,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001765",
"name": "memo[undefined]",
"type": "ConditionalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1552,
1595
],
"filename": "outputTests.js",
"lineno": 39,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001779",
"name": "memo[undefined]",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1663,
1801
],
"filename": "outputTests.js",
"lineno": 45,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001794",
"name": "scriptPrepend",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "scriptPrepend",
"longname": "outputTests~scriptPrepend",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1812,
1865
],
"filename": "outputTests.js",
"lineno": 47,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001818",
"name": "scriptAppend",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "scriptAppend",
"longname": "outputTests~scriptAppend",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1876,
1943
],
"filename": "outputTests.js",
"lineno": 48,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001828",
"name": "testContent",
"type": "TemplateLiteral",
"value": ""
}
},
"undocumented": true,
"name": "testContent",
"longname": "outputTests~testContent",
"kind": "constant",
"memberof": "outputTests",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1976,
1990
],
"filename": "outputTests.js",
"lineno": 49,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001846",
"name": "recursive",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "recursive",
"longname": "recursive",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2085,
2113
],
"filename": "outputTests.js",
"lineno": 53,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001861",
"name": "module.exports",
"type": "Identifier",
"value": "outputTests",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
33
],
"filename": "processSheet.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001869",
"name": "fs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fs",
"longname": "fs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
44,
74
],
"filename": "processSheet.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001875",
"name": "kStatus",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "kStatus",
"longname": "kStatus",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
83,
123
],
"filename": "processSheet.js",
"lineno": 4,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001881",
"name": "resolvePaths",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "resolvePaths",
"longname": "resolvePaths",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
132,
168
],
"filename": "processSheet.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001887",
"name": "renderSASS",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "renderSASS",
"longname": "renderSASS",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
177,
211
],
"filename": "processSheet.js",
"lineno": 6,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001893",
"name": "renderPug",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "renderPug",
"longname": "renderPug",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
222,
476
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001899",
"name": "isSASS",
"type": "ArrowFunctionExpression"
}
},
"undocumented": true,
"name": "isSASS",
"longname": "isSASS",
"kind": "function",
"scope": "global",
"params": [],
"async": true
},
{
"comment": "",
"meta": {
"range": [
239,
244
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 23,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001903",
"name": "entry",
"type": "Identifier",
"value": "entry"
}
},
"undocumented": true,
"name": "entry",
"longname": "entry",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
245,
261
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 29,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001905",
"name": "source",
"type": "Identifier",
"value": "resSource"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
262,
281
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 46,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001907",
"name": "destination",
"type": "Identifier",
"value": "resDest"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
282,
289
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 66,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001909",
"name": "options",
"type": "Identifier",
"value": "options"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
290,
297
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 74,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001911",
"name": "runSCSS",
"type": "Identifier",
"value": "runSCSS"
}
},
"undocumented": true,
"name": "runSCSS",
"longname": "runSCSS",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
421,
437
],
"filename": "processSheet.js",
"lineno": 11,
"columnno": 23,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001938",
"name": "source",
"type": "Identifier",
"value": "resSource"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
438,
457
],
"filename": "processSheet.js",
"lineno": 11,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001940",
"name": "destination",
"type": "Identifier",
"value": "resDest"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
458,
465
],
"filename": "processSheet.js",
"lineno": 11,
"columnno": 60,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001942",
"name": "options",
"type": "Identifier",
"value": "options"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
487,
770
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001945",
"name": "isPUG",
"type": "ArrowFunctionExpression"
}
},
"undocumented": true,
"name": "isPUG",
"longname": "isPUG",
"kind": "function",
"scope": "global",
"params": [],
"async": true
},
{
"comment": "",
"meta": {
"range": [
503,
508
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001949",
"name": "entry",
"type": "Identifier",
"value": "entry"
}
},
"undocumented": true,
"name": "entry",
"longname": "entry",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
509,
525
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 28,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001951",
"name": "source",
"type": "Identifier",
"value": "resSource"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
526,
545
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001953",
"name": "destination",
"type": "Identifier",
"value": "resDest"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
546,
561
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 65,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001955",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
562,
569
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 81,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001957",
"name": "options",
"type": "Identifier",
"value": "options"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
570,
576
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 89,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001959",
"name": "runPUG",
"type": "Identifier",
"value": "runPUG"
}
},
"undocumented": true,
"name": "runPUG",
"longname": "runPUG",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
697,
713
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001986",
"name": "source",
"type": "Identifier",
"value": "resSource"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
714,
733
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 39,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001988",
"name": "destination",
"type": "Identifier",
"value": "resDest"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
734,
749
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 59,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001990",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
750,
757
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 75,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001992",
"name": "options",
"type": "Identifier",
"value": "options"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
781,
1775
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001995",
"name": "processSheet",
"type": "ArrowFunctionExpression"
},
"vars": {
"files": "processSheet~files",
"pugPromises": "processSheet~pugPromises",
"scssPromises": "processSheet~scssPromises",
"undefined": null,
"newSASS": "processSheet~newSASS",
"newPUG": "processSheet~newPUG",
"pugOutput": "processSheet~pugOutput",
"scssOutput": "processSheet~scssOutput"
}
},
"undocumented": true,
"name": "processSheet",
"longname": "processSheet",
"kind": "function",
"scope": "global",
"params": [],
"async": true
},
{
"comment": "",
"meta": {
"range": [
804,
816
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 29,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001999",
"name": "source",
"type": "AssignmentPattern",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
817,
828
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002003",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
829,
844
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 54,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002005",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
845,
876
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 70,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002007",
"name": "pugOptions",
"type": "AssignmentPattern",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "pugOptions",
"longname": "pugOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
857,
875
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 82,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002011",
"name": "suppressStack",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "suppressStack",
"longname": "suppressStack",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
877,
891
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 102,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002013",
"name": "scssOptions",
"type": "AssignmentPattern",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "scssOptions",
"longname": "scssOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
892,
904
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 117,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002017",
"name": "runSCSS",
"type": "AssignmentPattern",
"value": "runSCSS"
}
},
"undocumented": true,
"name": "runSCSS",
"longname": "runSCSS",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
905,
916
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 130,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002021",
"name": "runPUG",
"type": "AssignmentPattern",
"value": "runPUG"
}
},
"undocumented": true,
"name": "runPUG",
"longname": "runPUG",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
934,
966
],
"filename": "processSheet.js",
"lineno": 24,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002027",
"name": "files",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "files",
"longname": "processSheet~files",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
977,
993
],
"filename": "processSheet.js",
"lineno": 25,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002036",
"name": "pugPromises",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "pugPromises",
"longname": "processSheet~pugPromises",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1004,
1021
],
"filename": "processSheet.js",
"lineno": 26,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002040",
"name": "scssPromises",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "scssPromises",
"longname": "processSheet~scssPromises",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1265,
1361
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002087",
"name": "newSASS",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "newSASS",
"longname": "processSheet~newSASS",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1289,
1294
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 36,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002093",
"name": "entry",
"type": "Identifier",
"value": "entry"
}
},
"undocumented": true,
"name": "entry",
"longname": "entry",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1295,
1311
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002095",
"name": "source",
"type": "Identifier",
"value": "resSource"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1312,
1331
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 59,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002097",
"name": "destination",
"type": "Identifier",
"value": "resDest"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1332,
1351
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 79,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002099",
"name": "options",
"type": "Identifier",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1352,
1359
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 99,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002101",
"name": "runSCSS",
"type": "Identifier",
"value": "runSCSS"
}
},
"undocumented": true,
"name": "runSCSS",
"longname": "runSCSS",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1378,
1486
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002104",
"name": "newPUG",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "newPUG",
"longname": "processSheet~newPUG",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1400,
1405
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 34,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002110",
"name": "entry",
"type": "Identifier",
"value": "entry"
}
},
"undocumented": true,
"name": "entry",
"longname": "entry",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1406,
1422
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002112",
"name": "source",
"type": "Identifier",
"value": "resSource"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1423,
1442
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 57,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002114",
"name": "destination",
"type": "Identifier",
"value": "resDest"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1443,
1458
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 77,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002116",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1459,
1477
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 93,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002118",
"name": "options",
"type": "Identifier",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1478,
1484
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 112,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002120",
"name": "runPUG",
"type": "Identifier",
"value": "runPUG"
}
},
"undocumented": true,
"name": "runPUG",
"longname": "runPUG",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1640,
1682
],
"filename": "processSheet.js",
"lineno": 43,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002141",
"name": "pugOutput",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "pugOutput",
"longname": "processSheet~pugOutput",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1693,
1737
],
"filename": "processSheet.js",
"lineno": 44,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002150",
"name": "scssOutput",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "scssOutput",
"longname": "processSheet~scssOutput",
"kind": "constant",
"memberof": "processSheet",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1780,
1809
],
"filename": "processSheet.js",
"lineno": 48,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002163",
"name": "module.exports",
"type": "Identifier",
"value": "processSheet",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
26
],
"filename": "renderPug.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002171",
"name": "pug",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "pug",
"longname": "pug",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
35,
57
],
"filename": "renderPug.js",
"lineno": 2,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002177",
"name": "path",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "path",
"longname": "path",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
68,
103
],
"filename": "renderPug.js",
"lineno": 4,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002183",
"name": "kErrorHead",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "kErrorHead",
"longname": "kErrorHead",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
112,
150
],
"filename": "renderPug.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002189",
"name": "getTemplate",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "getTemplate",
"longname": "getTemplate",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
159,
193
],
"filename": "renderPug.js",
"lineno": 6,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002195",
"name": "outputPug",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "outputPug",
"longname": "outputPug",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * Renders pug into html text\r\n * @param {string} source - The path to the file you want to parse as pug.\r\n * @param {string} destination - The path to the file where you want to store the rendered HTML.\r\n * @param {object} [options] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:\r\n * @param {boolean} [options.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.\r\n * @returns {Promise<string|null>} - The rendered HTML or null if an error occurred\r\n */",
"meta": {
"range": [
1008,
1948
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002201",
"name": "renderPug",
"type": "ArrowFunctionExpression"
},
"vars": {
"template": "renderPug~template",
"k": "renderPug~k",
"html": "renderPug~html"
}
},
"description": "Renders pug into html text",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The path to the file you want to parse as pug.",
"name": "source"
},
{
"type": {
"names": [
"string"
]
},
"description": "The path to the file where you want to store the rendered HTML.",
"name": "destination"
},
{
"type": {
"names": [
"object"
]
},
"optional": true,
"description": "Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:",
"name": "options"
},
{
"type": {
"names": [
"boolean"
]
},
"optional": true,
"defaultvalue": true,
"description": "Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.",
"name": "options.suppressStack"
}
],
"returns": [
{
"type": {
"names": [
"Promise.<(string|null)>"
]
},
"description": "- The rendered HTML or null if an error occurred"
}
],
"name": "renderPug",
"longname": "renderPug",
"kind": "function",
"scope": "global",
"async": true
},
{
"comment": "",
"meta": {
"range": [
1028,
1034
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 26,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002205",
"name": "source",
"type": "Identifier",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1035,
1046
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002207",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1047,
1062
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002209",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1063,
1091
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 61,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002211",
"name": "options",
"type": "AssignmentPattern",
"value": "options"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1072,
1090
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 70,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002215",
"name": "suppressStack",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "suppressStack",
"longname": "suppressStack",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1108,
1144
],
"filename": "renderPug.js",
"lineno": 18,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002219",
"name": "template",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "template",
"longname": "renderPug~template",
"kind": "constant",
"memberof": "renderPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1165,
1188
],
"filename": "renderPug.js",
"lineno": 20,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002228",
"name": "k",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "k",
"longname": "renderPug~k",
"kind": "constant",
"memberof": "renderPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1221,
1378
],
"filename": "renderPug.js",
"lineno": 22,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002239",
"name": "html",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "html",
"longname": "renderPug~html",
"kind": "constant",
"memberof": "renderPug",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1257,
1268
],
"filename": "renderPug.js",
"lineno": 23,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002247",
"name": "pretty",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "pretty",
"longname": "pretty",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1309,
1324
],
"filename": "renderPug.js",
"lineno": 26,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002253",
"name": "filename",
"type": "Identifier",
"value": "source"
}
},
"undocumented": true,
"name": "filename",
"longname": "filename",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1333,
1370
],
"filename": "renderPug.js",
"lineno": 27,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002255",
"name": "basedir",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "basedir",
"longname": "basedir",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1953,
1979
],
"filename": "renderPug.js",
"lineno": 47,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002322",
"name": "module.exports",
"type": "Identifier",
"value": "renderPug",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
37
],
"filename": "renderSASS.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002330",
"name": "sass",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "sass",
"longname": "sass",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
46,
68
],
"filename": "renderSASS.js",
"lineno": 2,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002336",
"name": "path",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "path",
"longname": "path",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
77,
104
],
"filename": "renderSASS.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002342",
"name": "fs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fs",
"longname": "fs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
115,
128
],
"filename": "renderSASS.js",
"lineno": 4,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002350",
"name": "pathToFileURL",
"type": "Identifier",
"value": "pathToFileURL"
}
},
"undocumented": true,
"name": "pathToFileURL",
"longname": "pathToFileURL",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
158,
193
],
"filename": "renderSASS.js",
"lineno": 6,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002356",
"name": "kErrorHead",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "kErrorHead",
"longname": "kErrorHead",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * Renders SCSS into CSS text\r\n * @param {string} source - The path to the file you want to parse as SCSS.\r\n * @param {string} destination - The path to the file where you want to store the rendered CSS.\r\n * @param {object} [options = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.\r\n * @returns {Promise<string|null>} - The rendered css or null if an error occurred\r\n */",
"meta": {
"range": [
684,
1853
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002362",
"name": "renderSASS",
"type": "ArrowFunctionExpression"
},
"vars": {
"dirname": "renderSASS~dirname",
"compileOptions": "renderSASS~compileOptions",
"": null,
"currOptions": "renderSASS~currOptions",
"undefined": null
}
},
"description": "Renders SCSS into CSS text",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The path to the file you want to parse as SCSS.",
"name": "source"
},
{
"type": {
"names": [
"string"
]
},
"description": "The path to the file where you want to store the rendered CSS.",
"name": "destination"
},
{
"type": {
"names": [
"object"
]
},
"optional": true,
"defaultvalue": "{}",
"description": "Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.",
"name": "options"
}
],
"returns": [
{
"type": {
"names": [
"Promise.<(string|null)>"
]
},
"description": "- The rendered css or null if an error occurred"
}
],
"name": "renderSASS",
"longname": "renderSASS",
"kind": "function",
"scope": "global",
"async": true
},
{
"comment": "",
"meta": {
"range": [
705,
711
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 27,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002366",
"name": "source",
"type": "Identifier",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
712,
723
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 34,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002368",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
724,
734
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 46,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002370",
"name": "options",
"type": "AssignmentPattern",
"value": "options"
}
},
"undocumented": true,
"name": "options",
"longname": "options",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
761,
806
],
"filename": "renderSASS.js",
"lineno": 17,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002378",
"name": "dirname",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "dirname",
"longname": "renderSASS~dirname",
"kind": "constant",
"memberof": "renderSASS",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
819,
1215
],
"filename": "renderSASS.js",
"lineno": 18,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002392",
"name": "compileOptions",
"type": "ObjectExpression",
"value": "{\"charset\":false,\"importers\":\"\"}"
}
},
"undocumented": true,
"name": "compileOptions",
"longname": "renderSASS~compileOptions",
"kind": "constant",
"memberof": "renderSASS",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
845,
858
],
"filename": "renderSASS.js",
"lineno": 19,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002395",
"name": "charset",
"type": "Literal",
"value": false
}
},
"undocumented": true,
"name": "charset",
"longname": "renderSASS~compileOptions.charset",
"kind": "member",
"memberof": "renderSASS~compileOptions",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
867,
1208
],
"filename": "renderSASS.js",
"lineno": 20,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002397",
"name": "importers",
"type": "ArrayExpression",
"value": "[\"{\\\"findFileUrl\\\":\\\"\\\"}\"]"
}
},
"undocumented": true,
"name": "importers",
"longname": "renderSASS~compileOptions.importers",
"kind": "member",
"memberof": "renderSASS~compileOptions",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
902,
1188
],
"filename": "renderSASS.js",
"lineno": 22,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002400",
"name": "findFileUrl",
"type": "FunctionExpression"
},
"vars": {
"fileURL": "findFileUrl~fileURL",
"newURL": "findFileUrl~newURL"
}
},
"undocumented": true,
"name": "findFileUrl",
"longname": "findFileUrl",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1000,
1100
],
"filename": "renderSASS.js",
"lineno": 24,
"columnno": 18,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002414",
"name": "fileURL",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fileURL",
"longname": "findFileUrl~fileURL",
"kind": "constant",
"memberof": "findFileUrl",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1121,
1146
],
"filename": "renderSASS.js",
"lineno": 25,
"columnno": 18,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002430",
"name": "newURL",
"type": "NewExpression",
"value": ""
}
},
"undocumented": true,
"name": "newURL",
"longname": "findFileUrl~newURL",
"kind": "constant",
"memberof": "findFileUrl",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1228,
1254
],
"filename": "renderSASS.js",
"lineno": 31,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002438",
"name": "currOptions",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "currOptions",
"longname": "renderSASS~currOptions",
"kind": "constant",
"memberof": "renderSASS",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1458,
1461
],
"filename": "renderSASS.js",
"lineno": 38,
"columnno": 11,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002474",
"name": "css",
"type": "Identifier",
"value": "css"
}
},
"undocumented": true,
"name": "css",
"longname": "css",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1858,
1885
],
"filename": "renderSASS.js",
"lineno": 57,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002533",
"name": "module.exports",
"type": "Identifier",
"value": "renderSASS",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8,
15
],
"filename": "resolvePaths.js",
"lineno": 1,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002543",
"name": "resolve",
"type": "Identifier",
"value": "resolve"
}
},
"undocumented": true,
"name": "resolve",
"longname": "resolve",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
44,
66
],
"filename": "resolvePaths.js",
"lineno": 2,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002549",
"name": "path",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "path",
"longname": "path",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
77,
356
],
"filename": "resolvePaths.js",
"lineno": 4,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002555",
"name": "resolvePaths",
"type": "ArrowFunctionExpression"
},
"vars": {
"resSource": "resolvePaths~resSource",
"resDest": "resolvePaths~resDest"
}
},
"undocumented": true,
"name": "resolvePaths",
"longname": "resolvePaths",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
133,
176
],
"filename": "resolvePaths.js",
"lineno": 5,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002563",
"name": "resSource",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "resSource",
"longname": "resolvePaths~resSource",
"kind": "constant",
"memberof": "resolvePaths",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
187,
321
],
"filename": "resolvePaths.js",
"lineno": 6,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002574",
"name": "resDest",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "resDest",
"longname": "resolvePaths~resDest",
"kind": "constant",
"memberof": "resolvePaths",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
360,
389
],
"filename": "resolvePaths.js",
"lineno": 12,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002602",
"name": "module.exports",
"type": "Identifier",
"value": "resolvePaths",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6,
35
],
"filename": "watch.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002610",
"name": "watch",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "watch",
"longname": "watch",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
46,
86
],
"filename": "watch.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002616",
"name": "processSheet",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "processSheet",
"longname": "processSheet",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
97,
1054
],
"filename": "watch.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002622",
"name": "kWatch",
"type": "ArrowFunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "kWatch",
"longname": "kWatch",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
108,
120
],
"filename": "watch.js",
"lineno": 5,
"columnno": 17,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002626",
"name": "source",
"type": "AssignmentPattern",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
121,
132
],
"filename": "watch.js",
"lineno": 5,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002630",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
133,
148
],
"filename": "watch.js",
"lineno": 5,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002632",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
149,
180
],
"filename": "watch.js",
"lineno": 5,
"columnno": 58,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002634",
"name": "pugOptions",
"type": "AssignmentPattern",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "pugOptions",
"longname": "pugOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
161,
179
],
"filename": "watch.js",
"lineno": 5,
"columnno": 70,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002638",
"name": "suppressStack",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "suppressStack",
"longname": "suppressStack",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
181,
195
],
"filename": "watch.js",
"lineno": 5,
"columnno": 90,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002640",
"name": "scssOptions",
"type": "AssignmentPattern",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "scssOptions",
"longname": "scssOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
235,
250
],
"filename": "watch.js",
"lineno": 8,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002650",
"name": "recursive",
"type": "Literal",
"value": true
}
},
"undocumented": true,
"name": "recursive",
"longname": "recursive",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
259,
719
],
"filename": "watch.js",
"lineno": 9,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002652",
"name": "filter",
"type": "FunctionExpression"
}
},
"undocumented": true,
"name": "filter",
"longname": "filter",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
810,
842
],
"filename": "watch.js",
"lineno": 23,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002699",
"name": "runSCSS",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "runSCSS",
"longname": "<anonymous>~runSCSS",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
857,
893
],
"filename": "watch.js",
"lineno": 24,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002707",
"name": "runPUG",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "runPUG",
"longname": "<anonymous>~runPUG",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
967,
973
],
"filename": "watch.js",
"lineno": 28,
"columnno": 26,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002726",
"name": "source",
"type": "Identifier",
"value": "source"
}
},
"undocumented": true,
"name": "source",
"longname": "source",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
974,
985
],
"filename": "watch.js",
"lineno": 28,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002728",
"name": "destination",
"type": "Identifier",
"value": "destination"
}
},
"undocumented": true,
"name": "destination",
"longname": "destination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
986,
1001
],
"filename": "watch.js",
"lineno": 28,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002730",
"name": "testDestination",
"type": "Identifier",
"value": "testDestination"
}
},
"undocumented": true,
"name": "testDestination",
"longname": "testDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1002,
1012
],
"filename": "watch.js",
"lineno": 28,
"columnno": 61,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002732",
"name": "pugOptions",
"type": "Identifier",
"value": "pugOptions"
}
},
"undocumented": true,
"name": "pugOptions",
"longname": "pugOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1013,
1024
],
"filename": "watch.js",
"lineno": 28,
"columnno": 72,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002734",
"name": "scssOptions",
"type": "Identifier",
"value": "scssOptions"
}
},
"undocumented": true,
"name": "scssOptions",
"longname": "scssOptions",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1025,
1032
],
"filename": "watch.js",
"lineno": 28,
"columnno": 84,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002736",
"name": "runSCSS",
"type": "Identifier",
"value": "runSCSS"
}
},
"undocumented": true,
"name": "runSCSS",
"longname": "runSCSS",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1033,
1039
],
"filename": "watch.js",
"lineno": 28,
"columnno": 92,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002738",
"name": "runPUG",
"type": "Identifier",
"value": "runPUG"
}
},
"undocumented": true,
"name": "runPUG",
"longname": "runPUG",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1059,
1082
],
"filename": "watch.js",
"lineno": 32,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002741",
"name": "module.exports",
"type": "Identifier",
"value": "kWatch",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "/**@namespace Sheetworkers */",
"meta": {
"filename": "accessSheet.js",
"lineno": 1,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"kind": "namespace",
"name": "Sheetworkers",
"longname": "Sheetworkers",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
167,
1634
],
"filename": "accessSheet.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002749",
"name": "updateSheet",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "updateSheet",
"longname": "updateSheet",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
235,
266
],
"filename": "accessSheet.js",
"lineno": 7,
"columnno": 15,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002761",
"name": "props",
"type": "ArrayExpression",
"value": "[\"debug_mode\",\"\"]"
}
},
"undocumented": true,
"name": "props",
"longname": "props",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
267,
1628
],
"filename": "accessSheet.js",
"lineno": 7,
"columnno": 47,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002766",
"name": "callback",
"type": "ArrowFunctionExpression"
},
"vars": {
"kFuncs.debugMode": "kFuncs.debugMode",
"": null,
"attributes.sheet_version": "attributes.sheet_version"
}
},
"undocumented": true,
"name": "callback",
"longname": "callback",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
311,
373
],
"filename": "accessSheet.js",
"lineno": 8,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002773",
"name": "kFuncs.debugMode",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "debugMode",
"longname": "kFuncs.debugMode",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
387,
425
],
"filename": "accessSheet.js",
"lineno": 9,
"columnno": 11,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002790",
"name": "sheet_version",
"type": "MemberExpression",
"value": "attributes.sheet_version"
}
},
"undocumented": true,
"name": "sheet_version",
"longname": "sheet_version",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
655,
665
],
"filename": "accessSheet.js",
"lineno": 14,
"columnno": 27,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002833",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
666,
674
],
"filename": "accessSheet.js",
"lineno": 14,
"columnno": 38,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002835",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
675,
679
],
"filename": "accessSheet.js",
"lineno": 14,
"columnno": 47,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002837",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
971,
981
],
"filename": "accessSheet.js",
"lineno": 22,
"columnno": 19,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002872",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
982,
990
],
"filename": "accessSheet.js",
"lineno": 22,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002874",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
991,
995
],
"filename": "accessSheet.js",
"lineno": 22,
"columnno": 39,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002876",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1042,
1054
],
"filename": "accessSheet.js",
"lineno": 26,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002884",
"name": "openHandlers",
"type": "Identifier",
"value": "openHandlers"
}
},
"undocumented": true,
"name": "openHandlers",
"longname": "openHandlers",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1236,
1246
],
"filename": "accessSheet.js",
"lineno": 30,
"columnno": 25,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002919",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1247,
1255
],
"filename": "accessSheet.js",
"lineno": 30,
"columnno": 36,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002921",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1256,
1260
],
"filename": "accessSheet.js",
"lineno": 30,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002923",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1422,
1432
],
"filename": "accessSheet.js",
"lineno": 35,
"columnno": 20,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002937",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1433,
1441
],
"filename": "accessSheet.js",
"lineno": 35,
"columnno": 31,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002939",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1450,
1491
],
"filename": "accessSheet.js",
"lineno": 36,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002942",
"name": "attributes.sheet_version",
"type": "MemberExpression",
"value": "kFuncs.version",
"paramnames": []
}
},
"undocumented": true,
"name": "sheet_version",
"longname": "attributes.sheet_version",
"kind": "member",
"memberof": "attributes",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1645,
1726
],
"filename": "accessSheet.js",
"lineno": 43,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002968",
"name": "initialSetup",
"type": "FunctionExpression"
}
},
"undocumented": true,
"name": "initialSetup",
"longname": "initialSetup",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\r\n * @memberof Sheetworkers\r\n * @param {Roll20Event} event - The Roll20 event object\r\n * @returns {void}\r\n * @example\r\n * //Call from an attribute change\r\n * on('change:an_attribute',k.accessSheet);\r\n */",
"meta": {
"range": [
2205,
2485
],
"filename": "accessSheet.js",
"lineno": 56,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002979",
"name": "accessSheet",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).",
"memberof": "Sheetworkers",
"params": [
{
"type": {
"names": [
"Roll20Event"
]
},
"description": "The Roll20 event object",
"name": "event"
}
],
"returns": [
{
"type": {
"names": [
"void"
]
}
}
],
"examples": [
"//Call from an attribute change\ron('change:an_attribute',k.accessSheet);"
],
"name": "accessSheet",
"longname": "Sheetworkers.accessSheet",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2246,
2270
],
"filename": "accessSheet.js",
"lineno": 57,
"columnno": 9,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002988",
"name": "funcs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "funcs",
"longname": "funcs",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2284,
2289
],
"filename": "accessSheet.js",
"lineno": 58,
"columnno": 9,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100002998",
"name": "event",
"type": "Identifier",
"value": "event"
}
},
"undocumented": true,
"name": "event",
"longname": "event",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2309,
2479
],
"filename": "accessSheet.js",
"lineno": 59,
"columnno": 15,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003004",
"name": "callback",
"type": "ArrowFunctionExpression"
},
"vars": {
"trigger": "callback~trigger"
}
},
"undocumented": true,
"name": "callback",
"longname": "callback",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2357,
2400
],
"filename": "accessSheet.js",
"lineno": 60,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003011",
"name": "trigger",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "trigger",
"longname": "callback~trigger",
"kind": "member",
"memberof": "callback",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2433,
2438
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003025",
"name": "event",
"type": "Identifier",
"value": "event"
}
},
"undocumented": true,
"name": "event",
"longname": "event",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2439,
2446
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 36,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003027",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2447,
2457
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 44,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003029",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2458,
2466
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 55,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003031",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2467,
2471
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 64,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003033",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2488,
2519
],
"filename": "accessSheet.js",
"lineno": 64,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003036",
"name": "funcs.accessSheet",
"type": "Identifier",
"value": "accessSheet",
"paramnames": []
}
},
"undocumented": true,
"name": "accessSheet",
"longname": "funcs.accessSheet",
"kind": "member",
"memberof": "funcs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
131,
6775
],
"filename": "attribute_proxy.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003044",
"name": "createAttrProxy",
"type": "FunctionExpression"
},
"vars": {
"getCascObj": "createAttrProxy~getCascObj",
"": null,
"triggerFunctions": "createAttrProxy~triggerFunctions",
"initialFunction": "createAttrProxy~initialFunction",
"alwaysFunctions": "createAttrProxy~alwaysFunctions",
"processChange": "createAttrProxy~processChange",
"attrTarget": "createAttrProxy~attrTarget",
"attrHandler": "createAttrProxy~attrHandler"
}
},
"undocumented": true,
"name": "createAttrProxy",
"longname": "createAttrProxy",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
269,
981
],
"filename": "attribute_proxy.js",
"lineno": 7,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003050",
"name": "getCascObj",
"type": "FunctionExpression"
},
"vars": {
"eventName": "createAttrProxy~getCascObj~eventName",
"typePrefix": "createAttrProxy~getCascObj~typePrefix",
"cascName": "createAttrProxy~getCascObj~cascName",
"cascObj": "createAttrProxy~getCascObj~cascObj",
"cascObj.previousValue": "createAttrProxy~getCascObj~cascObj.previousValue",
"cascObj.originalRollId": "createAttrProxy~getCascObj~cascObj.originalRollId",
"cascObj.rollData": "createAttrProxy~getCascObj~cascObj.rollData"
}
},
"undocumented": true,
"name": "getCascObj",
"longname": "createAttrProxy~getCascObj",
"kind": "function",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
315,
369
],
"filename": "attribute_proxy.js",
"lineno": 8,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003057",
"name": "eventName",
"type": "LogicalExpression",
"value": ""
}
},
"undocumented": true,
"name": "eventName",
"longname": "createAttrProxy~getCascObj~eventName",
"kind": "constant",
"memberof": "createAttrProxy~getCascObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
380,
506
],
"filename": "attribute_proxy.js",
"lineno": 9,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003067",
"name": "typePrefix",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "typePrefix",
"longname": "createAttrProxy~getCascObj~typePrefix",
"kind": "member",
"memberof": "createAttrProxy~getCascObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
517,
590
],
"filename": "attribute_proxy.js",
"lineno": 14,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003083",
"name": "cascName",
"type": "TemplateLiteral",
"value": ""
}
},
"undocumented": true,
"name": "cascName",
"longname": "createAttrProxy~getCascObj~cascName",
"kind": "member",
"memberof": "createAttrProxy~getCascObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
601,
625
],
"filename": "attribute_proxy.js",
"lineno": 15,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003097",
"name": "cascObj",
"type": "MemberExpression",
"value": "casc[undefined]"
}
},
"undocumented": true,
"name": "cascObj",
"longname": "createAttrProxy~getCascObj~cascObj",
"kind": "member",
"memberof": "createAttrProxy~getCascObj",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
641,
659
],
"filename": "attribute_proxy.js",
"lineno": 16,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003108",
"name": "cascName",
"type": "Identifier",
"value": "cascObj"
}
},
"undocumented": true,
"name": "cascName",
"longname": "cascName",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
731,
774
],
"filename": "attribute_proxy.js",
"lineno": 19,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003121",
"name": "cascObj.previousValue",
"type": "MemberExpression",
"funcscope": "createAttrProxy~getCascObj",
"value": "event.previousValue",
"paramnames": []
}
},
"undocumented": true,
"name": "previousValue",
"longname": "createAttrProxy~getCascObj~cascObj.previousValue",
"kind": "member",
"memberof": "createAttrProxy~getCascObj~cascObj",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
824,
869
],
"filename": "attribute_proxy.js",
"lineno": 21,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003134",
"name": "cascObj.originalRollId",
"type": "MemberExpression",
"funcscope": "createAttrProxy~getCascObj",
"value": "event.originalRollId",
"paramnames": []
}
},
"undocumented": true,
"name": "originalRollId",
"longname": "createAttrProxy~getCascObj~cascObj.originalRollId",
"kind": "member",
"memberof": "createAttrProxy~getCascObj~cascObj",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
880,
932
],
"filename": "attribute_proxy.js",
"lineno": 22,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003142",
"name": "cascObj.rollData",
"type": "CallExpression",
"funcscope": "createAttrProxy~getCascObj",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "rollData",
"longname": "createAttrProxy~getCascObj~cascObj.rollData",
"kind": "member",
"memberof": "createAttrProxy~getCascObj~cascObj",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
996,
1436
],
"filename": "attribute_proxy.js",
"lineno": 28,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003158",
"name": "triggerFunctions",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "triggerFunctions",
"longname": "createAttrProxy~triggerFunctions",
"kind": "function",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1266,
1277
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 21,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003208",
"name": "trigger",
"type": "Identifier",
"value": "obj"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1278,
1288
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003210",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1289,
1297
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 44,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003212",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1298,
1302
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 53,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003214",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1451,
1819
],
"filename": "attribute_proxy.js",
"lineno": 37,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003228",
"name": "initialFunction",
"type": "FunctionExpression"
}
},
"undocumented": true,
"name": "initialFunction",
"longname": "createAttrProxy~initialFunction",
"kind": "function",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1646,
1657
],
"filename": "attribute_proxy.js",
"lineno": 41,
"columnno": 32,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003263",
"name": "trigger",
"type": "Identifier",
"value": "obj"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1658,
1668
],
"filename": "attribute_proxy.js",
"lineno": 41,
"columnno": 44,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003265",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1669,
1677
],
"filename": "attribute_proxy.js",
"lineno": 41,
"columnno": 55,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003267",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1830,
2010
],
"filename": "attribute_proxy.js",
"lineno": 45,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003283",
"name": "alwaysFunctions",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "alwaysFunctions",
"longname": "createAttrProxy~alwaysFunctions",
"kind": "function",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1961,
1968
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 15,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003307",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1969,
1979
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 23,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003309",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1980,
1988
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 34,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003311",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1989,
1993
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 43,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003313",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2021,
3377
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003316",
"name": "processChange",
"type": "FunctionExpression"
},
"vars": {
"attributes[undefined]": null
}
},
"undocumented": true,
"name": "processChange",
"longname": "createAttrProxy~processChange",
"kind": "function",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2047,
2052
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 34,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003320",
"name": "event",
"type": "Identifier",
"value": "event"
}
},
"undocumented": true,
"name": "event",
"longname": "event",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2053,
2060
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003322",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2061,
2071
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 48,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003324",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2072,
2080
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 59,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003326",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2081,
2085
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 68,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003328",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2419,
2426
],
"filename": "attribute_proxy.js",
"lineno": 59,
"columnno": 11,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003379",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2960,
3049
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003436",
"name": "attributes[undefined]",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "attributes[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3015,
3022
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 63,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003449",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3023,
3033
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 71,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003451",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3034,
3042
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 82,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003453",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3043,
3047
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 91,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003455",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3345,
3355
],
"filename": "attribute_proxy.js",
"lineno": 77,
"columnno": 20,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003504",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3356,
3364
],
"filename": "attribute_proxy.js",
"lineno": 77,
"columnno": 31,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003506",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3365,
3369
],
"filename": "attribute_proxy.js",
"lineno": 77,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003508",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3388,
3604
],
"filename": "attribute_proxy.js",
"lineno": 79,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003511",
"name": "attrTarget",
"type": "ObjectExpression",
"value": "{\"updates\":\"\",\"attributes\":\"\",\"repOrders\":\"\",\"queue\":\"\",\"casc\":\"\",\"alwaysFunctions\":\"\",\"processChange\":\"\",\"triggerFunctions\":\"\",\"initialFunction\":\"\",\"getCascObj\":\"\"}"
}
},
"undocumented": true,
"name": "attrTarget",
"longname": "createAttrProxy~attrTarget",
"kind": "constant",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3408,
3418
],
"filename": "attribute_proxy.js",
"lineno": 80,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003514",
"name": "updates",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "updates",
"longname": "createAttrProxy~attrTarget.updates",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3425,
3446
],
"filename": "attribute_proxy.js",
"lineno": 81,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003516",
"name": "attributes",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "attributes",
"longname": "createAttrProxy~attrTarget.attributes",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3453,
3465
],
"filename": "attribute_proxy.js",
"lineno": 82,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003520",
"name": "repOrders",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "repOrders",
"longname": "createAttrProxy~attrTarget.repOrders",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3472,
3481
],
"filename": "attribute_proxy.js",
"lineno": 83,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003522",
"name": "queue",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "queue",
"longname": "createAttrProxy~attrTarget.queue",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3488,
3495
],
"filename": "attribute_proxy.js",
"lineno": 84,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003524",
"name": "casc",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "casc",
"longname": "createAttrProxy~attrTarget.casc",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3502,
3517
],
"filename": "attribute_proxy.js",
"lineno": 85,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003526",
"name": "alwaysFunctions",
"type": "Identifier",
"value": "alwaysFunctions"
}
},
"undocumented": true,
"name": "alwaysFunctions",
"longname": "createAttrProxy~attrTarget.alwaysFunctions",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3524,
3537
],
"filename": "attribute_proxy.js",
"lineno": 86,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003528",
"name": "processChange",
"type": "Identifier",
"value": "processChange"
}
},
"undocumented": true,
"name": "processChange",
"longname": "createAttrProxy~attrTarget.processChange",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3544,
3560
],
"filename": "attribute_proxy.js",
"lineno": 87,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003530",
"name": "triggerFunctions",
"type": "Identifier",
"value": "triggerFunctions"
}
},
"undocumented": true,
"name": "triggerFunctions",
"longname": "createAttrProxy~attrTarget.triggerFunctions",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3567,
3582
],
"filename": "attribute_proxy.js",
"lineno": 88,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003532",
"name": "initialFunction",
"type": "Identifier",
"value": "initialFunction"
}
},
"undocumented": true,
"name": "initialFunction",
"longname": "createAttrProxy~attrTarget.initialFunction",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3589,
3599
],
"filename": "attribute_proxy.js",
"lineno": 89,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003534",
"name": "getCascObj",
"type": "Identifier",
"value": "getCascObj"
}
},
"undocumented": true,
"name": "getCascObj",
"longname": "createAttrProxy~attrTarget.getCascObj",
"kind": "member",
"memberof": "createAttrProxy~attrTarget",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3615,
6726
],
"filename": "attribute_proxy.js",
"lineno": 91,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003537",
"name": "attrHandler",
"type": "ObjectExpression",
"value": "{\"get\":\"\",\"set\":\"\",\"deleteProperty\":\"\"}"
}
},
"undocumented": true,
"name": "attrHandler",
"longname": "createAttrProxy~attrHandler",
"kind": "constant",
"memberof": "createAttrProxy",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3636,
5800
],
"filename": "attribute_proxy.js",
"lineno": 92,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003540",
"name": "get",
"type": "FunctionExpression"
},
"vars": {
"": null,
"retValue": "createAttrProxy~attrHandler.get~retValue",
"cascRef": "createAttrProxy~attrHandler.get~cascRef",
"numRetVal": "createAttrProxy~attrHandler.get~numRetVal"
}
},
"undocumented": true,
"name": "get",
"longname": "createAttrProxy~attrHandler.get",
"kind": "function",
"memberof": "createAttrProxy~attrHandler",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3883,
3893
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 15,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003556",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3894,
3902
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 26,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003558",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3903,
3907
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 35,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003560",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3908,
3916
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003562",
"name": "callback",
"type": "Identifier",
"value": "callback"
}
},
"undocumented": true,
"name": "callback",
"longname": "callback",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
3917,
3922
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 49,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003564",
"name": "vocal",
"type": "Identifier",
"value": "vocal"
}
},
"undocumented": true,
"name": "vocal",
"longname": "vocal",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4051,
4089
],
"filename": "attribute_proxy.js",
"lineno": 98,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003588",
"name": "triggerName",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "triggerName",
"longname": "<anonymous>~triggerName",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4108,
4164
],
"filename": "attribute_proxy.js",
"lineno": 99,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003597",
"name": "trigger",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "trigger",
"longname": "<anonymous>~trigger",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4130,
4157
],
"filename": "attribute_proxy.js",
"lineno": 99,
"columnno": 38,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003602",
"name": "sourceAttribute",
"type": "Identifier",
"value": "triggerName"
}
},
"undocumented": true,
"name": "sourceAttribute",
"longname": "sourceAttribute",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4205,
4212
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 38,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003611",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4213,
4223
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 46,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003613",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4224,
4232
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 57,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003615",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4233,
4237
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 66,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003617",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4279,
4298
],
"filename": "attribute_proxy.js",
"lineno": 102,
"columnno": 19,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003624",
"name": "updates",
"type": "MemberExpression",
"value": "obj.updates"
}
},
"undocumented": true,
"name": "updates",
"longname": "updates",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4319,
4628
],
"filename": "attribute_proxy.js",
"lineno": 103,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003629",
"name": "trueCallback",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "trueCallback",
"longname": "<anonymous>~trueCallback",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4683,
4721
],
"filename": "attribute_proxy.js",
"lineno": 111,
"columnno": 52,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003681",
"name": "obj.attributes[undefined]",
"type": "MemberExpression",
"value": "obj.updates[undefined]",
"paramnames": []
}
},
"undocumented": true,
"name": "obj.attributes[undefined]",
"longname": "<anonymous>.obj.attributes[undefined]",
"kind": "member",
"memberof": "<anonymous>",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4743,
4763
],
"filename": "attribute_proxy.js",
"lineno": 112,
"columnno": 18,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003693",
"name": "update",
"type": "MemberExpression",
"value": "obj.updates"
}
},
"undocumented": true,
"name": "update",
"longname": "<anonymous>~update",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4778,
4794
],
"filename": "attribute_proxy.js",
"lineno": 113,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003699",
"name": "obj.updates",
"type": "ObjectExpression",
"value": "{}",
"paramnames": []
}
},
"undocumented": true,
"name": "updates",
"longname": "obj.updates",
"kind": "member",
"memberof": "obj",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4992,
5000
],
"filename": "attribute_proxy.js",
"lineno": 120,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003734",
"name": "retValue"
}
},
"undocumented": true,
"name": "retValue",
"longname": "createAttrProxy~attrHandler.get~retValue",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5090,
5120
],
"filename": "attribute_proxy.js",
"lineno": 123,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003747",
"name": "retValue",
"type": "MemberExpression",
"funcscope": "createAttrProxy~attrHandler.get",
"value": "obj.repOrders[undefined]",
"paramnames": []
}
},
"undocumented": true,
"name": "retValue",
"longname": "createAttrProxy~attrHandler.get~retValue",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
5205,
5233
],
"filename": "attribute_proxy.js",
"lineno": 126,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003764",
"name": "retValue",
"type": "MemberExpression",
"funcscope": "createAttrProxy~attrHandler.get",
"value": "obj.updates[undefined]",
"paramnames": []
}
},
"undocumented": true,
"name": "retValue",
"longname": "createAttrProxy~attrHandler.get~retValue",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
5288,
5319
],
"filename": "attribute_proxy.js",
"lineno": 129,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003774",
"name": "retValue",
"type": "MemberExpression",
"funcscope": "createAttrProxy~attrHandler.get",
"value": "obj.attributes[undefined]",
"paramnames": []
}
},
"undocumented": true,
"name": "retValue",
"longname": "createAttrProxy~attrHandler.get~retValue",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
5365,
5432
],
"filename": "attribute_proxy.js",
"lineno": 132,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003783",
"name": "cascRef",
"type": "TemplateLiteral",
"value": ""
}
},
"undocumented": true,
"name": "cascRef",
"longname": "createAttrProxy~attrHandler.get~cascRef",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5447,
5468
],
"filename": "attribute_proxy.js",
"lineno": 133,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003795",
"name": "numRetVal",
"type": "UnaryExpression",
"value": "+retValue"
}
},
"undocumented": true,
"name": "numRetVal",
"longname": "createAttrProxy~attrHandler.get~numRetVal",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5539,
5559
],
"filename": "attribute_proxy.js",
"lineno": 135,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003812",
"name": "retValue",
"type": "Identifier",
"funcscope": "createAttrProxy~attrHandler.get",
"value": "numRetVal",
"paramnames": []
}
},
"undocumented": true,
"name": "retValue",
"longname": "createAttrProxy~attrHandler.get~retValue",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
5705,
5746
],
"filename": "attribute_proxy.js",
"lineno": 137,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003838",
"name": "retValue",
"type": "MemberExpression",
"funcscope": "createAttrProxy~attrHandler.get",
"value": "cascades[undefined].defaultValue",
"paramnames": []
}
},
"undocumented": true,
"name": "retValue",
"longname": "createAttrProxy~attrHandler.get~retValue",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.get",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
5807,
6497
],
"filename": "attribute_proxy.js",
"lineno": 142,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003847",
"name": "set",
"type": "FunctionExpression"
},
"vars": {
"section": "createAttrProxy~attrHandler.set~section",
"obj.repOrders[undefined]": "obj.repOrders[undefined]",
"obj.updates[undefined]": "obj.updates[undefined]"
}
},
"undocumented": true,
"name": "set",
"longname": "createAttrProxy~attrHandler.set",
"kind": "function",
"memberof": "createAttrProxy~attrHandler",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6074,
6113
],
"filename": "attribute_proxy.js",
"lineno": 147,
"columnno": 14,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003872",
"name": "section",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "section",
"longname": "createAttrProxy~attrHandler.set~section",
"kind": "member",
"memberof": "createAttrProxy~attrHandler.set",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6126,
6156
],
"filename": "attribute_proxy.js",
"lineno": 148,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003881",
"name": "obj.repOrders[undefined]",
"type": "Identifier",
"value": "value",
"paramnames": []
}
},
"undocumented": true,
"name": "repOrders[undefined]",
"longname": "obj.repOrders[undefined]",
"kind": "member",
"memberof": "obj",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6304,
6329
],
"filename": "attribute_proxy.js",
"lineno": 152,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003920",
"name": "obj.updates[undefined]",
"type": "Identifier",
"value": "value",
"paramnames": []
}
},
"undocumented": true,
"name": "updates[undefined]",
"longname": "obj.updates[undefined]",
"kind": "member",
"memberof": "obj",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
6504,
6721
],
"filename": "attribute_proxy.js",
"lineno": 159,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003939",
"name": "deleteProperty",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "deleteProperty",
"longname": "createAttrProxy~attrHandler.deleteProperty",
"kind": "function",
"memberof": "createAttrProxy~attrHandler",
"scope": "static"
},
{
"comment": "/**\r\n * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.\r\n * @memberof Utilities\r\n * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.\r\n * @param {object} optionsObj - Object that contains options to use for this registration.\r\n * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.\r\n * @returns {boolean} - True if the registration succeeded, false if it failed.\r\n * @example\r\n * //Basic Registration\r\n * const myFunc = function({trigger,attributes,sections,casc}){};\r\n * k.registerFuncs({myFunc});\r\n * \r\n * //Register a function to run on sheet open\r\n * const openFunc = function({trigger,attributes,sections,casc}){};\r\n * k.registerFuncs({openFunc},{type:['opener']})\r\n * \r\n * //Register a function to run on all events\r\n * const allFunc = function({trigger,attributes,sections,casc}){};\r\n * k.registerFuncs({allFunc},{type:['all']})\r\n */",
"meta": {
"range": [
8036,
9095
],
"filename": "attribute_proxy.js",
"lineno": 189,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003972",
"name": "registerFuncs",
"type": "FunctionExpression"
},
"vars": {
"typeArr": "Utilities.registerFuncs~typeArr",
"typeSwitch": "Utilities.registerFuncs~typeSwitch",
"setState": "Utilities.registerFuncs~setState",
"": null
}
},
"description": "Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "Object with keys that are names to register functions under and values that are functions.",
"name": "funcObj"
},
{
"type": {
"names": [
"object"
]
},
"description": "Object that contains options to use for this registration.",
"name": "optionsObj"
},
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.",
"name": "optionsObj.type"
}
],
"returns": [
{
"type": {
"names": [
"boolean"
]
},
"description": "- True if the registration succeeded, false if it failed."
}
],
"examples": [
"//Basic Registration\rconst myFunc = function({trigger,attributes,sections,casc}){};\rk.registerFuncs({myFunc});\r\r//Register a function to run on sheet open\rconst openFunc = function({trigger,attributes,sections,casc}){};\rk.registerFuncs({openFunc},{type:['opener']})\r\r//Register a function to run on all events\rconst allFunc = function({trigger,attributes,sections,casc}){};\rk.registerFuncs({allFunc},{type:['all']})"
],
"name": "registerFuncs",
"longname": "Utilities.registerFuncs",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8274,
8346
],
"filename": "attribute_proxy.js",
"lineno": 194,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100003999",
"name": "typeArr",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "typeArr",
"longname": "Utilities.registerFuncs~typeArr",
"kind": "constant",
"memberof": "Utilities.registerFuncs",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8357,
8506
],
"filename": "attribute_proxy.js",
"lineno": 195,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004014",
"name": "typeSwitch",
"type": "ObjectExpression",
"value": "{\"undefined\":\"\"}"
}
},
"undocumented": true,
"name": "typeSwitch",
"longname": "Utilities.registerFuncs~typeSwitch",
"kind": "constant",
"memberof": "Utilities.registerFuncs",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8377,
8398
],
"filename": "attribute_proxy.js",
"lineno": 196,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004017",
"name": "opener",
"type": "Identifier",
"value": "openHandlers"
}
},
"undocumented": true,
"name": "opener",
"longname": "Utilities.registerFuncs~typeSwitch.opener",
"kind": "member",
"memberof": "Utilities.registerFuncs~typeSwitch",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8405,
8429
],
"filename": "attribute_proxy.js",
"lineno": 197,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004019",
"name": "updater",
"type": "Identifier",
"value": "updateHandlers"
}
},
"undocumented": true,
"name": "updater",
"longname": "Utilities.registerFuncs~typeSwitch.updater",
"kind": "member",
"memberof": "Utilities.registerFuncs~typeSwitch",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8436,
8455
],
"filename": "attribute_proxy.js",
"lineno": 198,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004021",
"name": "new",
"type": "Identifier",
"value": "initialSetups"
}
},
"undocumented": true,
"name": "new",
"longname": "Utilities.registerFuncs~typeSwitch.new",
"kind": "member",
"memberof": "Utilities.registerFuncs~typeSwitch",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8462,
8479
],
"filename": "attribute_proxy.js",
"lineno": 199,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004023",
"name": "all",
"type": "Identifier",
"value": "allHandlers"
}
},
"undocumented": true,
"name": "all",
"longname": "Utilities.registerFuncs~typeSwitch.all",
"kind": "member",
"memberof": "Utilities.registerFuncs~typeSwitch",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8486,
8501
],
"filename": "attribute_proxy.js",
"lineno": 200,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004025",
"name": "default",
"type": "Identifier",
"value": "funcs"
}
},
"undocumented": true,
"name": "default",
"longname": "Utilities.registerFuncs~typeSwitch.default",
"kind": "member",
"memberof": "Utilities.registerFuncs~typeSwitch",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8515,
8523
],
"filename": "attribute_proxy.js",
"lineno": 202,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004028",
"name": "setState"
}
},
"undocumented": true,
"name": "setState",
"longname": "Utilities.registerFuncs~setState",
"kind": "member",
"memberof": "Utilities.registerFuncs",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8722,
8738
],
"filename": "attribute_proxy.js",
"lineno": 207,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004067",
"name": "setState",
"type": "Literal",
"funcscope": "<anonymous>",
"value": false,
"paramnames": []
}
},
"undocumented": true,
"name": "setState",
"longname": "<anonymous>~setState",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
8795,
8825
],
"filename": "attribute_proxy.js",
"lineno": 209,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004077",
"name": "typeSwitch[undefined][undefined]",
"type": "Identifier",
"funcscope": "Utilities.registerFuncs",
"value": "value",
"paramnames": []
}
},
"undocumented": true,
"name": "undefined][undefined]",
"longname": "Utilities.registerFuncs~typeSwitch.undefined][undefined]",
"kind": "member",
"memberof": "Utilities.registerFuncs~typeSwitch",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8836,
8880
],
"filename": "attribute_proxy.js",
"lineno": 210,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004085",
"name": "setState",
"type": "ConditionalExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "setState",
"longname": "<anonymous>~setState",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
9030,
9046
],
"filename": "attribute_proxy.js",
"lineno": 213,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004102",
"name": "setState",
"type": "Literal",
"funcscope": "<anonymous>",
"value": false,
"paramnames": []
}
},
"undocumented": true,
"name": "setState",
"longname": "<anonymous>~setState",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
9098,
9134
],
"filename": "attribute_proxy.js",
"lineno": 219,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004108",
"name": "kFuncs.registerFuncs",
"type": "Identifier",
"value": "registerFuncs",
"paramnames": []
}
},
"undocumented": true,
"name": "registerFuncs",
"longname": "kFuncs.registerFuncs",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Function that sets up the action calls used in the roller mixin.\r\n * @memberof Sheetworkers\r\n * @param {object} attributes - The attribute values of the character\r\n * @param {object[]} sections - All the repeating section IDs\r\n */",
"meta": {
"range": [
9385,
9873
],
"filename": "attribute_proxy.js",
"lineno": 227,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004114",
"name": "setActionCalls",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Function that sets up the action calls used in the roller mixin.",
"memberof": "Sheetworkers",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "The attribute values of the character",
"name": "attributes"
},
{
"type": {
"names": [
"Array.<object>"
]
},
"description": "All the repeating section IDs",
"name": "sections"
}
],
"name": "setActionCalls",
"longname": "Sheetworkers.setActionCalls",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9412,
9422
],
"filename": "attribute_proxy.js",
"lineno": 227,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004118",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
9423,
9431
],
"filename": "attribute_proxy.js",
"lineno": 227,
"columnno": 44,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004120",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
9536,
9573
],
"filename": "attribute_proxy.js",
"lineno": 230,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004140",
"name": "fieldAction",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "fieldAction",
"longname": "<anonymous>~fieldAction",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
9643,
9750
],
"filename": "attribute_proxy.js",
"lineno": 233,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004162",
"name": "attributes[undefined]",
"type": "TemplateLiteral",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "attributes[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
9782,
9855
],
"filename": "attribute_proxy.js",
"lineno": 236,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004187",
"name": "attributes[undefined]",
"type": "TemplateLiteral",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "attributes[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
9876,
9913
],
"filename": "attribute_proxy.js",
"lineno": 240,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004203",
"name": "funcs.setActionCalls",
"type": "Identifier",
"value": "setActionCalls",
"paramnames": []
}
},
"undocumented": true,
"name": "setActionCalls",
"longname": "funcs.setActionCalls",
"kind": "member",
"memberof": "funcs",
"scope": "static"
},
{
"comment": "/**\r\n * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.\r\n * @memberof Sheetworkers\r\n * @param {string} funcName - The name of the function to invoke.\r\n * @param {...any} args - The arguments to call the function with.\r\n * @returns {function|null}\r\n * @example\r\n * //Call myFunc with two arguments\r\n * k.callFunc('myFunc','an argument','another argument');\r\n */",
"meta": {
"range": [
10468,
10689
],
"filename": "attribute_proxy.js",
"lineno": 252,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004209",
"name": "callFunc",
"type": "FunctionExpression"
}
},
"description": "Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.",
"memberof": "Sheetworkers",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The name of the function to invoke.",
"name": "funcName"
},
{
"type": {
"names": [
"any"
]
},
"variable": true,
"description": "The arguments to call the function with.",
"name": "args"
}
],
"returns": [
{
"type": {
"names": [
"function",
"null"
]
}
}
],
"examples": [
"//Call myFunc with two arguments\rk.callFunc('myFunc','an argument','another argument');"
],
"name": "callFunc",
"longname": "Sheetworkers.callFunc",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
10692,
10718
],
"filename": "attribute_proxy.js",
"lineno": 261,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004246",
"name": "kFuncs.callFunc",
"type": "Identifier",
"value": "callFunc",
"paramnames": []
}
},
"undocumented": true,
"name": "callFunc",
"longname": "kFuncs.callFunc",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * The K-scaffold provides several variables to allow your scripts to tap into its information flow.\r\n * @namespace Sheetworkers.Variables\r\n */",
"meta": {
"filename": "kvariables.js",
"lineno": 1,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "The K-scaffold provides several variables to allow your scripts to tap into its information flow.",
"kind": "namespace",
"name": "Variables",
"memberof": "Sheetworkers",
"longname": "Sheetworkers.Variables",
"scope": "static"
},
{
"comment": "/**\r\n * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`\r\n * @memberof Variables\r\n * @var\r\n * @type {string}\r\n */",
"meta": {
"range": [
347,
384
],
"filename": "kvariables.js",
"lineno": 11,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004254",
"name": "sheetName",
"type": "Literal",
"value": "kScaffold Powered Sheet"
}
},
"description": "This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`",
"memberof": "Variables",
"kind": "member",
"type": {
"names": [
"string"
]
},
"name": "sheetName",
"longname": "Variables.sheetName",
"scope": "static",
"params": []
},
{
"comment": "",
"meta": {
"range": [
387,
415
],
"filename": "kvariables.js",
"lineno": 12,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004258",
"name": "kFuncs.sheetName",
"type": "Identifier",
"value": "sheetName",
"paramnames": []
}
},
"undocumented": true,
"name": "sheetName",
"longname": "kFuncs.sheetName",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n\t* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`\r\n * @memberof Variables\r\n\t* @var\r\n\t* @type {number}\r\n\t*/",
"meta": {
"range": [
690,
701
],
"filename": "kvariables.js",
"lineno": 19,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004264",
"name": "version",
"type": "Literal",
"value": 0
}
},
"description": "This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`",
"memberof": "Variables",
"kind": "member",
"type": {
"names": [
"number"
]
},
"name": "version",
"longname": "Variables.version",
"scope": "static",
"params": []
},
{
"comment": "",
"meta": {
"range": [
704,
728
],
"filename": "kvariables.js",
"lineno": 20,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004268",
"name": "kFuncs.version",
"type": "Identifier",
"value": "version",
"paramnames": []
}
},
"undocumented": true,
"name": "version",
"longname": "kFuncs.version",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n\t* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.\r\n * @memberof Variables\r\n\t* @var\r\n\t* @type {boolean}\r\n\t*/",
"meta": {
"range": [
1054,
1071
],
"filename": "kvariables.js",
"lineno": 27,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004274",
"name": "debugMode",
"type": "Literal",
"value": false
}
},
"description": "A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.",
"memberof": "Variables",
"kind": "member",
"type": {
"names": [
"boolean"
]
},
"name": "debugMode",
"longname": "Variables.debugMode",
"scope": "static",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1074,
1102
],
"filename": "kvariables.js",
"lineno": 28,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004278",
"name": "kFuncs.debugMode",
"type": "Identifier",
"value": "debugMode",
"paramnames": []
}
},
"undocumented": true,
"name": "debugMode",
"longname": "kFuncs.debugMode",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1111,
1121
],
"filename": "kvariables.js",
"lineno": 29,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004284",
"name": "funcs",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "funcs",
"longname": "funcs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1124,
1144
],
"filename": "kvariables.js",
"lineno": 30,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004288",
"name": "kFuncs.funcs",
"type": "Identifier",
"value": "funcs",
"paramnames": []
}
},
"undocumented": true,
"name": "funcs",
"longname": "kFuncs.funcs",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1153,
1172
],
"filename": "kvariables.js",
"lineno": 31,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004294",
"name": "updateHandlers",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "updateHandlers",
"longname": "updateHandlers",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1181,
1198
],
"filename": "kvariables.js",
"lineno": 32,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004298",
"name": "openHandlers",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "openHandlers",
"longname": "openHandlers",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1207,
1225
],
"filename": "kvariables.js",
"lineno": 33,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004302",
"name": "initialSetups",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "initialSetups",
"longname": "initialSetups",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1234,
1250
],
"filename": "kvariables.js",
"lineno": 34,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004306",
"name": "allHandlers",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "allHandlers",
"longname": "allHandlers",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1259,
1272
],
"filename": "kvariables.js",
"lineno": 35,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004310",
"name": "addFuncs",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "addFuncs",
"longname": "addFuncs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1283,
1311
],
"filename": "kvariables.js",
"lineno": 37,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004314",
"name": "kscaffoldJSVersion",
"type": "Literal",
"value": "1.0.0"
}
},
"undocumented": true,
"name": "kscaffoldJSVersion",
"longname": "kscaffoldJSVersion",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1320,
1349
],
"filename": "kvariables.js",
"lineno": 38,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004318",
"name": "kscaffoldPUGVersion",
"type": "Literal",
"value": "1.0.0"
}
},
"undocumented": true,
"name": "kscaffoldPUGVersion",
"longname": "kscaffoldPUGVersion",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
96,
110
],
"filename": "listeners.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004324",
"name": "listeners",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "listeners",
"longname": "listeners",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.\r\n * @memberof Variables\r\n * @var\r\n * @type {array}\r\n */",
"meta": {
"range": [
290,
582
],
"filename": "listeners.js",
"lineno": 11,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004328",
"name": "baseGet",
"type": "CallExpression",
"value": ""
}
},
"description": "The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.",
"memberof": "Variables",
"kind": "constant",
"type": {
"names": [
"array"
]
},
"name": "baseGet",
"longname": "Variables.baseGet",
"scope": "static",
"params": []
},
{
"comment": "",
"meta": {
"range": [
499,
553
],
"filename": "listeners.js",
"lineno": 16,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004370",
"name": "listeners[undefined]",
"type": "MemberExpression",
"value": "detailObj.listenerFunc",
"paramnames": []
}
},
"undocumented": true,
"name": "listeners[undefined]",
"longname": "listeners[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
585,
609
],
"filename": "listeners.js",
"lineno": 20,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004383",
"name": "kFuncs.baseGet",
"type": "Identifier",
"value": "baseGet",
"paramnames": []
}
},
"undocumented": true,
"name": "baseGet",
"longname": "kFuncs.baseGet",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
620,
1058
],
"filename": "listeners.js",
"lineno": 22,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004389",
"name": "registerEventHandlers",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "registerEventHandlers",
"longname": "registerEventHandlers",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
701,
728
],
"filename": "listeners.js",
"lineno": 24,
"columnno": 9,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004402",
"name": "funcKeys",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "funcKeys",
"longname": "funcKeys",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
729,
734
],
"filename": "listeners.js",
"lineno": 24,
"columnno": 37,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004408",
"name": "funcs",
"type": "Identifier",
"value": "funcs"
}
},
"undocumented": true,
"name": "funcs",
"longname": "funcs",
"kind": "member",
"scope": "global"
},
{
"comment": "/**\r\n * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.\r\n * @memberof Sheetworkers\r\n * @param {object} event - The R20 event object\r\n */",
"meta": {
"range": [
1397,
2100
],
"filename": "listeners.js",
"lineno": 42,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004456",
"name": "addItem",
"type": "FunctionExpression"
},
"vars": {
"undefined": null,
"section": "Sheetworkers.addItem~section",
"": null
}
},
"description": "Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.",
"memberof": "Sheetworkers",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "The R20 event object",
"name": "event"
}
],
"name": "addItem",
"longname": "Sheetworkers.addItem",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1486,
1522
],
"filename": "listeners.js",
"lineno": 44,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004470",
"name": "section",
"type": "CallExpression",
"funcscope": "Sheetworkers.addItem",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "section",
"longname": "Sheetworkers.addItem~section",
"kind": "member",
"memberof": "Sheetworkers.addItem",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
1546,
2090
],
"filename": "listeners.js",
"lineno": 46,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004482",
"name": "callback",
"type": "ArrowFunctionExpression"
},
"vars": {
"row": "callback~row",
"attributes[undefined]": null,
"trigger": "callback~trigger",
"": null
}
},
"undocumented": true,
"name": "callback",
"longname": "callback",
"kind": "function",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1598,
1636
],
"filename": "listeners.js",
"lineno": 47,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004489",
"name": "row",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "row",
"longname": "callback~row",
"kind": "member",
"memberof": "callback",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1652,
1655
],
"filename": "listeners.js",
"lineno": 48,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004499",
"name": "row",
"type": "Identifier",
"value": "row"
}
},
"undocumented": true,
"name": "row",
"longname": "row",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1666,
1696
],
"filename": "listeners.js",
"lineno": 49,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004502",
"name": "attributes[undefined]",
"type": "Literal",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "attributes[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1721,
1731
],
"filename": "listeners.js",
"lineno": 50,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004514",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1732,
1740
],
"filename": "listeners.js",
"lineno": 50,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004516",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1757,
1808
],
"filename": "listeners.js",
"lineno": 51,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004519",
"name": "trigger",
"type": "MemberExpression",
"value": "cascades[undefined]"
}
},
"undocumented": true,
"name": "trigger",
"longname": "callback~trigger",
"kind": "constant",
"memberof": "callback",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1962,
1972
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 29,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004555",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1973,
1981
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004557",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1982,
1986
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 49,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004559",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1987,
1994
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 54,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004561",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2056,
2066
],
"filename": "listeners.js",
"lineno": 59,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004569",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2067,
2075
],
"filename": "listeners.js",
"lineno": 59,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004571",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2076,
2080
],
"filename": "listeners.js",
"lineno": 59,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004573",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2103,
2126
],
"filename": "listeners.js",
"lineno": 63,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004576",
"name": "funcs.addItem",
"type": "Identifier",
"value": "addItem",
"paramnames": []
}
},
"undocumented": true,
"name": "addItem",
"longname": "funcs.addItem",
"kind": "member",
"memberof": "funcs",
"scope": "static"
},
{
"comment": "/**\r\n * @namespace {object} mock20\r\n */",
"meta": {
"filename": "mock20.js",
"lineno": 4,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"kind": "namespace",
"name": "mock20",
"type": {
"names": [
"object"
]
},
"description": "mock20",
"longname": "mock20",
"scope": "global"
},
{
"comment": "/**\r\n * @memberof mock20\r\n * @var\r\n * A mock environment variable for keeping track of triggers, other character information, and predefined query results.\r\n * @property {array} triggers - The triggers that have been registered by `on`\r\n * @property {object} queryResponses - Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.\r\n */",
"meta": {
"filename": "mock20.js",
"lineno": 7,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"memberof": "mock20",
"kind": "member",
"name": "A",
"properties": [
{
"type": {
"names": [
"array"
]
},
"description": "The triggers that have been registered by `on`",
"name": "triggers"
},
{
"type": {
"names": [
"object"
]
},
"description": "Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.",
"name": "queryResponses"
}
],
"scope": "static",
"longname": "mock20.A"
},
{
"comment": "",
"meta": {
"range": [
661,
945
],
"filename": "mock20.js",
"lineno": 14,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004592",
"name": "environment",
"type": "ObjectExpression",
"value": "{\"triggers\":\"\",\"otherCharacters\":\"\",\"queryResponses\":\"\"}"
}
},
"undocumented": true,
"name": "environment",
"longname": "environment",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
711,
723
],
"filename": "mock20.js",
"lineno": 16,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004595",
"name": "triggers",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "triggers",
"longname": "environment.triggers",
"kind": "member",
"memberof": "environment",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
728,
832
],
"filename": "mock20.js",
"lineno": 17,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004597",
"name": "otherCharacters",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "otherCharacters",
"longname": "environment.otherCharacters",
"kind": "member",
"memberof": "environment",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
837,
942
],
"filename": "mock20.js",
"lineno": 20,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004599",
"name": "queryResponses",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "queryResponses",
"longname": "environment.queryResponses",
"kind": "member",
"memberof": "environment",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
948,
980
],
"filename": "mock20.js",
"lineno": 24,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004602",
"name": "global.environment",
"type": "Identifier",
"value": "environment",
"paramnames": []
}
},
"undocumented": true,
"name": "environment",
"longname": "global.environment",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
991,
1075
],
"filename": "mock20.js",
"lineno": 26,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004608",
"name": "on",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "on",
"longname": "on",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1054,
1061
],
"filename": "mock20.js",
"lineno": 27,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004626",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1063,
1067
],
"filename": "mock20.js",
"lineno": 27,
"columnno": 39,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004628",
"name": "func",
"type": "Identifier",
"value": "func"
}
},
"undocumented": true,
"name": "func",
"longname": "func",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1078,
1092
],
"filename": "mock20.js",
"lineno": 29,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004631",
"name": "global.on",
"type": "Identifier",
"value": "on",
"paramnames": []
}
},
"undocumented": true,
"name": "on",
"longname": "global.on",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1101,
1343
],
"filename": "mock20.js",
"lineno": 30,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004637",
"name": "getAttrs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "getAttrs",
"longname": "getAttrs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1148,
1159
],
"filename": "mock20.js",
"lineno": 31,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004648",
"name": "values",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "values",
"longname": "<anonymous>~values",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1175,
1179
],
"filename": "mock20.js",
"lineno": 32,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004653",
"name": "attr"
}
},
"undocumented": true,
"name": "attr",
"longname": "<anonymous>~attr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1233,
1276
],
"filename": "mock20.js",
"lineno": 33,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004664",
"name": "values[undefined]",
"type": "MemberExpression",
"funcscope": "<anonymous>",
"value": "environment.attributes[undefined]",
"paramnames": []
}
},
"undocumented": true,
"name": "undefined]",
"longname": "<anonymous>~values.undefined]",
"kind": "member",
"memberof": "<anonymous>~values",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1346,
1372
],
"filename": "mock20.js",
"lineno": 37,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004683",
"name": "global.getAttrs",
"type": "Identifier",
"value": "getAttrs",
"paramnames": []
}
},
"undocumented": true,
"name": "getAttrs",
"longname": "global.getAttrs",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1381,
1640
],
"filename": "mock20.js",
"lineno": 38,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004689",
"name": "setAttrs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "setAttrs",
"longname": "setAttrs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1480,
1497
],
"filename": "mock20.js",
"lineno": 39,
"columnno": 49,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004709",
"name": "callback",
"type": "Identifier",
"funcscope": "<anonymous>",
"value": "params",
"paramnames": []
}
},
"undocumented": true,
"name": "callback",
"longname": "<anonymous>~callback",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
1513,
1517
],
"filename": "mock20.js",
"lineno": 40,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004714",
"name": "attr"
}
},
"undocumented": true,
"name": "attr",
"longname": "<anonymous>~attr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1536,
1579
],
"filename": "mock20.js",
"lineno": 41,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004719",
"name": "environment.attributes[undefined]",
"type": "MemberExpression",
"value": "submit[undefined]",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "environment.attributes[undefined]",
"kind": "member",
"memberof": "environment",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1643,
1669
],
"filename": "mock20.js",
"lineno": 45,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004737",
"name": "global.setAttrs",
"type": "Identifier",
"value": "setAttrs",
"paramnames": []
}
},
"undocumented": true,
"name": "setAttrs",
"longname": "global.setAttrs",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1678,
2093
],
"filename": "mock20.js",
"lineno": 46,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004743",
"name": "getSectionIDs",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "getSectionIDs",
"longname": "getSectionIDs",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1734,
1742
],
"filename": "mock20.js",
"lineno": 47,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004754",
"name": "ids",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "ids",
"longname": "<anonymous>~ids",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1753,
1837
],
"filename": "mock20.js",
"lineno": 48,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004758",
"name": "sectionName",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "sectionName",
"longname": "<anonymous>~sectionName",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1848,
1883
],
"filename": "mock20.js",
"lineno": 49,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004774",
"name": "attributes",
"type": "MemberExpression",
"value": "environment.attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "<anonymous>~attributes",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1899,
1903
],
"filename": "mock20.js",
"lineno": 50,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004781",
"name": "attr"
}
},
"undocumented": true,
"name": "attr",
"longname": "<anonymous>~attr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2007,
2032
],
"filename": "mock20.js",
"lineno": 53,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004806",
"name": "idMap",
"type": "ArrayExpression",
"value": "[\"\"]"
}
},
"undocumented": true,
"name": "idMap",
"longname": "<anonymous>~idMap",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2096,
2132
],
"filename": "mock20.js",
"lineno": 56,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004823",
"name": "global.getSectionIDs",
"type": "Identifier",
"value": "getSectionIDs",
"paramnames": []
}
},
"undocumented": true,
"name": "getSectionIDs",
"longname": "global.getSectionIDs",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2141,
2511
],
"filename": "mock20.js",
"lineno": 57,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004829",
"name": "getSectionIDsSync",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "getSectionIDsSync",
"longname": "getSectionIDsSync",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2191,
2199
],
"filename": "mock20.js",
"lineno": 58,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004839",
"name": "ids",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "ids",
"longname": "<anonymous>~ids",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2210,
2294
],
"filename": "mock20.js",
"lineno": 59,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004843",
"name": "sectionName",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "sectionName",
"longname": "<anonymous>~sectionName",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2305,
2340
],
"filename": "mock20.js",
"lineno": 60,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004859",
"name": "attributes",
"type": "MemberExpression",
"value": "environment.attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "<anonymous>~attributes",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2356,
2360
],
"filename": "mock20.js",
"lineno": 61,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004866",
"name": "attr"
}
},
"undocumented": true,
"name": "attr",
"longname": "<anonymous>~attr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2464,
2489
],
"filename": "mock20.js",
"lineno": 64,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004891",
"name": "idMap",
"type": "ArrayExpression",
"value": "[\"\"]"
}
},
"undocumented": true,
"name": "idMap",
"longname": "<anonymous>~idMap",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2514,
2558
],
"filename": "mock20.js",
"lineno": 67,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004901",
"name": "global.getSectionIDsSync",
"type": "Identifier",
"value": "getSectionIDsSync",
"paramnames": []
}
},
"undocumented": true,
"name": "getSectionIDsSync",
"longname": "global.getSectionIDsSync",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2567,
2763
],
"filename": "mock20.js",
"lineno": 68,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004907",
"name": "removeRepeatingRow",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "removeRepeatingRow",
"longname": "removeRepeatingRow",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2613,
2648
],
"filename": "mock20.js",
"lineno": 69,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004917",
"name": "attributes",
"type": "MemberExpression",
"value": "environment.attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "<anonymous>~attributes",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2664,
2668
],
"filename": "mock20.js",
"lineno": 70,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004924",
"name": "attr"
}
},
"undocumented": true,
"name": "attr",
"longname": "<anonymous>~attr",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2766,
2812
],
"filename": "mock20.js",
"lineno": 74,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004945",
"name": "global.removeRepeatingRow",
"type": "Identifier",
"value": "removeRepeatingRow",
"paramnames": []
}
},
"undocumented": true,
"name": "removeRepeatingRow",
"longname": "global.removeRepeatingRow",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2821,
3641
],
"filename": "mock20.js",
"lineno": 75,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004951",
"name": "getCompendiumPage",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "getCompendiumPage",
"longname": "getCompendiumPage",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2881,
2903
],
"filename": "mock20.js",
"lineno": 76,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004962",
"name": "pages",
"type": "Identifier",
"value": "compendiumData"
}
},
"undocumented": true,
"name": "pages",
"longname": "<anonymous>~pages",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3151,
3237
],
"filename": "mock20.js",
"lineno": 83,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004987",
"name": "response",
"type": "ObjectExpression",
"value": "{\"Name\":\"\",\"Category\":\"\",\"data\":\"\"}"
}
},
"undocumented": true,
"name": "response",
"longname": "<anonymous>~response",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3171,
3185
],
"filename": "mock20.js",
"lineno": 84,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004990",
"name": "Name",
"type": "Identifier",
"value": "pageName"
}
},
"undocumented": true,
"name": "Name",
"longname": "<anonymous>~response.Name",
"kind": "member",
"memberof": "<anonymous>~response",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3194,
3212
],
"filename": "mock20.js",
"lineno": 85,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004992",
"name": "Category",
"type": "Identifier",
"value": "category"
}
},
"undocumented": true,
"name": "Category",
"longname": "<anonymous>~response.Category",
"kind": "member",
"memberof": "<anonymous>~response",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3221,
3229
],
"filename": "mock20.js",
"lineno": 86,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100004994",
"name": "data",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "data",
"longname": "<anonymous>~response.data",
"kind": "member",
"memberof": "<anonymous>~response",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3264,
3299
],
"filename": "mock20.js",
"lineno": 88,
"columnno": 24,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005001",
"name": "response.data",
"type": "MemberExpression",
"funcscope": "<anonymous>",
"value": "pages[undefined].data",
"paramnames": []
}
},
"undocumented": true,
"name": "data",
"longname": "<anonymous>~response.data",
"kind": "member",
"memberof": "<anonymous>~response",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3413,
3427
],
"filename": "mock20.js",
"lineno": 91,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005027",
"name": "pageArray",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "pageArray",
"longname": "<anonymous>~pageArray",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3445,
3449
],
"filename": "mock20.js",
"lineno": 92,
"columnno": 15,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005032",
"name": "page"
}
},
"undocumented": true,
"name": "page",
"longname": "<anonymous>~page",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3644,
3688
],
"filename": "mock20.js",
"lineno": 98,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005066",
"name": "global.getCompendiumPage",
"type": "Identifier",
"value": "getCompendiumPage",
"paramnames": []
}
},
"undocumented": true,
"name": "getCompendiumPage",
"longname": "global.getCompendiumPage",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
3697,
4382
],
"filename": "mock20.js",
"lineno": 99,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005072",
"name": "generateUUID",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "generateUUID",
"longname": "generateUUID",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3733,
3738
],
"filename": "mock20.js",
"lineno": 100,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005081",
"name": "a",
"type": "Literal",
"value": 0
}
},
"undocumented": true,
"name": "a",
"longname": "<anonymous>~a",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3745,
3751
],
"filename": "mock20.js",
"lineno": 101,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005084",
"name": "b",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "b",
"longname": "<anonymous>~b",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3787,
3815
],
"filename": "mock20.js",
"lineno": 103,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005092",
"name": "c",
"type": "BinaryExpression",
"value": ""
}
},
"undocumented": true,
"name": "c",
"longname": "<anonymous>~c",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3824,
3835
],
"filename": "mock20.js",
"lineno": 104,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005101",
"name": "d",
"type": "BinaryExpression",
"value": ""
}
},
"undocumented": true,
"name": "d",
"longname": "<anonymous>~d",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3842,
3847
],
"filename": "mock20.js",
"lineno": 105,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005107",
"name": "a",
"type": "Identifier",
"funcscope": "<anonymous>",
"value": "c",
"paramnames": []
}
},
"undocumented": true,
"name": "a",
"longname": "<anonymous>~a",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
3863,
3875
],
"filename": "mock20.js",
"lineno": 106,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005112",
"name": "e",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "e",
"longname": "<anonymous>~e",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3877,
3882
],
"filename": "mock20.js",
"lineno": 106,
"columnno": 27,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005117",
"name": "f",
"type": "Literal",
"value": 7
}
},
"undocumented": true,
"name": "f",
"longname": "<anonymous>~f",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
3905,
3993
],
"filename": "mock20.js",
"lineno": 107,
"columnno": 7,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005127",
"name": "e[undefined]",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "undefined]",
"longname": "<anonymous>~e.undefined]",
"kind": "member",
"memberof": "<anonymous>~e",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4004,
4026
],
"filename": "mock20.js",
"lineno": 108,
"columnno": 7,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005138",
"name": "c",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "c",
"longname": "<anonymous>~c",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
4034,
4048
],
"filename": "mock20.js",
"lineno": 109,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005148",
"name": "c",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "c",
"longname": "<anonymous>~c",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
4076,
4082
],
"filename": "mock20.js",
"lineno": 111,
"columnno": 11,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005159",
"name": "f",
"type": "Literal",
"funcscope": "<anonymous>",
"value": 11,
"paramnames": []
}
},
"undocumented": true,
"name": "f",
"longname": "<anonymous>~f",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
4112,
4120
],
"filename": "mock20.js",
"lineno": 111,
"columnno": 47,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005174",
"name": "b[undefined]",
"type": "Literal",
"funcscope": "<anonymous>",
"value": 0,
"paramnames": []
}
},
"undocumented": true,
"name": "undefined]",
"longname": "<anonymous>~b.undefined]",
"kind": "member",
"memberof": "<anonymous>~b",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4154,
4159
],
"filename": "mock20.js",
"lineno": 113,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005185",
"name": "f",
"type": "Literal",
"funcscope": "<anonymous>",
"value": 0,
"paramnames": []
}
},
"undocumented": true,
"name": "f",
"longname": "<anonymous>~f",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
4174,
4211
],
"filename": "mock20.js",
"lineno": 113,
"columnno": 36,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005194",
"name": "b[undefined]",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "undefined]",
"longname": "<anonymous>~b.undefined]",
"kind": "member",
"memberof": "<anonymous>~b",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4223,
4228
],
"filename": "mock20.js",
"lineno": 114,
"columnno": 9,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005209",
"name": "f",
"type": "Literal",
"funcscope": "<anonymous>",
"value": 0,
"paramnames": []
}
},
"undocumented": true,
"name": "f",
"longname": "<anonymous>~f",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
4250,
4334
],
"filename": "mock20.js",
"lineno": 115,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005218",
"name": "c",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "c",
"longname": "<anonymous>~c",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
4385,
4419
],
"filename": "mock20.js",
"lineno": 119,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005235",
"name": "global.generateUUID",
"type": "Identifier",
"value": "generateUUID",
"paramnames": []
}
},
"undocumented": true,
"name": "generateUUID",
"longname": "global.generateUUID",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4428,
4506
],
"filename": "mock20.js",
"lineno": 120,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005241",
"name": "generateRowID",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "generateRowID",
"longname": "generateRowID",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4509,
4545
],
"filename": "mock20.js",
"lineno": 123,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005258",
"name": "global.generateRowID",
"type": "Identifier",
"value": "generateRowID",
"paramnames": []
}
},
"undocumented": true,
"name": "generateRowID",
"longname": "global.generateRowID",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4554,
4899
],
"filename": "mock20.js",
"lineno": 124,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005264",
"name": "simulateEvent",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "simulateEvent",
"longname": "simulateEvent",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4647,
4710
],
"filename": "mock20.js",
"lineno": 126,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005284",
"name": "splitTriggers",
"type": "LogicalExpression",
"value": ""
}
},
"undocumented": true,
"name": "splitTriggers",
"longname": "<anonymous>~splitTriggers",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4833,
4856
],
"filename": "mock20.js",
"lineno": 130,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005317",
"name": "sourceAttribute",
"type": "Literal",
"value": "test"
}
},
"undocumented": true,
"name": "sourceAttribute",
"longname": "sourceAttribute",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4902,
4938
],
"filename": "mock20.js",
"lineno": 136,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005320",
"name": "global.simulateEvent",
"type": "Identifier",
"value": "simulateEvent",
"paramnames": []
}
},
"undocumented": true,
"name": "simulateEvent",
"longname": "global.simulateEvent",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4947,
4988
],
"filename": "mock20.js",
"lineno": 137,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005326",
"name": "getTranslationByKey",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "getTranslationByKey",
"longname": "getTranslationByKey",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4991,
5039
],
"filename": "mock20.js",
"lineno": 138,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005336",
"name": "global.getTranslationByKey",
"type": "Identifier",
"value": "getTranslationByKey",
"paramnames": []
}
},
"undocumented": true,
"name": "getTranslationByKey",
"longname": "global.getTranslationByKey",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
5117,
5286
],
"filename": "mock20.js",
"lineno": 141,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005342",
"name": "extractRollTemplate",
"type": "ArrowFunctionExpression"
},
"vars": {
"rollTemplate": "extractRollTemplate~rollTemplate",
"environment.attributes.__rolltemplate": "environment.attributes.__rolltemplate"
}
},
"undocumented": true,
"name": "extractRollTemplate",
"longname": "extractRollTemplate",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5166,
5225
],
"filename": "mock20.js",
"lineno": 142,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005348",
"name": "rollTemplate",
"type": "ChainExpression",
"value": ""
}
},
"undocumented": true,
"name": "rollTemplate",
"longname": "extractRollTemplate~rollTemplate",
"kind": "constant",
"memberof": "extractRollTemplate",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5230,
5282
],
"filename": "mock20.js",
"lineno": 143,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005352",
"name": "environment.attributes.__rolltemplate",
"type": "Identifier",
"value": "rollTemplate",
"paramnames": []
}
},
"undocumented": true,
"name": "__rolltemplate",
"longname": "environment.attributes.__rolltemplate",
"kind": "member",
"memberof": "environment.attributes",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
5297,
5517
],
"filename": "mock20.js",
"lineno": 146,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005360",
"name": "cleanRollElements",
"type": "ArrowFunctionExpression"
},
"vars": {
"cleanText": "cleanRollElements~cleanText",
"splitText": "cleanRollElements~splitText"
}
},
"undocumented": true,
"name": "cleanRollElements",
"longname": "cleanRollElements",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5339,
5435
],
"filename": "mock20.js",
"lineno": 147,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005366",
"name": "cleanText",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "cleanText",
"longname": "cleanRollElements~cleanText",
"kind": "constant",
"memberof": "cleanRollElements",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5446,
5492
],
"filename": "mock20.js",
"lineno": 150,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005380",
"name": "splitText",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "splitText",
"longname": "cleanRollElements~splitText",
"kind": "constant",
"memberof": "cleanRollElements",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5528,
5770
],
"filename": "mock20.js",
"lineno": 154,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005390",
"name": "extractRollElements",
"type": "ArrowFunctionExpression"
},
"vars": {
"rollElements": "extractRollElements~rollElements"
}
},
"undocumented": true,
"name": "extractRollElements",
"longname": "extractRollElements",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5577,
5639
],
"filename": "mock20.js",
"lineno": 155,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005396",
"name": "rollElements",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "rollElements",
"longname": "extractRollElements~rollElements",
"kind": "constant",
"memberof": "extractRollElements",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5781,
5846
],
"filename": "mock20.js",
"lineno": 160,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005425",
"name": "getExpression",
"type": "ArrowFunctionExpression"
}
},
"undocumented": true,
"name": "getExpression",
"longname": "getExpression",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5857,
6050
],
"filename": "mock20.js",
"lineno": 162,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005436",
"name": "getDiceOrHalf",
"type": "ArrowFunctionExpression"
},
"vars": {
"diceStack": "getDiceOrHalf~diceStack"
}
},
"undocumented": true,
"name": "getDiceOrHalf",
"longname": "getDiceOrHalf",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5894,
5927
],
"filename": "mock20.js",
"lineno": 163,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005442",
"name": "diceStack",
"type": "MemberExpression",
"value": "environment.diceStack"
}
},
"undocumented": true,
"name": "diceStack",
"longname": "getDiceOrHalf~diceStack",
"kind": "constant",
"memberof": "getDiceOrHalf",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6061,
6424
],
"filename": "mock20.js",
"lineno": 168,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005472",
"name": "getDiceRolls",
"type": "ArrowFunctionExpression"
},
"vars": {
"rolls": "getDiceRolls~rolls",
"allRolls": "getDiceRolls~allRolls",
"": null
}
},
"undocumented": true,
"name": "getDiceRolls",
"longname": "getDiceRolls",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6103,
6151
],
"filename": "mock20.js",
"lineno": 169,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005478",
"name": "rolls",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "rolls",
"longname": "getDiceRolls~rolls",
"kind": "constant",
"memberof": "getDiceRolls",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6188,
6201
],
"filename": "mock20.js",
"lineno": 171,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005491",
"name": "allRolls",
"type": "ArrayExpression",
"value": "[]"
}
},
"undocumented": true,
"name": "allRolls",
"longname": "getDiceRolls~allRolls",
"kind": "constant",
"memberof": "getDiceRolls",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6292,
6297
],
"filename": "mock20.js",
"lineno": 174,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005512",
"name": "i",
"type": "Literal",
"value": 1
}
},
"undocumented": true,
"name": "i",
"longname": "<anonymous>~i",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6332,
6358
],
"filename": "mock20.js",
"lineno": 175,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005522",
"name": "dice",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "dice",
"longname": "<anonymous>~dice",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6435,
7044
],
"filename": "mock20.js",
"lineno": 182,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005536",
"name": "calculateResult",
"type": "ArrowFunctionExpression"
},
"vars": {
"expression": "calculateResult~expression",
"rolls": "calculateResult~rolls",
"": null
}
},
"undocumented": true,
"name": "calculateResult",
"longname": "calculateResult",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6489,
6540
],
"filename": "mock20.js",
"lineno": 183,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005543",
"name": "expression",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "expression",
"longname": "calculateResult~expression",
"kind": "member",
"memberof": "calculateResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6552,
6600
],
"filename": "mock20.js",
"lineno": 185,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005552",
"name": "rolls",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "rolls",
"longname": "calculateResult~rolls",
"kind": "constant",
"memberof": "calculateResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6733,
6742
],
"filename": "mock20.js",
"lineno": 189,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005584",
"name": "total",
"type": "Literal",
"value": 0
}
},
"undocumented": true,
"name": "total",
"longname": "<anonymous>~total",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6758,
6763
],
"filename": "mock20.js",
"lineno": 190,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005589",
"name": "i",
"type": "Literal",
"value": 1
}
},
"undocumented": true,
"name": "i",
"longname": "<anonymous>~i",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6792,
6814
],
"filename": "mock20.js",
"lineno": 191,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005599",
"name": "total",
"type": "UnaryExpression",
"funcscope": "<anonymous>",
"value": "+",
"paramnames": []
}
},
"undocumented": true,
"name": "total",
"longname": "<anonymous>~total",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
6828,
6908
],
"filename": "mock20.js",
"lineno": 193,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005607",
"name": "expression",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "expression",
"longname": "<anonymous>~expression",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
6921,
6951
],
"filename": "mock20.js",
"lineno": 194,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005616",
"name": "regex",
"type": "NewExpression",
"value": ""
}
},
"undocumented": true,
"name": "regex",
"longname": "<anonymous>~regex",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6958,
7003
],
"filename": "mock20.js",
"lineno": 195,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005623",
"name": "expression",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "expression",
"longname": "<anonymous>~expression",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
7055,
7772
],
"filename": "mock20.js",
"lineno": 201,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005636",
"name": "replaceAttributes",
"type": "ArrowFunctionExpression"
},
"vars": {
"test": "replaceAttributes~test",
"element": "replaceAttributes~element",
"": null
}
},
"undocumented": true,
"name": "replaceAttributes",
"longname": "replaceAttributes",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7099,
7119
],
"filename": "mock20.js",
"lineno": 202,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005642",
"name": "test",
"type": "Literal",
"value": "<RegExp /@\\{(.*?)\\}/i>"
}
},
"undocumented": true,
"name": "test",
"longname": "replaceAttributes~test",
"kind": "constant",
"memberof": "replaceAttributes",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7158,
7744
],
"filename": "mock20.js",
"lineno": 204,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005653",
"name": "element",
"type": "CallExpression",
"funcscope": "replaceAttributes",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "element",
"longname": "replaceAttributes~element",
"kind": "member",
"memberof": "replaceAttributes",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
7233,
7256
],
"filename": "mock20.js",
"lineno": 205,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005666",
"name": "attributeName",
"type": "MemberExpression",
"value": "args[0]"
}
},
"undocumented": true,
"name": "attributeName",
"longname": "<anonymous>~attributeName",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7271,
7325
],
"filename": "mock20.js",
"lineno": 206,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005672",
"name": "attributeValue",
"type": "MemberExpression",
"value": "environment.attributes[undefined]"
}
},
"undocumented": true,
"name": "attributeValue",
"longname": "<anonymous>~attributeValue",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7340,
7395
],
"filename": "mock20.js",
"lineno": 207,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005680",
"name": "attributeExists",
"type": "BinaryExpression",
"value": ""
}
},
"undocumented": true,
"name": "attributeExists",
"longname": "<anonymous>~attributeExists",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7410,
7466
],
"filename": "mock20.js",
"lineno": 208,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005687",
"name": "possibleAttributes",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "possibleAttributes",
"longname": "<anonymous>~possibleAttributes",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7783,
7989
],
"filename": "mock20.js",
"lineno": 221,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005718",
"name": "replaceQueries",
"type": "ArrowFunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "replaceQueries",
"longname": "replaceQueries",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7891,
7921
],
"filename": "mock20.js",
"lineno": 223,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005735",
"name": "a",
"type": "LogicalExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "a",
"longname": "<anonymous>~a",
"kind": "member",
"memberof": "<anonymous>",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
8000,
8569
],
"filename": "mock20.js",
"lineno": 228,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005753",
"name": "calculateRollResult",
"type": "ArrowFunctionExpression"
},
"vars": {
"results": "calculateRollResult~results",
"key": "calculateRollResult~key",
"element": "calculateRollResult~element",
"attributeFilled": "calculateRollResult~attributeFilled",
"queryAnswered": "calculateRollResult~queryAnswered",
"expression": "calculateRollResult~expression",
"dice": "calculateRollResult~dice",
"result": "calculateRollResult~result",
"results[undefined]": "calculateRollResult~results.undefined]"
}
},
"undocumented": true,
"name": "calculateRollResult",
"longname": "calculateRollResult",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8051,
8063
],
"filename": "mock20.js",
"lineno": 229,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005759",
"name": "results",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "results",
"longname": "calculateRollResult~results",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8079,
8082
],
"filename": "mock20.js",
"lineno": 230,
"columnno": 13,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005764",
"name": "key"
}
},
"undocumented": true,
"name": "key",
"longname": "calculateRollResult~key",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8113,
8140
],
"filename": "mock20.js",
"lineno": 231,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005769",
"name": "element",
"type": "MemberExpression",
"value": "rollElements[undefined]"
}
},
"undocumented": true,
"name": "element",
"longname": "calculateRollResult~element",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8202,
8246
],
"filename": "mock20.js",
"lineno": 233,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005785",
"name": "attributeFilled",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "attributeFilled",
"longname": "calculateRollResult~attributeFilled",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8259,
8306
],
"filename": "mock20.js",
"lineno": 234,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005791",
"name": "queryAnswered",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "queryAnswered",
"longname": "calculateRollResult~queryAnswered",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8319,
8360
],
"filename": "mock20.js",
"lineno": 235,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005797",
"name": "expression",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "expression",
"longname": "calculateRollResult~expression",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8373,
8404
],
"filename": "mock20.js",
"lineno": 236,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005803",
"name": "dice",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "dice",
"longname": "calculateRollResult~dice",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8417,
8464
],
"filename": "mock20.js",
"lineno": 237,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005809",
"name": "result",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "result",
"longname": "calculateRollResult~result",
"kind": "constant",
"memberof": "calculateRollResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8471,
8541
],
"filename": "mock20.js",
"lineno": 238,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005818",
"name": "results[undefined]",
"type": "ObjectExpression",
"funcscope": "calculateRollResult",
"value": "{\"result\":\"\",\"dice\":\"\",\"expression\":\"\"}",
"paramnames": []
}
},
"undocumented": true,
"name": "undefined]",
"longname": "calculateRollResult~results.undefined]",
"kind": "member",
"memberof": "calculateRollResult~results",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8495,
8501
],
"filename": "mock20.js",
"lineno": 239,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005823",
"name": "result",
"type": "Identifier",
"value": "result"
}
},
"undocumented": true,
"name": "result",
"longname": "calculateRollResult~results.undefined].result",
"kind": "member",
"memberof": "calculateRollResult~results.undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8510,
8514
],
"filename": "mock20.js",
"lineno": 240,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005825",
"name": "dice",
"type": "Identifier",
"value": "dice"
}
},
"undocumented": true,
"name": "dice",
"longname": "calculateRollResult~results.undefined].dice",
"kind": "member",
"memberof": "calculateRollResult~results.undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8523,
8533
],
"filename": "mock20.js",
"lineno": 241,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005827",
"name": "expression",
"type": "Identifier",
"value": "expression"
}
},
"undocumented": true,
"name": "expression",
"longname": "calculateRollResult~results.undefined].expression",
"kind": "member",
"memberof": "calculateRollResult~results.undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8580,
8973
],
"filename": "mock20.js",
"lineno": 247,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005832",
"name": "startRoll",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "startRoll",
"longname": "startRoll",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8727,
8755
],
"filename": "mock20.js",
"lineno": 249,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005849",
"name": "rollResult",
"type": "ObjectExpression",
"value": "{\"results\":\"\"}"
}
},
"undocumented": true,
"name": "rollResult",
"longname": "<anonymous>~rollResult",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8742,
8753
],
"filename": "mock20.js",
"lineno": 249,
"columnno": 23,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005852",
"name": "results",
"type": "ObjectExpression",
"value": "{}"
}
},
"undocumented": true,
"name": "results",
"longname": "<anonymous>~rollResult.results",
"kind": "member",
"memberof": "<anonymous>~rollResult",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8802,
8848
],
"filename": "mock20.js",
"lineno": 251,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005859",
"name": "rollElements",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "rollElements",
"longname": "<anonymous>~rollElements",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
8853,
8907
],
"filename": "mock20.js",
"lineno": 252,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005865",
"name": "rollResult.results",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "results",
"longname": "<anonymous>~rollResult.results",
"kind": "member",
"memberof": "<anonymous>~rollResult",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8912,
8946
],
"filename": "mock20.js",
"lineno": 253,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005873",
"name": "rollResult.rollId",
"type": "CallExpression",
"funcscope": "<anonymous>",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "rollId",
"longname": "<anonymous>~rollResult.rollId",
"kind": "member",
"memberof": "<anonymous>~rollResult",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8976,
9004
],
"filename": "mock20.js",
"lineno": 256,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005882",
"name": "global.startRoll",
"type": "Identifier",
"value": "startRoll",
"paramnames": []
}
},
"undocumented": true,
"name": "startRoll",
"longname": "global.startRoll",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9013,
9041
],
"filename": "mock20.js",
"lineno": 257,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005888",
"name": "finishRoll",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "finishRoll",
"longname": "finishRoll",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
9044,
9074
],
"filename": "mock20.js",
"lineno": 258,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005897",
"name": "global.finishRoll",
"type": "Identifier",
"value": "finishRoll",
"paramnames": []
}
},
"undocumented": true,
"name": "finishRoll",
"longname": "global.finishRoll",
"kind": "member",
"memberof": "global",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
0,
32
],
"filename": "mockScaffold.js",
"lineno": 1,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005905",
"name": "console.debug",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "debug",
"longname": "console.debug",
"kind": "member",
"memberof": "console",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
35,
65
],
"filename": "mockScaffold.js",
"lineno": 2,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005917",
"name": "console.log",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "log",
"longname": "console.log",
"kind": "member",
"memberof": "console",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
68,
100
],
"filename": "mockScaffold.js",
"lineno": 3,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005929",
"name": "console.table",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "table",
"longname": "console.table",
"kind": "member",
"memberof": "console",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
103,
133
],
"filename": "mockScaffold.js",
"lineno": 4,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005941",
"name": "module.exports",
"type": "ObjectExpression",
"value": "{\"k\":\"\"}",
"paramnames": []
}
},
"undocumented": true,
"name": "exports",
"longname": "module.exports",
"kind": "member",
"memberof": "module",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
121,
122
],
"filename": "mockScaffold.js",
"lineno": 4,
"columnno": 18,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005946",
"name": "k",
"type": "Identifier",
"value": "k"
}
},
"undocumented": true,
"name": "k",
"longname": "module.exports.k",
"kind": "member",
"memberof": "module.exports",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
227,
743
],
"filename": "parse_cascade.js",
"lineno": 7,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100005953",
"name": "expandCascade",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "expandCascade",
"longname": "expandCascade",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
754,
2008
],
"filename": "parse_cascade.js",
"lineno": 18,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006002",
"name": "expandRepeating",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "expandRepeating",
"longname": "expandRepeating",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
964,
1026
],
"filename": "parse_cascade.js",
"lineno": 21,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006036",
"name": "memo[undefined]",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1101,
1176
],
"filename": "parse_cascade.js",
"lineno": 22,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006057",
"name": "memo[undefined].name",
"type": "TemplateLiteral",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "name",
"longname": "memo[undefined].name",
"kind": "member",
"memberof": "memo[undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1223,
1979
],
"filename": "parse_cascade.js",
"lineno": 24,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006088",
"name": "memo[undefined].affects",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "affects",
"longname": "memo[undefined].affects",
"kind": "member",
"memberof": "memo[undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2019,
2125
],
"filename": "parse_cascade.js",
"lineno": 39,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006162",
"name": "applyID",
"type": "FunctionExpression"
}
},
"undocumented": true,
"name": "applyID",
"longname": "applyID",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2136,
2514
],
"filename": "parse_cascade.js",
"lineno": 43,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006179",
"name": "expandNormal",
"type": "FunctionExpression"
},
"vars": {
"memo[undefined]": null,
"memo[undefined].affects": "memo[undefined].affects",
"": null
}
},
"undocumented": true,
"name": "expandNormal",
"longname": "expandNormal",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2191,
2224
],
"filename": "parse_cascade.js",
"lineno": 44,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006188",
"name": "memo[undefined]",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "memo[undefined]",
"longname": "memo[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2263,
2306
],
"filename": "parse_cascade.js",
"lineno": 46,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006207",
"name": "memo[undefined].affects",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "affects",
"longname": "memo[undefined].affects",
"kind": "member",
"memberof": "memo[undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2313,
2505
],
"filename": "parse_cascade.js",
"lineno": 47,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006221",
"name": "memo[undefined].affects",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "affects",
"longname": "memo[undefined].affects",
"kind": "member",
"memberof": "memo[undefined]",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2525,
2735
],
"filename": "parse_cascade.js",
"lineno": 58,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006263",
"name": "addAllRows",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "addAllRows",
"longname": "addAllRows",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "/**\r\n * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.\r\n * @namespace Sheetworkers.Sheetworker Aliases\r\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 3,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.",
"kind": "namespace",
"name": "Sheetworker Aliases",
"memberof": "Sheetworkers",
"longname": "Sheetworkers.Sheetworker Aliases",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.\r\n * @memberof Sheetworker Aliases\r\n * @name setSectionOrder\r\n * @param {string} section - The name of the section, with or without `repeating_`\r\n * @param {string[]} order - Array of ids describing the desired order of the section.\r\n * @returns {void}\r\n * @example\r\n * //Set the order of a repeating_weapon section\r\n * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);\r\n * //Can also specify the section name without the repeating_ prefix\r\n * k.setSectionOrder('equipment',['id1','id2','id3']);\r\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 7,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.",
"memberof": "Sheetworker Aliases",
"name": "setSectionOrder",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The name of the section, with or without `repeating_`",
"name": "section"
},
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "Array of ids describing the desired order of the section.",
"name": "order"
}
],
"returns": [
{
"type": {
"names": [
"void"
]
}
}
],
"examples": [
"//Set the order of a repeating_weapon section\rk.setSectionOrder('repeating_equipment',['id1','id2','id3']);\r//Can also specify the section name without the repeating_ prefix\rk.setSectionOrder('equipment',['id1','id2','id3']);"
],
"scope": "static",
"longname": "Sheetworker Aliases.setSectionOrder",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
1368,
1508
],
"filename": "sheetworker_aliases.js",
"lineno": 20,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006305",
"name": "_setSectionOrder",
"type": "FunctionExpression"
},
"vars": {
"trueSection": "_setSectionOrder~trueSection"
}
},
"undocumented": true,
"name": "_setSectionOrder",
"longname": "_setSectionOrder",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1419,
1465
],
"filename": "sheetworker_aliases.js",
"lineno": 21,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006312",
"name": "trueSection",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "trueSection",
"longname": "_setSectionOrder~trueSection",
"kind": "member",
"memberof": "_setSectionOrder",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1511,
1552
],
"filename": "sheetworker_aliases.js",
"lineno": 24,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006326",
"name": "kFuncs.setSectionOrder",
"type": "Identifier",
"value": "_setSectionOrder",
"paramnames": []
}
},
"undocumented": true,
"name": "setSectionOrder",
"longname": "kFuncs.setSectionOrder",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.\r\n * @memberof Sheetworker Aliases\r\n * @name removeRepeatingRow\r\n * @param {string} row - The row id to be removed\r\n * @param {attributesProxy} attributes - The attribute values currently in memory\r\n * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.\r\n * @returns {void}\r\n * @example\r\n * //Remove a repeating Row\r\n * k.getAllAttrs({\r\n *  callback:(attributes,sections)=>{\r\n *    const rowID = sections.repeating_equipment[0];\r\n *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\r\n *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.\r\n *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // => undefined\r\n *  }\r\n * })\r\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 26,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.",
"memberof": "Sheetworker Aliases",
"name": "removeRepeatingRow",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The row id to be removed",
"name": "row"
},
{
"type": {
"names": [
"attributesProxy"
]
},
"description": "The attribute values currently in memory",
"name": "attributes"
},
{
"type": {
"names": [
"object"
]
},
"description": "Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.",
"name": "sections"
}
],
"returns": [
{
"type": {
"names": [
"void"
]
}
}
],
"examples": [
"//Remove a repeating Row\rk.getAllAttrs({\r callback:(attributes,sections)=>{\r   const rowID = sections.repeating_equipment[0];\r   k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\r   console.log(sections.repeating_equipment); // => rowID no longer exists in the array.\r   console.log(attributes[`repeating_equipment_${rowID}_name`]); // => undefined\r }\r})"
],
"scope": "static",
"longname": "Sheetworker Aliases.removeRepeatingRow",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
2601,
2980
],
"filename": "sheetworker_aliases.js",
"lineno": 45,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006332",
"name": "_removeRepeatingRow",
"type": "FunctionExpression"
},
"vars": {
"": null,
"undefined": null,
"sections[undefined]": null
}
},
"undocumented": true,
"name": "_removeRepeatingRow",
"longname": "_removeRepeatingRow",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2886,
2948
],
"filename": "sheetworker_aliases.js",
"lineno": 53,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006382",
"name": "sections[undefined]",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "sections[undefined]",
"longname": "sections[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2983,
3030
],
"filename": "sheetworker_aliases.js",
"lineno": 56,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006402",
"name": "kFuncs.removeRepeatingRow",
"type": "Identifier",
"value": "_removeRepeatingRow",
"paramnames": []
}
},
"undocumented": true,
"name": "removeRepeatingRow",
"longname": "kFuncs.removeRepeatingRow",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.\r\n * @memberof Sheetworker Aliases\r\n * @name getAttrs\r\n * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\r\n * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.\r\n * @example\r\n * //Gets the attributes named in props.\r\n * k.getAttrs({\r\n *  props:['attribute_1','attribute_2'],\r\n *  callback:(attributes)=>{\r\n *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\r\n *    attributes.attribute_1 = 'new value';\r\n *    attributes.set();\r\n *  }\r\n * })\r\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 58,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.",
"memberof": "Sheetworker Aliases",
"name": "getAttrs",
"params": [
{
"type": {
"names": [
"Array.<string>"
]
},
"optional": true,
"defaultvalue": "baseGet",
"description": "Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.",
"name": "props"
},
{
"type": {
"names": [
"function"
]
},
"description": "The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.",
"name": "callback"
}
],
"examples": [
"//Gets the attributes named in props.\rk.getAttrs({\r props:['attribute_1','attribute_2'],\r callback:(attributes)=>{\r   //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\r   attributes.attribute_1 = 'new value';\r   attributes.set();\r }\r})"
],
"scope": "static",
"longname": "Sheetworker Aliases.getAttrs",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
4018,
4181
],
"filename": "sheetworker_aliases.js",
"lineno": 75,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006408",
"name": "_getAttrs",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"undocumented": true,
"name": "_getAttrs",
"longname": "_getAttrs",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4040,
4053
],
"filename": "sheetworker_aliases.js",
"lineno": 75,
"columnno": 28,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006412",
"name": "props",
"type": "AssignmentPattern",
"value": "props"
}
},
"undocumented": true,
"name": "props",
"longname": "props",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4054,
4062
],
"filename": "sheetworker_aliases.js",
"lineno": 75,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006416",
"name": "callback",
"type": "Identifier",
"value": "callback"
}
},
"undocumented": true,
"name": "callback",
"longname": "callback",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
4107,
4143
],
"filename": "sheetworker_aliases.js",
"lineno": 77,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006427",
"name": "attributes",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "attributes",
"longname": "<anonymous>~attributes",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4184,
4211
],
"filename": "sheetworker_aliases.js",
"lineno": 81,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006437",
"name": "kFuncs.getAttrs",
"type": "Identifier",
"value": "_getAttrs",
"paramnames": []
}
},
"undocumented": true,
"name": "getAttrs",
"longname": "kFuncs.getAttrs",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.\r\n * @memberof Sheetworker Aliases\r\n * @param {Object} args\r\n * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\r\n * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. \r\n * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.\r\n * @example\r\n * //Get every K-scaffold linked attribute on the sheet\r\n * k.getAllAttrs({\r\n *  callback:(attributes,sections,casc)=>{\r\n *    //Work with the attributes as you please.\r\n *    attributes.some_attribute = 'a value';\r\n *    attributes.set();//Apply our change\r\n *  }\r\n * })\r\n */",
"meta": {
"range": [
5591,
5999
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006443",
"name": "getAllAttrs",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.",
"memberof": "Sheetworker Aliases",
"params": [
{
"type": {
"names": [
"Object"
]
},
"name": "args"
},
{
"type": {
"names": [
"Array.<string>"
]
},
"optional": true,
"defaultvalue": "baseGet",
"description": "Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.",
"name": "args.props"
},
{
"type": {
"names": [
"repeatingSectionDetails"
]
},
"description": "Array of details about a section to get the IDs for and attributes that need to be gotten.",
"name": "sectionDetails"
},
{
"type": {
"names": [
"function"
]
},
"description": "The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.",
"name": "args.callback"
}
],
"examples": [
"//Get every K-scaffold linked attribute on the sheet\rk.getAllAttrs({\r callback:(attributes,sections,casc)=>{\r   //Work with the attributes as you please.\r   attributes.some_attribute = 'a value';\r   attributes.set();//Apply our change\r }\r})"
],
"name": "getAllAttrs",
"longname": "Sheetworker Aliases.getAllAttrs",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
5615,
5628
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006447",
"name": "props",
"type": "AssignmentPattern",
"value": "props"
}
},
"undocumented": true,
"name": "props",
"longname": "props",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
5629,
5667
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 44,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006451",
"name": "sectionDetails",
"type": "AssignmentPattern",
"value": "sectionDetails"
}
},
"undocumented": true,
"name": "sectionDetails",
"longname": "sectionDetails",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
5668,
5676
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 83,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006455",
"name": "callback",
"type": "Identifier",
"value": "callback"
}
},
"undocumented": true,
"name": "callback",
"longname": "callback",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
5793,
5829
],
"filename": "sheetworker_aliases.js",
"lineno": 103,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006478",
"name": "attributes",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "attributes",
"longname": "<anonymous>~attributes",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
5887,
5937
],
"filename": "sheetworker_aliases.js",
"lineno": 105,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006489",
"name": "casc",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "casc",
"longname": "<anonymous>~casc",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6002,
6034
],
"filename": "sheetworker_aliases.js",
"lineno": 110,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006503",
"name": "kFuncs.getAllAttrs",
"type": "Identifier",
"value": "getAllAttrs",
"paramnames": []
}
},
"undocumented": true,
"name": "getAllAttrs",
"longname": "kFuncs.getAllAttrs",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.\r\n * @memberof Sheetworker Aliases\r\n * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.\r\n * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.\r\n * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section\r\n * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.\r\n * @example\r\n * // Get some section details\r\n * const sectionDetails = {\r\n *  {section:'repeating_equipment',fields:['name','weight','cost']},\r\n *  {section:'repeating_weapon',fields:['name','attack','damage']}\r\n * };\r\n * k.getSections(sectionDetails,(attributeNames,sections)=>{\r\n *  console.log(attributeNames);// => Array containing all row specific attribute names\r\n *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\r\n * })\r\n */",
"meta": {
"range": [
7456,
8163
],
"filename": "sheetworker_aliases.js",
"lineno": 130,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006509",
"name": "getSections",
"type": "FunctionExpression"
},
"vars": {
"queueClone": "Sheetworker Aliases.getSections~queueClone",
"worker": "Sheetworker Aliases.getSections~worker",
"": null
}
},
"description": "Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.",
"memberof": "Sheetworker Aliases",
"params": [
{
"type": {
"names": [
"Array.<object>"
]
},
"description": "Array of details about a section to get the IDs for and attributes that need to be gotten.",
"name": "sectionDetails"
},
{
"type": {
"names": [
"string"
]
},
"description": "The full name of the repeating section including the `repeating_` prefix.",
"name": "sectionDetails.section"
},
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "Array of field names that need to be gotten from the repeating section",
"name": "sectionDetails.fields"
},
{
"type": {
"names": [
"function"
]
},
"description": "The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.",
"name": "callback"
}
],
"examples": [
"// Get some section details\rconst sectionDetails = {\r {section:'repeating_equipment',fields:['name','weight','cost']},\r {section:'repeating_weapon',fields:['name','attack','damage']}\r};\rk.getSections(sectionDetails,(attributeNames,sections)=>{\r console.log(attributeNames);// => Array containing all row specific attribute names\r console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\r})"
],
"name": "getSections",
"longname": "Sheetworker Aliases.getSections",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
7512,
7548
],
"filename": "sheetworker_aliases.js",
"lineno": 131,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006516",
"name": "queueClone",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "queueClone",
"longname": "Sheetworker Aliases.getSections~queueClone",
"kind": "member",
"memberof": "Sheetworker Aliases.getSections",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7559,
8074
],
"filename": "sheetworker_aliases.js",
"lineno": 132,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006524",
"name": "worker",
"type": "ArrowFunctionExpression"
},
"vars": {
"detail": "Sheetworker Aliases.getSections~worker~detail",
"": null
}
},
"undocumented": true,
"name": "worker",
"longname": "Sheetworker Aliases.getSections~worker",
"kind": "function",
"memberof": "Sheetworker Aliases.getSections",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7615,
7637
],
"filename": "sheetworker_aliases.js",
"lineno": 133,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006536",
"name": "detail",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "detail",
"longname": "Sheetworker Aliases.getSections~worker~detail",
"kind": "member",
"memberof": "Sheetworker Aliases.getSections~worker",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7689,
7719
],
"filename": "sheetworker_aliases.js",
"lineno": 135,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006552",
"name": "sections[undefined]",
"type": "Identifier",
"value": "IDs",
"paramnames": []
}
},
"undocumented": true,
"name": "sections[undefined]",
"longname": "sections[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
8166,
8198
],
"filename": "sheetworker_aliases.js",
"lineno": 155,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006637",
"name": "kFuncs.getSections",
"type": "Identifier",
"value": "getSections",
"paramnames": []
}
},
"undocumented": true,
"name": "getSections",
"longname": "kFuncs.getSections",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.\r\n * @memberof Sheetworker Aliases\r\n * @param {object} obj - The object containting attributes to set\r\n * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.\r\n * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.\r\n * @example\r\n * //Set some attributes silently\r\n * k.setAttrs({attribute_1:'new value'})\r\n * //Set some attributes and triggers listeners\r\n * k.setAttrs({attribute_1:'new value',true})\r\n * //Set some attributes and call a callback function\r\n * k.setAttrs({attribute_1:'new value'},null,()=>{\r\n *  //Do something after the attribute is set\r\n * })\r\n */",
"meta": {
"range": [
9180,
9267
],
"filename": "sheetworker_aliases.js",
"lineno": 175,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006643",
"name": "set",
"type": "FunctionExpression"
}
},
"description": "Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.",
"memberof": "Sheetworker Aliases",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "The object containting attributes to set",
"name": "obj"
},
{
"type": {
"names": [
"boolean"
]
},
"optional": true,
"defaultvalue": false,
"description": "Whether to set silently (default value) or not.",
"name": "vocal"
},
{
"type": {
"names": [
"function"
]
},
"optional": true,
"description": "The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.",
"name": "callback"
}
],
"examples": [
"//Set some attributes silently\rk.setAttrs({attribute_1:'new value'})\r//Set some attributes and triggers listeners\rk.setAttrs({attribute_1:'new value',true})\r//Set some attributes and call a callback function\rk.setAttrs({attribute_1:'new value'},null,()=>{\r //Do something after the attribute is set\r})"
],
"name": "set",
"longname": "Sheetworker Aliases.set",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9239,
9252
],
"filename": "sheetworker_aliases.js",
"lineno": 176,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006657",
"name": "silent",
"type": "UnaryExpression",
"value": "!vocal"
}
},
"undocumented": true,
"name": "silent",
"longname": "silent",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
9270,
9291
],
"filename": "sheetworker_aliases.js",
"lineno": 178,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006662",
"name": "kFuncs.setAttrs",
"type": "Identifier",
"value": "set",
"paramnames": []
}
},
"undocumented": true,
"name": "setAttrs",
"longname": "kFuncs.setAttrs",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9302,
9528
],
"filename": "sheetworker_aliases.js",
"lineno": 180,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006668",
"name": "generateCustomID",
"type": "FunctionExpression"
},
"vars": {
"string": "generateCustomID~string",
"rowID": "generateCustomID~rowID",
"re": "generateCustomID~re"
}
},
"undocumented": true,
"name": "generateCustomID",
"longname": "generateCustomID",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
9376,
9397
],
"filename": "sheetworker_aliases.js",
"lineno": 182,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006682",
"name": "string",
"type": "TemplateLiteral",
"funcscope": "generateCustomID",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "string",
"longname": "generateCustomID~string",
"kind": "member",
"memberof": "generateCustomID",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
9407,
9430
],
"filename": "sheetworker_aliases.js",
"lineno": 184,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006689",
"name": "rowID",
"type": "CallExpression",
"funcscope": "generateCustomID",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "rowID",
"longname": "generateCustomID~rowID",
"kind": "member",
"memberof": "generateCustomID",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
9439,
9478
],
"filename": "sheetworker_aliases.js",
"lineno": 185,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006694",
"name": "re",
"type": "NewExpression",
"value": ""
}
},
"undocumented": true,
"name": "re",
"longname": "generateCustomID~re",
"kind": "member",
"memberof": "generateCustomID",
"scope": "inner",
"params": []
},
{
"comment": "/**\r\n * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.\r\n * @memberof Sheetworker Aliases\r\n * @name generateRowID\r\n * @param {sectionObj} sections\r\n * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.\r\n * @returns {string} - The created ID\r\n * @example\r\n * k.getAllAttrs({\r\n *  callback:(attributes,sections,casc)=>{\r\n *    //Create a new row ID\r\n *    const rowID = k.generateRowID('repeating_equipment',sections);\r\n *    console.log(rowID);// => -p8rg908ug0suzz\r\n *    //Create a custom row ID\r\n *    const customID = k.generateRowID('repeating_equipment',sections,'custom');\r\n *    console.log(customID);// => -custom98uadj89kj\r\n *  }\r\n * });\r\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 190,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.",
"memberof": "Sheetworker Aliases",
"name": "generateRowID",
"params": [
{
"type": {
"names": [
"sectionObj"
]
},
"name": "sections"
},
{
"type": {
"names": [
"string"
]
},
"optional": true,
"description": "Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.",
"name": "customText"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
},
"description": "- The created ID"
}
],
"examples": [
"k.getAllAttrs({\r callback:(attributes,sections,casc)=>{\r   //Create a new row ID\r   const rowID = k.generateRowID('repeating_equipment',sections);\r   console.log(rowID);// => -p8rg908ug0suzz\r   //Create a custom row ID\r   const customID = k.generateRowID('repeating_equipment',sections,'custom');\r   console.log(customID);// => -custom98uadj89kj\r }\r});"
],
"scope": "static",
"longname": "Sheetworker Aliases.generateRowID",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
10394,
10747
],
"filename": "sheetworker_aliases.js",
"lineno": 209,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006717",
"name": "_generateRowID",
"type": "FunctionExpression"
},
"vars": {
"rowID": "_generateRowID~rowID",
"section": "_generateRowID~section",
"sections[undefined]": null
}
},
"undocumented": true,
"name": "_generateRowID",
"longname": "_generateRowID",
"kind": "function",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
10457,
10534
],
"filename": "sheetworker_aliases.js",
"lineno": 210,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006725",
"name": "rowID",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "rowID",
"longname": "_generateRowID~rowID",
"kind": "member",
"memberof": "_generateRowID",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
10539,
10628
],
"filename": "sheetworker_aliases.js",
"lineno": 213,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006735",
"name": "section",
"type": "ConditionalExpression",
"funcscope": "_generateRowID",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "section",
"longname": "_generateRowID~section",
"kind": "member",
"memberof": "_generateRowID",
"scope": "inner"
},
{
"comment": "",
"meta": {
"range": [
10633,
10676
],
"filename": "sheetworker_aliases.js",
"lineno": 216,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006749",
"name": "sections[undefined]",
"type": "LogicalExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "sections[undefined]",
"longname": "sections[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
10750,
10787
],
"filename": "sheetworker_aliases.js",
"lineno": 220,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006774",
"name": "kFuncs.generateRowID",
"type": "Identifier",
"value": "_generateRowID",
"paramnames": []
}
},
"undocumented": true,
"name": "generateRowID",
"longname": "kFuncs.generateRowID",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.\r\n * @namespace Sheetworkers.Utilities\r\n * @alias Utilities\r\n */",
"meta": {
"filename": "utility.js",
"lineno": 3,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {}
},
"description": "These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.",
"kind": "namespace",
"name": "Utilities",
"alias": "Utilities",
"memberof": "Sheetworkers",
"longname": "Sheetworkers.Utilities",
"scope": "static"
},
{
"comment": "/**\r\n * Replaces problem characters to use a string as a regex\r\n * @memberof Utilities\r\n * @param {string} text - The text to replace characters in\r\n * @returns {string}\r\n * @example\r\n * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\r\n * console.log(textForRegex);// => \"\\.some thing\\[with characters\\]\"\r\n */",
"meta": {
"range": [
688,
805
],
"filename": "utility.js",
"lineno": 17,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006782",
"name": "sanitizeForRegex",
"type": "FunctionExpression"
}
},
"description": "Replaces problem characters to use a string as a regex",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The text to replace characters in",
"name": "text"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"examples": [
"const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\rconsole.log(textForRegex);// => \"\\.some thing\\[with characters\\]\""
],
"name": "sanitizeForRegex",
"longname": "Utilities.sanitizeForRegex",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
808,
850
],
"filename": "utility.js",
"lineno": 20,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006795",
"name": "kFuncs.sanitizeForRegex",
"type": "Identifier",
"value": "sanitizeForRegex",
"paramnames": []
}
},
"undocumented": true,
"name": "sanitizeForRegex",
"longname": "kFuncs.sanitizeForRegex",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Converts a value to a number, it\\'s default value, or `0` if no default value passed.\r\n * @memberof Utilities\r\n * @param {string|number} val - Value to convert to a number\r\n * @param {number} def - The default value, uses 0 if not passed\r\n * @returns {number|undefined}\r\n * @example\r\n * const num = k.value('100');\r\n * console.log(num);// => 100\r\n */",
"meta": {
"range": [
1221,
1469
],
"filename": "utility.js",
"lineno": 32,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006801",
"name": "value",
"type": "FunctionExpression"
},
"vars": {
"convertVal": "Utilities.value~convertVal"
}
},
"description": "Converts a value to a number, it\\'s default value, or `0` if no default value passed.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string",
"number"
]
},
"description": "Value to convert to a number",
"name": "val"
},
{
"type": {
"names": [
"number"
]
},
"description": "The default value, uses 0 if not passed",
"name": "def"
}
],
"returns": [
{
"type": {
"names": [
"number",
"undefined"
]
}
}
],
"examples": [
"const num = k.value('100');\rconsole.log(num);// => 100"
],
"name": "value",
"longname": "Utilities.value",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1257,
1274
],
"filename": "utility.js",
"lineno": 33,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006808",
"name": "convertVal",
"type": "UnaryExpression",
"value": "+val"
}
},
"undocumented": true,
"name": "convertVal",
"longname": "Utilities.value~convertVal",
"kind": "constant",
"memberof": "Utilities.value",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1472,
1492
],
"filename": "utility.js",
"lineno": 41,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006839",
"name": "kFuncs.value",
"type": "Identifier",
"value": "value",
"paramnames": []
}
},
"undocumented": true,
"name": "value",
"longname": "kFuncs.value",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.\r\n * @memberof Utilities\r\n * @param {string} string - The string to parse\r\n * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute\r\n * @returns {string[]}\r\n * @example\r\n * //Extract info from a full repeating name\r\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\r\n * console.log(section);// => \"repeating_equipment\"\r\n * console.log(rowID);// => \"-8908asdflkjZlkj23\"\r\n * console.log(attrName);// => \"name\"\r\n * \r\n * //Extract info from just a row name\r\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\r\n * console.log(section);// => \"repeating_equipment\"\r\n * console.log(rowID);// => \"-8908asdflkjZlkj23\"\r\n * console.log(attrName);// => undefined\r\n */",
"meta": {
"range": [
2499,
2640
],
"filename": "utility.js",
"lineno": 62,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006845",
"name": "parseRepeatName",
"type": "FunctionExpression"
},
"vars": {
"match": "Utilities.parseRepeatName~match"
}
},
"description": "Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to parse",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"array"
]
},
"description": "- Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute"
},
{
"type": {
"names": [
"Array.<string>"
]
}
}
],
"examples": [
"//Extract info from a full repeating name\rconst [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\rconsole.log(section);// => \"repeating_equipment\"\rconsole.log(rowID);// => \"-8908asdflkjZlkj23\"\rconsole.log(attrName);// => \"name\"\r\r//Extract info from just a row name\rconst [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\rconsole.log(section);// => \"repeating_equipment\"\rconsole.log(rowID);// => \"-8908asdflkjZlkj23\"\rconsole.log(attrName);// => undefined"
],
"name": "parseRepeatName",
"longname": "Utilities.parseRepeatName",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
2542,
2601
],
"filename": "utility.js",
"lineno": 63,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006851",
"name": "match",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "match",
"longname": "Utilities.parseRepeatName~match",
"kind": "member",
"memberof": "Utilities.parseRepeatName",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
2643,
2683
],
"filename": "utility.js",
"lineno": 67,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006866",
"name": "kFuncs.parseRepeatName",
"type": "Identifier",
"value": "parseRepeatName",
"paramnames": []
}
},
"undocumented": true,
"name": "parseRepeatName",
"longname": "kFuncs.parseRepeatName",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\r\n * \r\n * Aliases: `k.parseClickTrigger`\r\n * @memberof Utilities\r\n * @param {string} string The triggerName property of the\r\n * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`\r\n * @returns {string[]}\r\n * @example\r\n * //Parse a non repeating trigger\r\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\r\n * console.log(section);// => undefined\r\n * console.log(rowID);// => undefined\r\n * console.log(attrName);// => \"some-button\"\r\n * \r\n * //Parse a repeating trigger\r\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\r\n * console.log(section);// => \"repeating_attack\"\r\n * console.log(rowID);// => \"-234lkjpd8fu8usadf\"\r\n * console.log(attrName);// => \"some-button\"\r\n * \r\n * //Parse a repeating name\r\n * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\r\n * console.log(section);// => \"repeating_attack\"\r\n * console.log(rowID);// => \"-234lkjpd8fu8usadf\"\r\n * console.log(attrName);// => \"some-button\"\r\n */",
"meta": {
"range": [
4069,
4235
],
"filename": "utility.js",
"lineno": 96,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006872",
"name": "parseTriggerName",
"type": "FunctionExpression"
},
"vars": {
"match": "Utilities.parseTriggerName~match"
}
},
"description": "Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\r\rAliases: `k.parseClickTrigger`",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The triggerName property of the",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"array"
]
},
"description": "- For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`"
},
{
"type": {
"names": [
"Array.<string>"
]
}
}
],
"examples": [
"//Parse a non repeating trigger\rconst [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\rconsole.log(section);// => undefined\rconsole.log(rowID);// => undefined\rconsole.log(attrName);// => \"some-button\"\r\r//Parse a repeating trigger\rconst [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\rconsole.log(section);// => \"repeating_attack\"\rconsole.log(rowID);// => \"-234lkjpd8fu8usadf\"\rconsole.log(attrName);// => \"some-button\"\r\r//Parse a repeating name\rconst [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\rconsole.log(section);// => \"repeating_attack\"\rconsole.log(rowID);// => \"-234lkjpd8fu8usadf\"\rconsole.log(attrName);// => \"some-button\""
],
"name": "parseTriggerName",
"longname": "Utilities.parseTriggerName",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4113,
4196
],
"filename": "utility.js",
"lineno": 97,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006878",
"name": "match",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "match",
"longname": "Utilities.parseTriggerName~match",
"kind": "member",
"memberof": "Utilities.parseTriggerName",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4238,
4280
],
"filename": "utility.js",
"lineno": 101,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006898",
"name": "kFuncs.parseTriggerName",
"type": "Identifier",
"value": "parseTriggerName",
"paramnames": []
}
},
"undocumented": true,
"name": "parseTriggerName",
"longname": "kFuncs.parseTriggerName",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4289,
4325
],
"filename": "utility.js",
"lineno": 102,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006904",
"name": "parseClickTrigger",
"type": "Identifier",
"value": "parseTriggerName"
}
},
"undocumented": true,
"name": "parseClickTrigger",
"longname": "parseClickTrigger",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4328,
4372
],
"filename": "utility.js",
"lineno": 103,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006908",
"name": "kFuncs.parseClickTrigger",
"type": "Identifier",
"value": "parseClickTrigger",
"paramnames": []
}
},
"undocumented": true,
"name": "parseClickTrigger",
"longname": "kFuncs.parseClickTrigger",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Parses out the attribute name from the htmlattribute name.\r\n * @memberof Utilities\r\n * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).\r\n * @returns {string}\r\n * @example\r\n * //Parse a name\r\n * const attrName = k.parseHtmlName('attr_attribute_1');\r\n * console.log(attrName);// => \"attribute_1\"\r\n */",
"meta": {
"range": [
4771,
4900
],
"filename": "utility.js",
"lineno": 115,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006914",
"name": "parseHTMLName",
"type": "FunctionExpression"
},
"vars": {
"match": "Utilities.parseHTMLName~match"
}
},
"description": "Parses out the attribute name from the htmlattribute name.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"examples": [
"//Parse a name\rconst attrName = k.parseHtmlName('attr_attribute_1');\rconsole.log(attrName);// => \"attribute_1\""
],
"name": "parseHTMLName",
"longname": "Utilities.parseHTMLName",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
4812,
4858
],
"filename": "utility.js",
"lineno": 116,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006920",
"name": "match",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "match",
"longname": "Utilities.parseHTMLName~match",
"kind": "member",
"memberof": "Utilities.parseHTMLName",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
4903,
4939
],
"filename": "utility.js",
"lineno": 120,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006937",
"name": "kFuncs.parseHTMLName",
"type": "Identifier",
"value": "parseHTMLName",
"paramnames": []
}
},
"undocumented": true,
"name": "parseHTMLName",
"longname": "kFuncs.parseHTMLName",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Capitalize each word in a string\r\n * @memberof Utilities\r\n * @param {string} string - The string to capitalize\r\n * @returns {string}\r\n * @example\r\n * const capitalized = k.capitalize('a word');\r\n * console.log(capitalized);// => \"A Word\"\r\n */",
"meta": {
"range": [
5202,
5315
],
"filename": "utility.js",
"lineno": 131,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006943",
"name": "capitalize",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Capitalize each word in a string",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to capitalize",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
}
}
],
"examples": [
"const capitalized = k.capitalize('a word');\rconsole.log(capitalized);// => \"A Word\""
],
"name": "capitalize",
"longname": "Utilities.capitalize",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
5318,
5348
],
"filename": "utility.js",
"lineno": 134,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006961",
"name": "kFuncs.capitalize",
"type": "Identifier",
"value": "capitalize",
"paramnames": []
}
},
"undocumented": true,
"name": "capitalize",
"longname": "kFuncs.capitalize",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).\r\n * @memberof Utilities\r\n * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.\r\n * @returns {Promise} - Resolves to the selected value from the roll query\r\n * @example\r\n * const rollFunction = async function(){\r\n *  //Get the result of a choose from list query\r\n *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\r\n *  console.log(queryResult);//=> \"Option 1\" or \"Option 2\" depending on what the user selects\r\n * \r\n *  //Get free form input from the user\r\n *  const freeResult = await extractQueryResult('Prompt Text Here');\r\n *  consoel.log(freeResult);// => Whatever the user entered\r\n * }\r\n */",
"meta": {
"range": [
6386,
6659
],
"filename": "utility.js",
"lineno": 152,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006967",
"name": "extractQueryResult",
"type": "FunctionExpression"
},
"vars": {
"queryRoll": "Utilities.extractQueryResult~queryRoll"
}
},
"description": "Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.",
"name": "query"
}
],
"returns": [
{
"type": {
"names": [
"Promise"
]
},
"description": "- Resolves to the selected value from the roll query"
}
],
"examples": [
"const rollFunction = async function(){\r //Get the result of a choose from list query\r const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\r console.log(queryResult);//=> \"Option 1\" or \"Option 2\" depending on what the user selects\r\r //Get free form input from the user\r const freeResult = await extractQueryResult('Prompt Text Here');\r consoel.log(freeResult);// => Whatever the user entered\r}"
],
"name": "extractQueryResult",
"longname": "Utilities.extractQueryResult",
"kind": "function",
"scope": "static",
"async": true
},
{
"comment": "",
"meta": {
"range": [
6476,
6545
],
"filename": "utility.js",
"lineno": 154,
"columnno": 5,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100006977",
"name": "queryRoll",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "queryRoll",
"longname": "Utilities.extractQueryResult~queryRoll",
"kind": "member",
"memberof": "Utilities.extractQueryResult",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
6662,
6708
],
"filename": "utility.js",
"lineno": 158,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007006",
"name": "kFuncs.extractQueryResult",
"type": "Identifier",
"value": "extractQueryResult",
"paramnames": []
}
},
"undocumented": true,
"name": "extractQueryResult",
"longname": "kFuncs.extractQueryResult",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.\r\n * @memberof Utilities\r\n * @param {string|number} [value] - The value to return. Optional.\r\n * @returns {Promise} - Resolves to the value passed to the function\r\n * @example\r\n * const rollFunction = async function(){\r\n *  //Get the result of a choose from list query\r\n *  const queryResult = await pseudoQuery('a value');\r\n *  console.log(queryResult);//=> \"a value\"\r\n * }\r\n */",
"meta": {
"range": [
7519,
7775
],
"filename": "utility.js",
"lineno": 172,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007012",
"name": "pseudoQuery",
"type": "FunctionExpression"
},
"vars": {
"queryRoll": "Utilities.pseudoQuery~queryRoll"
}
},
"description": "Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string",
"number"
]
},
"optional": true,
"description": "The value to return. Optional.",
"name": "value"
}
],
"returns": [
{
"type": {
"names": [
"Promise"
]
},
"description": "- Resolves to the value passed to the function"
}
],
"examples": [
"const rollFunction = async function(){\r //Get the result of a choose from list query\r const queryResult = await pseudoQuery('a value');\r console.log(queryResult);//=> \"a value\"\r}"
],
"name": "pseudoQuery",
"longname": "Utilities.pseudoQuery",
"kind": "function",
"scope": "static",
"async": true
},
{
"comment": "",
"meta": {
"range": [
7595,
7661
],
"filename": "utility.js",
"lineno": 174,
"columnno": 5,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007022",
"name": "queryRoll",
"type": "AwaitExpression",
"value": ""
}
},
"undocumented": true,
"name": "queryRoll",
"longname": "Utilities.pseudoQuery~queryRoll",
"kind": "member",
"memberof": "Utilities.pseudoQuery",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
7778,
7810
],
"filename": "utility.js",
"lineno": 178,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007051",
"name": "kFuncs.pseudoQuery",
"type": "Identifier",
"value": "pseudoQuery",
"paramnames": []
}
},
"undocumented": true,
"name": "pseudoQuery",
"longname": "kFuncs.pseudoQuery",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * An alias for console.log.\r\n * @memberof Utilities\r\n * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.\r\n */",
"meta": {
"range": [
8197,
8713
],
"filename": "utility.js",
"lineno": 185,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007057",
"name": "log",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "An alias for console.log.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"any"
]
},
"description": "The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.",
"name": "msg"
}
],
"name": "log",
"longname": "Utilities.log",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
8716,
8732
],
"filename": "utility.js",
"lineno": 199,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007155",
"name": "kFuncs.log",
"type": "Identifier",
"value": "log",
"paramnames": []
}
},
"undocumented": true,
"name": "log",
"longname": "kFuncs.log",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.\r\n * @memberof Utilities\r\n * @param {any} msg - 'See {@link k.log}\r\n * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.\r\n * @returns {void}\r\n */",
"meta": {
"range": [
9163,
9846
],
"filename": "utility.js",
"lineno": 208,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007161",
"name": "debug",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"any"
]
},
"description": "'See {@link k.log}",
"name": "msg"
},
{
"type": {
"names": [
"boolean"
]
},
"description": "Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.",
"name": "force"
}
],
"returns": [
{
"type": {
"names": [
"void"
]
}
}
],
"name": "debug",
"longname": "Utilities.debug",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
9849,
9869
],
"filename": "utility.js",
"lineno": 224,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007284",
"name": "kFuncs.debug",
"type": "Identifier",
"value": "debug",
"paramnames": []
}
},
"undocumented": true,
"name": "debug",
"longname": "kFuncs.debug",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.\r\n * @memberof Utilities\r\n * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.\r\n * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.\r\n */",
"meta": {
"range": [
10266,
10553
],
"filename": "utility.js",
"lineno": 232,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007290",
"name": "orderSections",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"attributesProxy"
]
},
"description": "The attributes object that must have a value for the reporder for each section.",
"name": "attributes"
},
{
"type": {
"names": [
"Array.<object>"
]
},
"description": "Object containing the IDs for the repeating sections, indexed by repeating section name.",
"name": "sections"
}
],
"name": "orderSections",
"longname": "Utilities.orderSections",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
10364,
10458
],
"filename": "utility.js",
"lineno": 234,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007309",
"name": "attributes.attributes[undefined]",
"type": "CallExpression",
"value": "",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "attributes.attributes[undefined]",
"kind": "member",
"memberof": "attributes",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
10556,
10592
],
"filename": "utility.js",
"lineno": 238,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007341",
"name": "kFuncs.orderSections",
"type": "Identifier",
"value": "orderSections",
"paramnames": []
}
},
"undocumented": true,
"name": "orderSections",
"longname": "kFuncs.orderSections",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Orders a single ID array.\r\n * @memberof Utilities\r\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\r\n * @param {string[]} IDs - Array of IDs to be ordered.\r\n */",
"meta": {
"range": [
10808,
10963
],
"filename": "utility.js",
"lineno": 246,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007347",
"name": "orderSection",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Orders a single ID array.",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "Array of IDs in the order they are in on the sheet.",
"name": "repOrder"
},
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "Array of IDs to be ordered.",
"name": "IDs"
}
],
"name": "orderSection",
"longname": "Utilities.orderSection",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
10966,
11000
],
"filename": "utility.js",
"lineno": 251,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007383",
"name": "kFuncs.orderSection",
"type": "Identifier",
"value": "orderSection",
"paramnames": []
}
},
"undocumented": true,
"name": "orderSection",
"longname": "kFuncs.orderSection",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "/**\r\n * Splits a comma delimited string into an array\r\n * @memberof Utilities\r\n * @param {string} string - The string to split.\r\n * @returns {array} - The string segments of the comma delimited list.\r\n */",
"meta": {
"range": [
11217,
11302
],
"filename": "utility.js",
"lineno": 259,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007389",
"name": "commaArray",
"type": "FunctionExpression"
}
},
"description": "Splits a comma delimited string into an array",
"memberof": "Utilities",
"params": [
{
"type": {
"names": [
"string"
]
},
"description": "The string to split.",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"array"
]
},
"description": "- The string segments of the comma delimited list."
}
],
"name": "commaArray",
"longname": "Utilities.commaArray",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11305,
11335
],
"filename": "utility.js",
"lineno": 262,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007406",
"name": "kFuncs.commaArray",
"type": "Identifier",
"value": "commaArray",
"paramnames": []
}
},
"undocumented": true,
"name": "commaArray",
"longname": "kFuncs.commaArray",
"kind": "member",
"memberof": "kFuncs",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11446,
12098
],
"filename": "utility.js",
"lineno": 265,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007412",
"name": "RE",
"type": "ObjectExpression",
"value": "{\"chars\":\"\",\"escape\":\"\",\"unescape\":\"\"}"
}
},
"undocumented": true,
"name": "RE",
"longname": "RE",
"kind": "constant",
"scope": "global",
"params": []
},
{
"comment": "",
"meta": {
"range": [
11456,
11581
],
"filename": "utility.js",
"lineno": 266,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007415",
"name": "chars",
"type": "ObjectExpression",
"value": "{\"undefined\":\"%lcub;\"}"
}
},
"undocumented": true,
"name": "chars",
"longname": "RE.chars",
"kind": "member",
"memberof": "RE",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11472,
11485
],
"filename": "utility.js",
"lineno": 267,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007417",
"name": "\"\\\"\"",
"type": "Literal",
"value": "%quot;"
}
},
"undocumented": true,
"name": "\"\\\"\"",
"longname": "RE.chars.\"\\\"\"",
"kind": "member",
"memberof": "RE.chars",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11494,
11508
],
"filename": "utility.js",
"lineno": 268,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007419",
"name": "\",\"",
"type": "Literal",
"value": "%comma;"
}
},
"undocumented": true,
"name": "\",\"",
"longname": "RE.chars.\",\"",
"kind": "member",
"memberof": "RE.chars",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11517,
11531
],
"filename": "utility.js",
"lineno": 269,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007421",
"name": "\":\"",
"type": "Literal",
"value": "%colon;"
}
},
"undocumented": true,
"name": "\":\"",
"longname": "RE.chars.\":\"",
"kind": "member",
"memberof": "RE.chars",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11540,
11553
],
"filename": "utility.js",
"lineno": 270,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007423",
"name": "\"}\"",
"type": "Literal",
"value": "%rcub;"
}
},
"undocumented": true,
"name": "\"}\"",
"longname": "RE.chars.\"}\"",
"kind": "member",
"memberof": "RE.chars",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11562,
11575
],
"filename": "utility.js",
"lineno": 271,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007425",
"name": "\"{\"",
"type": "Literal",
"value": "%lcub;"
}
},
"undocumented": true,
"name": "\"{\"",
"longname": "RE.chars.\"{\"",
"kind": "member",
"memberof": "RE.chars",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11586,
11721
],
"filename": "utility.js",
"lineno": 273,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007427",
"name": "escape",
"type": "FunctionExpression"
}
},
"undocumented": true,
"name": "escape",
"longname": "RE.escape",
"kind": "function",
"memberof": "RE",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11726,
12095
],
"filename": "utility.js",
"lineno": 278,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007453",
"name": "unescape",
"type": "FunctionExpression"
},
"vars": {
"isData": "RE.unescape~isData"
}
},
"undocumented": true,
"name": "unescape",
"longname": "RE.unescape",
"kind": "function",
"memberof": "RE",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
11756,
11889
],
"filename": "utility.js",
"lineno": 279,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007458",
"name": "isData",
"type": "LogicalExpression",
"value": ""
}
},
"undocumented": true,
"name": "isData",
"longname": "RE.unescape~isData",
"kind": "constant",
"memberof": "RE.unescape",
"scope": "inner",
"params": []
},
{
"comment": "/**\r\n * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.\r\n * @function\r\n * @param {string|object|any[]} data - The data that you want to Base64 encode\r\n * @returns {string} - The encoded data\r\n * @memberof! Utilities\r\n */",
"meta": {
"range": [
12395,
12413
],
"filename": "utility.js",
"lineno": 301,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007507",
"name": "escape",
"type": "MemberExpression",
"value": "RE.escape"
}
},
"description": "Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.",
"kind": "function",
"params": [
{
"type": {
"names": [
"string",
"object",
"Array.<any>"
]
},
"description": "The data that you want to Base64 encode",
"name": "data"
}
],
"returns": [
{
"type": {
"names": [
"string"
]
},
"description": "- The encoded data"
}
],
"forceMemberof": true,
"memberof": "Utilities",
"name": "escape",
"longname": "Utilities.escape",
"scope": "static"
},
{
"comment": "/**\r\n * Decodes Base64 encoded strings that were created by the K-scaffold\r\n * @function\r\n * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.\r\n * @returns {string|object|any[]}\r\n * @memberof! Utilities\r\n */",
"meta": {
"range": [
12764,
12786
],
"filename": "utility.js",
"lineno": 309,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007513",
"name": "unescape",
"type": "MemberExpression",
"value": "RE.unescape"
}
},
"description": "Decodes Base64 encoded strings that were created by the K-scaffold",
"kind": "function",
"params": [
{
"type": {
"names": [
"string",
"object",
"Array.<any>"
]
},
"description": "The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.",
"name": "string"
}
],
"returns": [
{
"type": {
"names": [
"string",
"object",
"Array.<any>"
]
}
}
],
"forceMemberof": true,
"memberof": "Utilities",
"name": "unescape",
"longname": "Utilities.unescape",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
12813,
12819
],
"filename": "utility.js",
"lineno": 311,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007525",
"name": "escape",
"type": "Identifier",
"value": "escape"
}
},
"undocumented": true,
"name": "escape",
"longname": "escape",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
12820,
12828
],
"filename": "utility.js",
"lineno": 311,
"columnno": 29,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007527",
"name": "unescape",
"type": "Identifier",
"value": "unescape"
}
},
"undocumented": true,
"name": "unescape",
"longname": "unescape",
"kind": "member",
"scope": "global"
},
{
"comment": "/**\r\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\r\n * @memberof Sheetworkers\r\n * @param {Object} trigger - The trigger object\r\n * @param {object} attributes - The attribute values of the character\r\n */",
"meta": {
"range": [
592,
1258
],
"filename": "tabs.js",
"lineno": 7,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007532",
"name": "kSwitchTab",
"type": "FunctionExpression"
},
"vars": {
"undefined": null,
"tabInputName": "Sheetworkers.kSwitchTab~tabInputName",
"attributes[undefined]": null
}
},
"description": "The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.",
"memberof": "Sheetworkers",
"params": [
{
"type": {
"names": [
"Object"
]
},
"description": "The trigger object",
"name": "trigger"
},
{
"type": {
"names": [
"object"
]
},
"description": "The attribute values of the character",
"name": "attributes"
}
],
"name": "kSwitchTab",
"longname": "Sheetworkers.kSwitchTab",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
617,
624
],
"filename": "tabs.js",
"lineno": 7,
"columnno": 31,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007536",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
626,
636
],
"filename": "tabs.js",
"lineno": 7,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007538",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1101,
1153
],
"filename": "tabs.js",
"lineno": 16,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007606",
"name": "tabInputName",
"type": "TemplateLiteral",
"value": ""
}
},
"undocumented": true,
"name": "tabInputName",
"longname": "Sheetworkers.kSwitchTab~tabInputName",
"kind": "constant",
"memberof": "Sheetworkers.kSwitchTab",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1210,
1249
],
"filename": "tabs.js",
"lineno": 18,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007628",
"name": "attributes[undefined]",
"type": "MemberExpression",
"value": "trigger.name",
"paramnames": []
}
},
"undocumented": true,
"name": "attributes[undefined]",
"longname": "attributes[undefined]",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1278,
1288
],
"filename": "tabs.js",
"lineno": 22,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007639",
"name": "kSwitchTab",
"type": "Identifier",
"value": "kSwitchTab"
}
},
"undocumented": true,
"name": "kSwitchTab",
"longname": "kSwitchTab",
"kind": "member",
"scope": "global"
},
{
"comment": "/**\r\n * Sets persistent tabs to their last active state\r\n * @memberof Sheetworkers\r\n * @param {object} attributes - The attribute values of the character\r\n */",
"meta": {
"range": [
1462,
1735
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007642",
"name": "kTabOnOpen",
"type": "FunctionExpression"
},
"vars": {
"": null
}
},
"description": "Sets persistent tabs to their last active state",
"memberof": "Sheetworkers",
"params": [
{
"type": {
"names": [
"object"
]
},
"description": "The attribute values of the character",
"name": "attributes"
}
],
"name": "kTabOnOpen",
"longname": "Sheetworkers.kTabOnOpen",
"kind": "function",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1485,
1492
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 29,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007646",
"name": "trigger",
"type": "Identifier",
"value": "trigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1493,
1503
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 37,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007648",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1504,
1512
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 48,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007650",
"name": "sections",
"type": "Identifier",
"value": "sections"
}
},
"undocumented": true,
"name": "sections",
"longname": "sections",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1513,
1517
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 57,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007652",
"name": "casc",
"type": "Identifier",
"value": "casc"
}
},
"undocumented": true,
"name": "casc",
"longname": "casc",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1627,
1670
],
"filename": "tabs.js",
"lineno": 32,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007670",
"name": "pseudoTrigger",
"type": "ObjectExpression",
"value": "{\"name\":\"\"}"
}
},
"undocumented": true,
"name": "pseudoTrigger",
"longname": "<anonymous>~pseudoTrigger",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1644,
1669
],
"filename": "tabs.js",
"lineno": 32,
"columnno": 27,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007673",
"name": "name",
"type": "MemberExpression",
"value": "attributes[undefined]"
}
},
"undocumented": true,
"name": "name",
"longname": "<anonymous>~pseudoTrigger.name",
"kind": "member",
"memberof": "<anonymous>~pseudoTrigger",
"scope": "static"
},
{
"comment": "",
"meta": {
"range": [
1689,
1710
],
"filename": "tabs.js",
"lineno": 33,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007681",
"name": "trigger",
"type": "Identifier",
"value": "pseudoTrigger"
}
},
"undocumented": true,
"name": "trigger",
"longname": "trigger",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1712,
1722
],
"filename": "tabs.js",
"lineno": 33,
"columnno": 39,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007683",
"name": "attributes",
"type": "Identifier",
"value": "attributes"
}
},
"undocumented": true,
"name": "attributes",
"longname": "attributes",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1754,
1764
],
"filename": "tabs.js",
"lineno": 36,
"columnno": 16,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007689",
"name": "kTabOnOpen",
"type": "Identifier",
"value": "kTabOnOpen"
}
},
"undocumented": true,
"name": "kTabOnOpen",
"longname": "kTabOnOpen",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1768,
1783
],
"filename": "tabs.js",
"lineno": 36,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs",
"code": {
"id": "astnode100007692",
"name": "type",
"type": "ArrayExpression",
"value": "[\"opener\"]"
}
},
"undocumented": true,
"name": "type",
"longname": "type",
"kind": "member",
"scope": "global"
},
{
"kind": "package",
"longname": "package:undefined",
"files": [
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\errorHead.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\getTemplate.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\index.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\kStatus.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\locals\\index.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\outputPug.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\outputTests.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\processSheet.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\renderPug.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\renderSASS.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\resolvePaths.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render\\watch.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\accessSheet.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\attribute_proxy.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\kvariables.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\listeners.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\mock20.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\mockScaffold.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\parse_cascade.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\sheetworker_aliases.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts\\utility.js",
"E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\tabs\\tabs.js"
]
}
]
;