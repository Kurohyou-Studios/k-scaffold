export const sass = [{"description":"Styling for the adaptive text construction to create textareas and inputs that grow based on their contents. Used in the default [defaultStyles](#defaultStyles) mixin, but can be used separately if you only want to include specific framework css.\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"adaptiveText","code":"\n  .adaptive{\n    display:grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-template-areas: \"content\";\n    position:relative;\n    >*{\n      grid-area: content;\n    }\n    > span{\n      opacity: 0;\n      z-index: -10;\n      @include borderPlaceholders.base-border;\n      text-transform: initial;\n      border-radius:0px;\n    }\n  }\n  .adaptive--text{\n    min-height:4rem;\n  }\n  .adaptive--text__span{\n    white-space: pre-wrap;\n    padding:2px;\n  }\n  .adaptive--text__textarea{\n    width:100%;\n    height:100%;\n    resize: none;\n  }\n  .adaptive--text__textarea,\n  .adaptive--input__input{\n    position:absolute;\n  }\n  .adaptive--input__input{\n    width:100%;\n  }\n  .adaptive--input__span{\n    padding:2px;\n    min-height:1.5rem;\n  }\n","line":{"start":7,"end":48}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"adaptive\\_adaptive.scss","name":"_adaptive.scss"}},{"description":"The styling for basic collapsible/expandable sections.\n","commentRange":{"start":8,"end":8},"context":{"type":"mixin","name":"collapsible","code":"\n  .collapse-container{\n    display:grid;\n    position:relative;\n  }\n  .text-collapse{\n    cursor:pointer;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    &:before{\n      content: var(--expandedSymbol);\n      @include materialIcons.materialStyle;\n    }\n  }\n  .text-collapse__text{\n    display:inline;\n  }\n  .text-collapse__check{\n    &:not(:checked) + .text-collapse{\n      @include borderPlaceholders.inputHighlight;\n    }\n    &:checked + .text-collapse:before{\n      content: var(--collapsedSymbol);\n    }\n  }\n  .repitem,\n  .collapse-container{\n    &:hover{\n      .collapse,.roll-container{\n        opacity:var(--collapseHoverOpacity);\n      }\n    }\n    .collapse{\n      opacity:var(--collapseBaseOpacity);\n      position:absolute;\n      right:-10px;\n      top:0px;\n      border:0px solid black;\n      border-radius:0;\n      color:var(--collapseExpandedColor);\n      text-transform:none;\n      background-color:transparent;\n      &:before{\n        content:'y';\n        font-family:pictos;\n      }\n      &:checked{\n        color:var(--collapseCollapsedColor);\n        background-color:transparent;\n        ~ .expanded,\n        ~ .collapse-container .expanded{\n          display:none !important;\n        }\n        ~ .expanded--empty:is(:not([value]),[value='']) + *,\n        ~ .collapse-container ~.expanded--empty:is(:not([value]),[value='']) + *{\n          display:none !important;\n        }\n      }\n      &:not(:checked){\n        ~ .collapsed{\n          display:none !important;\n        }\n      }\n      &:hover{\n        color:var(--collapseExpandedColor);\n      }\n    }\n  }\n  .repcontainer.editmode{\n    .collapse{\n      display:none;\n    }\n  }\n","line":{"start":9,"end":83}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_collapse.scss","name":"_collapse.scss"}},{"description":"The styling for the functionality of the fillLeft pug mixin. This allows us to easily make [radios/checkboxes that fill as the value increments](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"fillLeft","code":"\n  .fill-left{\n    display:var(--fillLeftDisplay);\n    align-self:var(--fillLeftAlignment);\n    box-sizing:border-box;\n  }\n  .fill-left__radio{\n    appearance:none;\n    -webkit-appearance:none;\n    background-color:var(--fillLeftSelectedColor);\n    width:100%;\n    height:100%;\n    cursor:pointer;\n    &[data-value]:checked:before{\n      content:attr(data-value);\n      color:var(--fillLeftDataColor);\n      font-size:var(--fillLeftDataSize);\n      place-self:center;\n      text-transform: var(--fillLeftDataTransform);\n    }\n    &:checked ~ .fill-left__radio{\n      background-color:var(--fillLeftUnselectedColor);\n    }\n  }\n","line":{"start":7,"end":31}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_fillLeft.scss","name":"_fillLeft.scss"}},{"description":"Mixin for applying our checked styling to something\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"checked","code":"\n  background-color:var(--checkedBackColor);\n  &:before{\n    content: var(--checkContent);\n    grid-area:content;\n    font-weight:var(--checkWeight);\n    place-self:start center;\n    color: var(--checkColor);\n    font-size: var(--checkSize);\n    line-height: var(--checkLineHeight);\n  }\n","line":{"start":7,"end":18}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_inputBase.scss","name":"_inputBase.scss"},"usedBy":[{"description":"Basic input styling to ensure that the various inputs are ready for future styling\n","context":{"type":"mixin","name":"inputBase","code":"\n  input{\n    &[type='checkbox']{\n      border: 1px solid var(--checkboxBorderColor);\n      cursor: pointer;\n      -webkit-appearance:none;\n      appearance:none;\n      width: var(--checkboxWidth);\n      min-width: var(--checkboxWidth);\n      height: var(--checkboxHeight);\n      min-height: var(--checkboxHeight);\n      display:grid;\n      grid-template-columns:1fr;\n      grid-template-areas:\"content\";\n      &:not(.collapse):not(.fill-left__radio):checked{\n        @include checked;\n      }\n    }\n    &[type='number']{\n      width: 3rem;\n      -moz-appearance: textfield !important;\n      text-align: center;\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  textarea,\n  input:not(:is([type='radio'],[type='checkbox'])),\n  .uneditable-input{\n    padding: var(--inputPadding);\n  }\n  input:is([type=\"text\"],[type=\"number\"]),textarea{\n    cursor:auto;\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  input:not(:where([type='checkbox'], [type='radio'])),\n  .uneditable-input,\n  textarea{\n    @include borderPlaceholders.base-border;\n  }\n  select,\n  .sheet-pseudo-select span,\n  .pseudo-select span{\n    -webkit-apperance: none;\n    appearance: none;\n    text-transform: var(--selectTextTransform);\n    overflow: hidden!important;\n    white-space: nowrap;\n    text-overflow: var(--selectTextOverflow);\n    text-align: var(--selectTextAlign);\n    color:var(--selectColor);\n  }\n  input{\n    width: auto;\n    &:placeholder{\n      color: var(--placeholderColor);\n    }\n    &.plus-control:not([value*=\"-\"])+span:before{\n      content: '+';\n    }\n  }\n  textarea{\n    resize: var(--textareaResize);\n    white-space: pre-wrap;\n    &.fixed{\n      resize: none;\n      overflow: auto;\n    }\n  }\n","line":{"start":20,"end":97}}}]},{"description":"Basic input styling to ensure that the various inputs are ready for future styling\n","commentRange":{"start":19,"end":19},"context":{"type":"mixin","name":"inputBase","code":"\n  input{\n    &[type='checkbox']{\n      border: 1px solid var(--checkboxBorderColor);\n      cursor: pointer;\n      -webkit-appearance:none;\n      appearance:none;\n      width: var(--checkboxWidth);\n      min-width: var(--checkboxWidth);\n      height: var(--checkboxHeight);\n      min-height: var(--checkboxHeight);\n      display:grid;\n      grid-template-columns:1fr;\n      grid-template-areas:\"content\";\n      &:not(.collapse):not(.fill-left__radio):checked{\n        @include checked;\n      }\n    }\n    &[type='number']{\n      width: 3rem;\n      -moz-appearance: textfield !important;\n      text-align: center;\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  textarea,\n  input:not(:is([type='radio'],[type='checkbox'])),\n  .uneditable-input{\n    padding: var(--inputPadding);\n  }\n  input:is([type=\"text\"],[type=\"number\"]),textarea{\n    cursor:auto;\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  input:not(:where([type='checkbox'], [type='radio'])),\n  .uneditable-input,\n  textarea{\n    @include borderPlaceholders.base-border;\n  }\n  select,\n  .sheet-pseudo-select span,\n  .pseudo-select span{\n    -webkit-apperance: none;\n    appearance: none;\n    text-transform: var(--selectTextTransform);\n    overflow: hidden!important;\n    white-space: nowrap;\n    text-overflow: var(--selectTextOverflow);\n    text-align: var(--selectTextAlign);\n    color:var(--selectColor);\n  }\n  input{\n    width: auto;\n    &:placeholder{\n      color: var(--placeholderColor);\n    }\n    &.plus-control:not([value*=\"-\"])+span:before{\n      content: '+';\n    }\n  }\n  textarea{\n    resize: var(--textareaResize);\n    white-space: pre-wrap;\n    &.fixed{\n      resize: none;\n      overflow: auto;\n    }\n  }\n","line":{"start":20,"end":97}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"checked"}],"file":{"path":"attribute_holders\\_inputBase.scss","name":"_inputBase.scss"}},{"description":"All input related items have their styling cleared to remove any Roll20 default styles. Note that all of your styles should be at a level higher than this mixin is used in.\n","commentRange":{"start":5,"end":10},"context":{"type":"mixin","name":"clear","code":"\n  select,\n  textarea,\n  input,\n  .uneditable-input,\n  label,\n  button {\n    all: initial;\n  }\n","line":{"start":11,"end":20}},"example":[{"type":"scss","code":"@use 'k-scaffold' as k;\n.ui-dialog .tab-content .charsheet{\n  @include k.clear;\n}"}],"group":["base styles"],"access":"public","file":{"path":"generic_scss\\_roll20clear.scss","name":"_roll20clear.scss"}},{"description":"Creates the default highlight styling for inputs/selects\n","commentRange":{"start":5,"end":5},"context":{"type":"mixin","name":"inputHighlight","code":"\n  border-width: 1px 3px;\n  border-style: solid;\n  border-color: var(--borderColor);\n  border-radius: 5px;\n  box-sizing: border-box;\n","line":{"start":6,"end":12}},"group":["borders"],"access":"public","require":[],"file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"Basic border styling for elements\n","commentRange":{"start":13,"end":13},"context":{"type":"mixin","name":"base-border","code":"\n  border-width: 1px 3px;\n  border-style: solid;\n  border-radius: 5px;\n  border-color: transparent;\n  box-sizing: border-box;\n","line":{"start":14,"end":20}},"group":["borders"],"access":"public","file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"Styling for elements that should have a box around them\n","commentRange":{"start":21,"end":21},"context":{"type":"mixin","name":"boxed","code":"\n  border: 2px solid var(--borderColor);\n  border-radius:0;\n  box-sizing:border-box;\n","line":{"start":22,"end":26}},"group":["borders"],"access":"public","require":[],"file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"The basic stylings for a button like object. Provides some basic coloring, shadowing, and hover/active state styling\n","commentRange":{"start":7,"end":7},"context":{"type":"mixin","name":"base-button","code":"\n\tbackground-color: #DCDCDC33;\n\tborder-radius: 5px;\n\tbox-shadow: 0 2px 4px black;\n\tborder-width: 0;\n\ttransition: {\n\t\tproperty:box-shadow,backdrop-filter;\n\t\tduration:200ms;\n\t\ttiming-function:ease-out;\n\t};\n\tbackdrop-filter:blur(1px);\n\toverflow:hidden;\n\t&:is(:hover,:focus){\n\t\tbackground-color: #85858580;\n\t\tbox-shadow: 0 4px 6px black;\n\t\tbackdrop-filter:blur(2px);\n\t}\n\t&:active{\n\t\tbackground-color: #858585ff;\n\t\tbox-shadow: 0 1px 2px black;\n\t\tbackdrop-filter:blur(0px);\n\t}\n","line":{"start":8,"end":30}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"},"usedBy":[{"description":"Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).\n","context":{"type":"mixin","name":"die-button","code":"\n\t@include base-button;\n\tline-height: 14px;\n\t/*height to vertically center a 2rem dicefontd10*/\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tpadding: 5px 3px 7px;\n","line":{"start":33,"end":41}}},{"description":"Basic styling for buttons with text (or text and icons)\n","context":{"type":"mixin","name":"text-button","code":"\n\tpadding: 5px 7px;\n\t@include base-button;\n","line":{"start":44,"end":47}}}]},{"description":"Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).\n","commentRange":{"start":32,"end":32},"context":{"type":"mixin","name":"die-button","code":"\n\t@include base-button;\n\tline-height: 14px;\n\t/*height to vertically center a 2rem dicefontd10*/\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tpadding: 5px 3px 7px;\n","line":{"start":33,"end":41}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"base-button"}],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"}},{"description":"Basic styling for buttons with text (or text and icons)\n","commentRange":{"start":43,"end":43},"context":{"type":"mixin","name":"text-button","code":"\n\tpadding: 5px 7px;\n\t@include base-button;\n","line":{"start":44,"end":47}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"base-button"}],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"}},{"description":"Styling for our roll buttons\n","commentRange":{"start":48,"end":48},"context":{"type":"mixin","name":"roller","code":"\n  display: flex;\n  align-items: center;\n  gap: var(--half-gap);\n  &:before{\n    content:'T';\n    font-family:dicefontd20;\n  }\n","line":{"start":49,"end":57}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"},"usedBy":[{"description":"Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.\n","context":{"type":"mixin","name":"button","code":"\n  button{\n    cursor: pointer;\n  }\n\t.roller{\n\t\t@include roller;\n\t}\n","line":{"start":59,"end":66}}}]},{"description":"Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.\n","commentRange":{"start":58,"end":58},"context":{"type":"mixin","name":"button","code":"\n  button{\n    cursor: pointer;\n  }\n\t.roller{\n\t\t@include roller;\n\t}\n","line":{"start":59,"end":66}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"roller"}],"file":{"path":"attribute_holders\\_buttons.scss","name":"_buttons.scss"}},{"description":"A mixin that switches the scaffold's roll template color variables (including sheet variables) over to dark mode specific ones. Should only be used directly inside a `.sheet-rolltemplate-TEMPLATENAME` rule.\n","commentRange":{"start":22,"end":28},"context":{"type":"mixin","name":"darkRoll","code":"\n  &.sheet-rolltemplate-darkmode{\n    @include darkMode;\n    --inlineRollBackColor: var(--dm-inlineRollBackColor);\n    --inlineRollColor: var(--fontColor);\n    --inlineRollCritColor: var(--dm-inlineRollCritColor);\n    --inlineRollFumbleColor: var(--dm-inlineRollCritColor);\n    --inlineRollImportantColor: var(--dm-inlineRollCritColor);\n  }\n","line":{"start":29,"end":38}},"example":[{"type":"scss","code":"// Will apply the darkmode styling attributes to the default template when dark mode is enabled.\n@use 'k-scaffold' as k;\n.sheet-rolltemplate-default{\n  @include k.darkRoll;\n}"}],"groupDescriptions":{"color modes":"A mixin that switches the scaffold's sheet color variables over to dark mode specific versions."},"group":["color modes"],"access":"public","require":[],"file":{"path":"generic_scss\\_darkmode.scss","name":"_darkmode.scss"}},{"description":"These variables control how the default translations included with the scaffold function\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"Animation variables","code":"\n  --revealTime:500ms;\n  --revealFunction: ease-in-out;\n  --revealTrans: var(--revealTime) var(--revealFunction);\n","line":{"start":7,"end":11}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_animation.scss","name":"_animation.scss"}},{"description":"These variables control aspects of the borders in the k-scaffold\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"Border variables","code":"\n  --borderWidth:1px;\n  --borderStyle:solid;\n","line":{"start":7,"end":10}},"group":["css variables"],"access":"public","file":{"path":"generic_scss\\variables\\_border.scss","name":"_border.scss"}},{"description":"These variables control aspects of the checkbox and radio display in the k-scaffold.\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"checked variables","code":"\n  --checkContent: '✓';\n  --checkWeight: bold;\n  --checkSize: 150%;\n  --checkLineHeight: calc(var(--checkSize) / 3);\n\n  --checkboxBorderWidth: var(--borderWidth);\n  --checkboxBorderStyle: var(--borderStyle);\n  --lm-checkboxBorderColor: var(--lm-borderColor);\n  --dm-checkboxBorderColor: var(--dm-borderColor);\n  --checkboxBorderColor: var(--lm-checkBorderColor);\n\n  --checkboxWidth: 14px;\n  --checkboxHeight: 14px;\n","line":{"start":7,"end":21}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_checked.scss","name":"_checked.scss"}},{"description":"Variables that control the styling of the collapse inputs\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"collapse variables","code":"\n  --expandedSymbol:'unfold_less';\n  --collapsedSymbol: 'unfold_more';\n\n  --collapseHoverOpacity: 1;\n  --collapseBaseOpacity: 0;\n\n  --lm-collapseExpandedColor:var(--lm-selectedColor);\n  --dm-collapseExpandedColor:var(--dm-selectedColor);\n  --collapseExpandedColor: var(--lm-collapseExpandedColor);\n\n  --lm-collapseCollapsedColor:var(--lm-unselectedColor);\n  --dm-collapseCollapsedColor:var(--dm-unselectedColor);\n  --collapseCollapsedColor: var(--lm-collapseCollapsedColor);\n","line":{"start":7,"end":21}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_collapse.scss","name":"_collapse.scss"}},{"description":"Variables for defining colors in your sheet using light mode and dark mode\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"colors variables","code":"\n  --lm-backColor:#fff;\n  --dm-backColor:var(--dark-surface1);\n  --backColor:var(--lm-backColor);\n\n  --lm-selectedColor:#000;\n  --dm-selectedColor:#007476;\n  --selectedColor:var(--lm-selectedColor);\n\n  --lm-unselectedColor1:lightgrey;\n  --dm-unselectedColor1:#0e0e0e;\n  --unselectedColor1:var(--lm-unselectedColor1);\n\n  --lm-unselectedColor2:transparent;\n  --dm-unselectedColor2:transparent;\n  --unselectedColor1:var(--lm-unselectedColor2);\n\n  --lm-checkColor:#000;\n  --dm-checkColor:#ff0000;\n  --checkColor:var(--lm-checkColor);\n  --lm-checkedBackColor:transparent;\n  --dm-checkedBackColor:transparent;\n  --checkedBackColor:var(--lm-checkedBackColor);\n\n  --lm-borderColor:#000;\n  --dm-borderColor:lightgrey;\n  --borderColor:var(--lm-borderColor);\n\n  --lm-fontColor:#0f0f0f;\n  --dm-fontColor:var(--dark-primarytext);\n  --fontColor:var(--lm-fontColor);\n\n  --lm-disabledColor:var(--lm-unselectedColor1);\n  --dm-disabledColor:var(--dm-unselectedColor1);\n  --disabledColor:var(--lm-disabledColor);\n","line":{"start":7,"end":42}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_colors.scss","name":"_colors.scss"}},{"description":"Variables that control the style behavior of the fillLeft construction\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"fillLeft variables","code":"\n  --fillLeftDisplay: flex;\n  --fillLeftAlignment: center;\n\n  --fillLeftDataTransform: uppercase;\n  --fillLeftDataSize: var(--size6);\n\n  // Colors\n  --lm-fillLeftSelectedColor: var(--lm-selectedColor);\n  --dm-fillLeftSelectedColor: var(--dm-selectedColor);\n  --fillLeftSelectedColor: var(--lm-fillLeftSelectedColor);\n\n  --lm-fillLeftUnselectedColor: var(--lm-unselectedColor);\n  --dm-fillLeftUnselectedColor: var(--dm-unselectedColor);\n  --fillLeftUnselectedColor: var(--lm-fillLeftUnselectedColor);\n\n  --lm-fillLeftDataColor: var(--lm-backColor);\n  --dm-fillLeftDataColor: var(--dm-backColor);\n  --fillLeftDataColor: var(--lm-fillLeftDataColor);\n","line":{"start":7,"end":26}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_fillLeft.scss","name":"_fillLeft.scss"}},{"description":"Variables that control how font family, and font-size of text on the sheet.\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"font variables","code":"\n  // Font families\n  --font1:var(--topHeadFont);\n  --font2:var(--topHeadFont);\n  --font3:var(--midHeadFont);\n  --font4:var(--midHeadFont);\n  --font5:var(--midHeadFont);\n  --font6:var(--contentHeadFont);\n  --font7:var(--contentHeadFont);\n\n  // Font sizes\n  --baseFontSize: 16px;\n  --size1:300%;\n  --size2:250%;\n  --size3:200%;\n  --size4:150%;\n  --size5:125%;\n  --size6:100%;\n  --size7:87.5%;\n\n  // Default icon font size\n  --icon-size:24px;\n\n  //Default fonts used\n  --font-icon: 'Material Icons';\n","line":{"start":7,"end":32}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_font.scss","name":"_font.scss"}},{"description":"Variables to control the display of input elements\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"input variables","code":"\n  --inputTopPadding: 2px;\n  --inputRightPadding: 2px;\n  --inputBottomPadding: 2px;\n  --inputLeftPadding: 2px;\n  --inputPadding:\n    var(--inputTopPadding)\n    var(--inputRightPadding)\n    var(--inputBottomPadding)\n    var(--inputLeftPadding);\n  \n  --lm-placeholderColor:#ededed80;\n  --dm-placeholderColor:#3f3f3f80;\n  --placeholderColor: var(--lm-placeholderColor);\n\n  --textareaResize: vertical;\n","line":{"start":7,"end":23}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_input.scss","name":"_input.scss"}},{"description":"Variables to control the display of the various label constructions\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"label variables","code":"\n\n  --input-label-gap:var(--half-gap) var(--half-gap);\n\n  --input-label-text-transform: capitalize;\n","line":{"start":7,"end":12}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_label.scss","name":"_label.scss"}},{"description":"Variables to control basic layout of the k-scaffold\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"layout variables","code":"\n  // Layout variables\n  // Variables to define our basic gap between layout elements. Followed by several gaps that are mathematically related to it.\n  --normal-gap-x:1rem;\n  --normal-gap-y:1rem;\n  --normal-gap: var(--normal-gap-x);\n\n  // Half gaps\n  --half-gap-x:calc(var(--normal-gap-x) / 2);\n  --half-gap-y:calc(var(--normal-gap-y) / 2);\n  --half-gap: var(--half-gap-x);\n\n  // Tiny gaps (1/4 gap)\n  --tiny-gap-x:calc(var(--half-gap-x) / 2);\n  --tiny-gap-y:calc(var(--half-gap-y) / 2);\n  --tiny-gap: var(--tiny-gap-x);\n\n  // Big gaps (double gap)\n  --big-gap-x:calc(var(--normal-gap-x) * 2);\n  --big-gap-y:calc(var(--normal-gap-y) * 2);\n  --big-gap: var(--big-gap-x);\n","line":{"start":7,"end":28}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_layout.scss","name":"_layout.scss"}},{"description":"Variables to control the display of selects\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"select variables","code":"\n  --lm-selectColor: var(--lm-fontColor);\n  --dm-selectColor: var(--dm-fontColor);\n  --selectColor: var(--lm-fontColor);\n\n  --selectTextOverflow: var(--textOverflow);\n  --selectTextAlign: center;\n  --selectTextTransform: capitalize;\n","line":{"start":7,"end":15}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss\\variables\\_select.scss","name":"_select.scss"}},{"description":"Styling for our various special fieldset constructions. e.g. [customControlFieldset](/pug.html#customControlFieldset).\n","commentRange":{"start":7,"end":7},"context":{"type":"mixin","name":"fieldsetStyling","code":"\n  .repitem {\n    >input:not([type='checkbox']) {\n      width: 100%;\n    }\n\n    .headed-textarea,\n    .description {\n      grid-column: 1/-1;\n    }\n  }\n\n  .repcontainer {\n    display: grid;\n    gap: var(--normal-gap);\n  }\n\n  .repeating-container {\n    display: grid;\n    grid-template-areas: 'header';\n    align-self: start;\n\n    >.header {\n      grid-area: header;\n    }\n    :is(.repcontrol-button,.repcontrol_edit) {\n      opacity: 0;\n      transition: var(--revealTrans);\n    }\n    &:is(:hover, :focus-within, :focus) :is(.repcontrol-button,.repcontrol_edit) {\n      opacity: 1;\n    }\n  }\n\n  // Adding pseudo rep styling\n  .repcontrol-button {\n    align-self: start;\n\n    ~.repcontrol {\n      justify-self: end;\n      z-index: 100;\n\n      >.repcontrol_add {\n        display: none !important;\n      }\n    }\n  }\n\n  .repcontrol-button--add {\n    justify-self: start;\n    width: 15px;\n    height: 15px;\n    padding: 4px;\n    font-size: 0;\n    color: var(--col-alt);\n    border: 1px solid var(--col-alt);\n\n    &::before {\n      inset: 0;\n      place-self: center;\n      font-family: var(--font-icon);\n      font-size: 12px;\n      content: 'add';\n    }\n  }\n\n  //End pseudo rep styling\n","line":{"start":8,"end":75}},"group":["fieldsets"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"fieldsets\\_fieldsetStyling.scss","name":"_fieldsetStyling.scss"}},{"description":"Styling for items that need the pictos custom font\n","commentRange":{"start":9,"end":9},"context":{"type":"mixin","name":"pictosCustom","code":"\n  font-family: pictos custom;\n  text-transform: none;\n","line":{"start":10,"end":13}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the pictos 3 font\n","commentRange":{"start":14,"end":14},"context":{"type":"mixin","name":"pictos3","code":"\n  font-family: pictos three;\n  text-transform: none;\n","line":{"start":15,"end":18}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d4 font\n","commentRange":{"start":20,"end":20},"context":{"type":"mixin","name":"diceD4","code":"\n  font-family: dicefontd4 !important;\n  text-transform: none !important;\n","line":{"start":21,"end":24}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d6 font\n","commentRange":{"start":26,"end":26},"context":{"type":"mixin","name":"diceD6","code":"\n  font-family: dicefontd6 !important;\n  text-transform: none !important;\n","line":{"start":27,"end":30}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d8 font\n","commentRange":{"start":32,"end":32},"context":{"type":"mixin","name":"diceD8","code":"\n  font-family: dicefontd8 !important;\n  text-transform: none !important;\n","line":{"start":33,"end":36}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d10 font\n","commentRange":{"start":38,"end":38},"context":{"type":"mixin","name":"diceD10","code":"\n  font-family: dicefontd10 !important;\n  text-transform: none !important;\n","line":{"start":39,"end":42}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d12 font\n","commentRange":{"start":44,"end":44},"context":{"type":"mixin","name":"diceD12","code":"\n  font-family: dicefontd12 !important;\n  text-transform: none !important;\n","line":{"start":45,"end":48}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d20 font\n","commentRange":{"start":50,"end":50},"context":{"type":"mixin","name":"diceD20","code":"\n  font-family: dicefontd20 !important;\n  text-transform: none !important;\n","line":{"start":51,"end":54}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d30 font\n","commentRange":{"start":56,"end":56},"context":{"type":"mixin","name":"diceD30","code":"\n  font-family: dicefontd30 !important;\n  text-transform: none !important;\n","line":{"start":57,"end":60}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Utility classes for applying font styles\n","commentRange":{"start":15,"end":15},"context":{"type":"mixin","name":"textStyles","code":"\n  .sheet-italics,\n  .italics{\n    @include italics;\n  }\n","line":{"start":16,"end":21}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Basic styling for headers.\n","commentRange":{"start":22,"end":22},"context":{"type":"mixin","name":"baseHeader","code":"\n  @include baseText;\n  color:var(--fontColor);\n  display: block;\n  white-space: nowrap;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-weight:normal;\n","line":{"start":23,"end":31}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h1 level headers\n","context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}}},{"description":"Base styling of h2 level headers\n","context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}}},{"description":"Base styling of h3 level headers\n","context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}}},{"description":"Base styling of h4 level headers\n","context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}}},{"description":"Base styling of h5 level headers\n","context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}}},{"description":"Base styling of h6 level headers\n","context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}}}]},{"description":"Headers that should pop!\n","commentRange":{"start":33,"end":33},"context":{"type":"mixin","name":"importantHeader","code":"\n  text-transform: uppercase;\n  font-weight: normal;\n","line":{"start":34,"end":37}},"group":["fonts"],"access":"public","file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h1 level headers\n","context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}}},{"description":"Base styling of h2 level headers\n","context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}}},{"description":"Base styling of h3 level headers\n","context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}}}]},{"description":"Headers that should be important, but not eye-catching\n","commentRange":{"start":39,"end":39},"context":{"type":"mixin","name":"midHeader","code":"\n  &:not(:where(input)){\n    text-transform:capitalize;\n  }\n","line":{"start":40,"end":44}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h4 level headers\n","context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}}},{"description":"Base styling of h5 level headers\n","context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}}},{"description":"Base styling of h6 level headers\n","context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}}}]},{"description":"Base styling of h1 level headers\n","commentRange":{"start":47,"end":47},"context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h2 level headers\n","commentRange":{"start":63,"end":63},"context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h3 level headers\n","commentRange":{"start":79,"end":79},"context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h4 level headers\n","commentRange":{"start":95,"end":95},"context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h5 level headers\n","commentRange":{"start":111,"end":111},"context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h6 level headers\n","commentRange":{"start":128,"end":128},"context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Header element styling is applied to normal header elements (h1 - h6) as well as elements that have an `aria-level` defined on them. Note that a `role='heading'` should also be defined on these html elements for full accessibility.\n","commentRange":{"start":145,"end":145},"context":{"type":"mixin","name":"headerElements","code":"\n  h1,\n  *[aria-level='1']{\n    @include h1;\n  }\n  h2,\n  *[aria-level='2']{\n    @include h2;\n  }\n  h3,\n  *[aria-level='3']{\n    @include h3;\n  }\n  h4,\n  *[aria-level='4']{\n    @include h4;\n  }\n  h5,\n  *[aria-level='5']{\n    @include h5;\n  }\n  h6,\n  *[aria-level='6']{\n    @include h6;\n  }\n","line":{"start":146,"end":171}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"The styling that is applied to all text elements.\n","commentRange":{"start":172,"end":172},"context":{"type":"mixin","name":"textElements","code":"\n  span,\n  input,\n  textarea,\n  button,\n  select{\n    @include baseText;\n    color: inherit;\n    font-family: inherit;\n    font-size:inherit;\n    line-height:inherit;\n  }\n  @each $size in 1,2,3,4,5,6,7{\n    .text-#{$size},\n    .sheet-text-#{$size}{\n      font-size: var(--size#{$size});\n    }\n  }\n  .capitalize,\n  .sheet-capitalize{\n    text-transform: capitalize !important;\n  }\n  .lowercase,\n  .sheet-lowercase{\n    text-transform:lowercase !important;\n  }\n  .uppercase,\n  .sheet-uppercase{\n    text-transform:uppercase !important;\n  }\n","line":{"start":173,"end":203}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss\\_textLevel.scss","name":"_textLevel.scss"}},{"description":"Utility classes for applying aspect ratios and sizes\n","commentRange":{"start":7,"end":9},"context":{"type":"mixin","name":"Sizes and Ratios","code":"\n  .ratio1-1,\n  .sheet-ratio1-1{\n    @include ratio1_1;\n  }\n","line":{"start":10,"end":15}},"group":["layout"],"access":"public","require":[],"file":{"path":"generic_scss\\_sizingAndRatio.scss","name":"_sizingAndRatio.scss"}},{"description":"Mixin that includes all of the framework's styles. Should be included in a 3 class declaration for character sheets.\n","commentRange":{"start":24,"end":30},"context":{"type":"mixin","name":"defaultStyles","code":"\n  // Clear roll20 styles\n  @include genericStyle.clear;\n\n  // Basic Layout constructs\n  @include genericStyle.layout;\n  @include genericStyle.borderStyles;\n  @include genericStyle.sizesAndRatios;\n  \n  // Text stylings\n  @include genericStyle.textElements;\n  @include genericStyle.materialIcons;\n  @include genericStyle.textStyles;\n  @include genericStyle.headerElements;\n  @include genericStyle.r20FontClasses;\n\n  // Input and button\n  @include attributeConstructs.inputBase;\n  @include attributeConstructs.button;\n  @include attributeConstructs.collapsible;\n  @include attributeConstructs.fillLeft;\n  @include labels.input-label;\n  @include labels.headed-textarea;\n  @include adaptive.adaptiveText;\n\n  @include fieldsetStyling.fieldsetStyling;\n","line":{"start":31,"end":57}},"example":[{"type":"scss","code":"@use 'k-scaffold' as k;\n\n.ui-dialog .tab-content .charsheet{\n  @include k.defaultStyles;\n}"}],"access":"public","group":["undefined"],"require":[],"file":{"path":"_k.scss","name":"_k.scss"},"usedBy":[{"description":"Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.\n","context":{"type":"mixin","name":"defaultRollStyling","code":"\n  @include defaultStyles;\n  @include rolltemplate.rollStyles;\n","line":{"start":66,"end":69}}}]},{"description":"Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.\n","commentRange":{"start":59,"end":65},"context":{"type":"mixin","name":"defaultRollStyling","code":"\n  @include defaultStyles;\n  @include rolltemplate.rollStyles;\n","line":{"start":66,"end":69}},"example":[{"type":"scss","code":"@use 'k-scaffold/k';\n\n.sheet-rolltemplate-TEMPLATENAME{\n  @include k.defaultRollStyling;\n}"}],"access":"public","group":["undefined"],"require":[{"type":"mixin","name":"defaultStyles"}],"file":{"path":"_k.scss","name":"_k.scss"}},{"description":"Styling for the built-in layout out utility classes\n @group layout\n","commentRange":{"start":1,"end":2},"context":{"type":"mixin","name":"layout","code":"\n  // Flexbox variables\n  .flex-box,\n  .sheet-flex-box{\n    display:flex;\n  }\n  .flex-wrap,\n  .sheet-flex-wrap{\n    flex-wrap:wrap;\n  }\n  .justify-space-around,\n  .sheet-justify-space-around{\n    justify-content:space-around;\n  }\n  .justify-space-between,\n  .sheet-justify-space-between{\n    justify-content:space-between;\n  }\n  .justify-center,\n  .sheet-justify-center{\n    justify-content:center;\n  }\n  \n  .flex-min-content,\n  .sheet-flex-min-content{\n    flex: 1 0 min-content;\n  }\n  .stacked{\n    flex-direction:column;\n    &.center>*{\n      text-align: center;\n    }\n    &:not(.center){\n      align-items:start;\n    }\n    > [name]:not([type=\"number\"]):not([type=\"checkbox\"]):not([type=\"radio\"]){\n      width:100%;\n    }\n  }\n  .flex-column,\n  .sheet-flex-column{\n    flex-direction: column;\n  }\n  .flex-row-reverse,\n  .sheet-flex-row-revers{\n    flex-direction: row-reverse;\n  }\n  .flex-column-reverse,\n  .sheet-flex-column-reverse{\n    flex-direction: column-reverse;\n  }\n\n  // Gap/Flex combined variables\n  .normal-gap,\n  .sheet-normal-gap{\n    gap:var(--normal-gap);\n  }\n  .normal-gap-x,\n  .sheet-normal-gap-x{\n    column-gap:var(--normal-gap-x);\n  }\n  .normal-gap-y,\n  .sheet-normal-gap-y{\n    row-gap:var(--normal-gap-y);\n  }\n  \n  .half-gap,\n  .sheet-half-gap{\n    gap:var(--half-gap);\n  }\n  .half-gap-x,\n  .sheet-half-gap-x{\n    column-gap:var(--half-gap-x);\n  }\n  .half-gap-y,\n  .sheet-half-gap-y{\n    row-gap:var(--half-gap-y);\n  }\n  \n  .tiny-gap,\n  .sheet-tiny-gap{\n    gap:var(--tiny-gap);\n  }\n  .tiny-gap-x,\n  .sheet-tiny-gap-x{\n    column-gap:var(--tiny-gap-x);\n  }\n  .tiny-gap-y,\n  .sheet-tiny-gap-y{\n    row-gap:var(--tiny-gap-y);\n  }\n  \n  .big-gap,\n  .sheet-big-gap{\n    gap:var(--big-gap);\n  }\n  .big-gap-x,\n  .sheet-big-gap-x{\n    column-gap:var(--big-gap-x);\n  }\n  .big-gap-y,\n  .sheet-big-gap-y{\n    row-gap:var(--big-gap-y);\n  }\n\n  // Grid variables\n  .grid,\n  .sheet-grid{\n    display:grid;\n  }\n\n  .grid-span-2,\n  .sheet-grid-span-2{\n    grid-column:span 2;\n  }\n  .grid-span-all,\n  .sheet-grid-span-all{\n    grid-column:1/-1;\n  }\n\n  .grid-column,\n  .sheet-grid-column{\n    grid-auto-flow:column;\n  }\n  .grid-dense,\n  .sheet-grid-dense{\n    grid-auto-flow:dense;\n  }\n","line":{"start":3,"end":131}},"access":"public","group":["undefined"],"require":[],"file":{"path":"generic_scss\\_layout.scss","name":"_layout.scss"}},{"description":"Mixin that creates the properties that should be assigned for inline rolls\n","commentRange":{"start":1,"end":1},"context":{"type":"mixin","name":"rollProperties","code":"\n  // Background settings\n  background-color: var(--inlineRoll#{$type}BackColor);\n\n  // Font settings\n  color:var(--inlineRoll#{$type}Color);\n  font-family:var(--inlineRoll#{$type}Font);\n  font-size:var(--inlineRoll#{$type}Size);\n\n  // Spacing\n  padding: var(--inlineRoll#{$type}Padding);\n  border: var(--inlineRoll#{$type}Border);\n  margin: var(--inlineRoll#{$type}Margin);\n","line":{"start":2,"end":15}},"access":"public","group":["undefined"],"require":[],"file":{"path":"rolltemplate\\helpers\\_index.scss","name":"_index.scss"}},{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","commentRange":{"start":27,"end":28},"context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}},"group":["utility"],"access":"public","require":[{"type":"mixin","name":"boxed"},{"type":"mixin","name":"base-border"},{"type":"mixin","name":"inputHighlight"}],"file":{"path":"generic_scss\\_borderPlaceholders.scss","name":"_borderPlaceholders.scss"}},{"description":"Utility classes that are provided to apply material icon styling to your elements\n","commentRange":{"start":16,"end":17},"context":{"type":"mixin","name":"materialIcons","code":"\n  .sheet-material-icons,\n  .material-icons {\n    @include materialStyle;\n  }\n","line":{"start":18,"end":23}},"group":["utility"],"groupDescriptions":{"materialstyle":"Mixin to add the necessary styling to use material icons."},"example":[{"type":"scss","code":" @use 'k-scaffold' as k;\n.charsheet .material-icon{\n  @include k.materialStyle;\n}"}],"access":"public","require":[],"file":{"path":"generic_scss\\_materialIcons.scss","name":"_materialIcons.scss"}},{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","commentRange":{"start":62,"end":63},"context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}},"group":["utility"],"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"access":"public","require":[{"type":"mixin","name":"pictos3"},{"type":"mixin","name":"pictosCustom"},{"type":"mixin","name":"diceD4"},{"type":"mixin","name":"diceD6"},{"type":"mixin","name":"diceD8"},{"type":"mixin","name":"diceD10"},{"type":"mixin","name":"diceD12"},{"type":"mixin","name":"diceD20"},{"type":"mixin","name":"diceD30"}],"file":{"path":"generic_scss\\_pictos.scss","name":"_pictos.scss"}}];
export const pug = [{"meta":{"name":"tabs","description":"A generic mixin to create tabs using jQuery. It uses a nested {@link tab} mixin to define tabs. Any content outside those mixin in put in the containing div, before the tabs. Attributes passed to the mixin are passed to the outer containing div.","arguments":[{"name":"name","description":"The name of the tabs construct. Used in all elements so that you may vary the styling of different tabs","type":"string","default":"tabs","nullable":false,"optional":true,"original":"{string} [name=tabs] - The name of the tabs construct. Used in all elements so that you may vary the styling of different tabs"},{"name":"defaultActiveTab","description":"The name of the tab that should be active by default.","type":"string","default":null,"nullable":false,"optional":true,"original":"{string} [defaultActiveTab] - The name of the tab that should be active by default."},{"name":"persistent","description":"Whether the tabs should be persistent and load their last state when the sheet is reloaded. True by default.","type":"boolean","default":"true","nullable":false,"optional":true,"original":"{boolean} [persistent = true] - Whether the tabs should be persistent and load their last state when the sheet is reloaded. True by default."}],"attributes":null,"example":"include ../_k.pug\n// Tabs that are persistent (default) and have the background tab as the default tab\n+tabs({name:\"sheet-tabs\",defaultActiveTab:'background'})(class=\"outer\")\n  span before the header\n  +tab({})(class=\"tab-vertical\")\n    span(style=\"background: white;\") Tab 1 content\n  +tab({name:\"background\"})(class=\"tab_horizontal\")\n    span(style=\"background: white;\") Tab background content\n  +tab({name:\"history\", button:{class:\"custom-button\"}})(class=\"tab_horizontal\")\n    span(style=\"background: white;\") Tab history content\n  +tab({name:\"inventory\", container:\"span\"})(class=\"tab_horizontal\")\n    span(style=\"background: white;\") Tab inventory content\n    \n// Tabs that are NOT persistent and have no default tab (aka all tab content will be hidden by default)\n+tabs({name:\"sheet-tabs-2\",persistent:false})(class=\"outer\")\n  span before the header\n  +tab({})(class=\"tab-vertical\")\n    span(style=\"background: white;\") Tab 1 content\n  +tab({name:\"background\"})(class=\"tab_horizontal\")\n    span(style=\"background: white;\") Tab background content\n  +tab({name:\"history\", button:{class:\"custom-button\"}})(class=\"tab_horizontal\")\n    span(style=\"background: white;\") Tab history content\n  +tab({name:\"inventory\", container:\"span\"})(class=\"tab_horizontal\")\n    span(style=\"background: white;\") Tab inventory content\n"},"file":"lib\\tabs\\_tabs.pug","source":"mixin tabs({name=\"tabs\",defaultActiveTab,persistent=true})\r\n  //- Cleanup the name to use \"-\" instead of spaces, and no problematic chars\r\n  //- We use \"-\" as in action buttons, because this name will be used in CSS classes\r\n  -\r\n    defaultActiveTab = defaultActiveTab ?\r\n      actionButtonName(replaceProblems(defaultActiveTab)) :\r\n      undefined;\r\n  - sectionName = actionButtonName(replaceProblems(name));\r\n  if persistent\r\n    |<!-- sectionName:#{sectionName} -->\r\n    - const inputObj = {name:`${sectionName.replace(/\\-/g,'_')} tab`};\r\n    if defaultActiveTab\r\n      - inputObj.value = `nav-tabs-${sectionName}--${defaultActiveTab}`;\r\n    +hidden(inputObj)\r\n    - varObjects.persistentTabs.push(inputObj.name.replace(/attr_/,''))\r\n\r\n  //- Storage for all the tabs in this construct, plus a local mixin to pass\r\n  //- several pug blocks\r\n  - const tabs = [];\r\n  mixin tab({name,button={},container=\"div\"})\r\n    - tabName = actionButtonName(replaceProblems(name || `tab${tabs.length + 1}`));\r\n    - if (tabs.filter(tab => tab.name === tabName).length) { throw new Error(`Tab \"${tabName}\" already exists in \"${sectionName}\".`); }\r\n    //- Cleanup the name of the navigation button\r\n    - button.name = `nav-tabs-${sectionName}--${tabName}`;\r\n    //- Cleanup the class, add our own internal classes\r\n    - button.class = button.class ? ` ${replaceProblems(button.class)}` : \"\";\r\n    - button.class = `tabs__button tabs--${sectionName}__button tabs--${sectionName}__button--${tabName}${button.class}${!persistent && defaultActiveTab === tabName ? ' k-active-button' : ''}`;\r\n    - button['data-container-button'] = sectionName;\r\n    - button['data-button'] = tabName;\r\n    - const content = button.content;\r\n    - delete button.content;\r\n\r\n    //- If not provided, hook the button to the default tab switcher listener\r\n    - button.trigger = button.trigger || {triggeredFuncs:[\"kSwitchTab\"]};\r\n    //- Cleanup the class of the tab content passed through the implicit attributes\r\n    //- and add our own internal classes\r\n    - attributes.class = attributes.class ? ` ${replaceProblems(attributes.class)}` : '';\r\n    - attributes.class = `tabs__container tabs--${sectionName}__container tabs--${sectionName}__container--${tabName}${attributes.class}${!persistent && defaultActiveTab === tabName ? ' k-active-tab' : ''}`;\r\n    //- Store the tab definition\r\n    - tabs.push({name:tabName, container, button, attributes, block, content});\r\n      \r\n\r\n  //- Put everything in a global div with appropriate classes for CSS styling\r\n  //- and proper HTML organization\r\n  - attributes.class = attributes.class ? ` ${replaceProblems(attributes.class)}` : '';\r\n  - attributes.class = `tabs tabs--${sectionName}${attributes.class}`;\r\n  div&attributes(attributes)\r\n    //- Execute the block passed to the +tabs mixin, if any\r\n    //- this fills the `tabs` array above when the +tab nested mixin\r\n    //- is called in the block\r\n    - block ? block() : undefined;\r\n\r\n    //- Navigation header with action button to switch tabs\r\n    nav(class=`tabs__header tabs--${sectionName}__header`)\r\n      ul.tabs__nav-list\r\n        each tab, index in tabs\r\n          if !tab.content\r\n            - tab.button['data-i18n'] = `tabs-${sectionName}-${tab.name}`;\r\n          li.tabs__nav-item\r\n            +action(tab.button)(data-container-tab=sectionName data-tab=tab.name)\r\n              if tab.content\r\n                != tab.content\r\n    \r\n    //- Global div storing all the tabs one after another\r\n    //- only one will be visible at the same time\r\n    div(class=`tabs__body tabs--${sectionName}__body`)\r\n      each tab, index in tabs\r\n        - const container = tab.container;\r\n        #{container}(data-container-tab=sectionName data-tab=tab.name)&attributes(tab.attributes)\r\n          - tab.block && tab.block();\r","output":"<!-- Tabs that are persistent (default) and have the background tab as the default tab-->\n<!-- sectionName:sheet-tabs -->\n<input name=\"attr_sheet_tabs_tab\" value=\"nav-tabs-sheet-tabs--background\" type=\"hidden\" title=\"@{sheet_tabs_tab}\"/>\n<div class=\"tabs tabs--sheet-tabs outer\">\n  <span>\n    before the header\n  </span>\n  <nav class=\"tabs__header tabs--sheet-tabs__header\">\n    <ul class=\"tabs__nav-list\">\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs__button tabs--sheet-tabs__button--tab1\" name=\"act_nav-tabs-sheet-tabs--tab1\" data-container-button=\"sheet-tabs\" data-button=\"tab1\" data-i18n=\"tabs-sheet-tabs-tab1\" type=\"action\" title=\"%{nav-tabs-sheet-tabs--tab1}\" data-container-tab=\"sheet-tabs\" data-tab=\"tab1\"></button>\n      </li>\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs__button tabs--sheet-tabs__button--background\" name=\"act_nav-tabs-sheet-tabs--background\" data-container-button=\"sheet-tabs\" data-button=\"background\" data-i18n=\"tabs-sheet-tabs-background\" type=\"action\" title=\"%{nav-tabs-sheet-tabs--background}\" data-container-tab=\"sheet-tabs\" data-tab=\"background\"></button>\n      </li>\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs__button tabs--sheet-tabs__button--history custom-button\" name=\"act_nav-tabs-sheet-tabs--history\" data-container-button=\"sheet-tabs\" data-button=\"history\" data-i18n=\"tabs-sheet-tabs-history\" type=\"action\" title=\"%{nav-tabs-sheet-tabs--history}\" data-container-tab=\"sheet-tabs\" data-tab=\"history\"></button>\n      </li>\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs__button tabs--sheet-tabs__button--inventory\" name=\"act_nav-tabs-sheet-tabs--inventory\" data-container-button=\"sheet-tabs\" data-button=\"inventory\" data-i18n=\"tabs-sheet-tabs-inventory\" type=\"action\" title=\"%{nav-tabs-sheet-tabs--inventory}\" data-container-tab=\"sheet-tabs\" data-tab=\"inventory\"></button>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"tabs__body tabs--sheet-tabs__body\">\n    <div class=\"tabs__container tabs--sheet-tabs__container tabs--sheet-tabs__container--tab1 tab-vertical\" data-container-tab=\"sheet-tabs\" data-tab=\"tab1\">\n      <span style=\"background: white;\">\n        Tab 1 content\n      </span>\n    </div>\n    <div class=\"tabs__container tabs--sheet-tabs__container tabs--sheet-tabs__container--background tab_horizontal\" data-container-tab=\"sheet-tabs\" data-tab=\"background\">\n      <span style=\"background: white;\">\n        Tab background content\n      </span>\n    </div>\n    <div class=\"tabs__container tabs--sheet-tabs__container tabs--sheet-tabs__container--history tab_horizontal\" data-container-tab=\"sheet-tabs\" data-tab=\"history\">\n      <span style=\"background: white;\">\n        Tab history content\n      </span>\n    </div>\n    <span class=\"tabs__container tabs--sheet-tabs__container tabs--sheet-tabs__container--inventory tab_horizontal\" data-container-tab=\"sheet-tabs\" data-tab=\"inventory\">\n      <span style=\"background: white;\">\n        Tab inventory content\n      </span>\n    </span>\n  </div>\n</div>\n<!-- Tabs that are NOT persistent and have no default tab (aka all tab content will be hidden by default)-->\n<div class=\"tabs tabs--sheet-tabs-2 outer\">\n  <span>\n    before the header\n  </span>\n  <nav class=\"tabs__header tabs--sheet-tabs-2__header\">\n    <ul class=\"tabs__nav-list\">\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs-2__button tabs--sheet-tabs-2__button--tab1\" name=\"act_nav-tabs-sheet-tabs-2--tab1\" data-container-button=\"sheet-tabs-2\" data-button=\"tab1\" data-i18n=\"tabs-sheet-tabs-2-tab1\" type=\"action\" title=\"%{nav-tabs-sheet-tabs-2--tab1}\" data-container-tab=\"sheet-tabs-2\" data-tab=\"tab1\"></button>\n      </li>\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs-2__button tabs--sheet-tabs-2__button--background\" name=\"act_nav-tabs-sheet-tabs-2--background\" data-container-button=\"sheet-tabs-2\" data-button=\"background\" data-i18n=\"tabs-sheet-tabs-2-background\" type=\"action\" title=\"%{nav-tabs-sheet-tabs-2--background}\" data-container-tab=\"sheet-tabs-2\" data-tab=\"background\"></button>\n      </li>\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs-2__button tabs--sheet-tabs-2__button--history custom-button\" name=\"act_nav-tabs-sheet-tabs-2--history\" data-container-button=\"sheet-tabs-2\" data-button=\"history\" data-i18n=\"tabs-sheet-tabs-2-history\" type=\"action\" title=\"%{nav-tabs-sheet-tabs-2--history}\" data-container-tab=\"sheet-tabs-2\" data-tab=\"history\"></button>\n      </li>\n      <li class=\"tabs__nav-item\">\n        <button class=\"tabs__button tabs--sheet-tabs-2__button tabs--sheet-tabs-2__button--inventory\" name=\"act_nav-tabs-sheet-tabs-2--inventory\" data-container-button=\"sheet-tabs-2\" data-button=\"inventory\" data-i18n=\"tabs-sheet-tabs-2-inventory\" type=\"action\" title=\"%{nav-tabs-sheet-tabs-2--inventory}\" data-container-tab=\"sheet-tabs-2\" data-tab=\"inventory\"></button>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"tabs__body tabs--sheet-tabs-2__body\">\n    <div class=\"tabs__container tabs--sheet-tabs-2__container tabs--sheet-tabs-2__container--tab1 tab-vertical\" data-container-tab=\"sheet-tabs-2\" data-tab=\"tab1\">\n      <span style=\"background: white;\">\n        Tab 1 content\n      </span>\n    </div>\n    <div class=\"tabs__container tabs--sheet-tabs-2__container tabs--sheet-tabs-2__container--background tab_horizontal\" data-container-tab=\"sheet-tabs-2\" data-tab=\"background\">\n      <span style=\"background: white;\">\n        Tab background content\n      </span>\n    </div>\n    <div class=\"tabs__container tabs--sheet-tabs-2__container tabs--sheet-tabs-2__container--history tab_horizontal\" data-container-tab=\"sheet-tabs-2\" data-tab=\"history\">\n      <span style=\"background: white;\">\n        Tab history content\n      </span>\n    </div>\n    <span class=\"tabs__container tabs--sheet-tabs-2__container tabs--sheet-tabs-2__container--inventory tab_horizontal\" data-container-tab=\"sheet-tabs-2\" data-tab=\"inventory\">\n      <span style=\"background: white;\">\n        Tab inventory content\n      </span>\n    </span>\n  </div>\n</div>"}];
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
"comment": "/**\r\n * Renders PUG and SCSS into HTML and CSS text\r\n * @memberof Build\r\n * @alias all\r\n * @param {string} source - The path to the directory containing your PUG and SCSS files\r\n * @param {string} destination - The relative path to the directory where you want your HTML and CSS files to be created.\r\n * @param {boolean} [dynamicDestination = false] - Whether the generator should create dynamically named folders inside the destination based on the master pug/scss file names, (e.g. my_system.pug and my_system.scss with a destination of `./build` will create /build/my_system/my_system.html, /build/my_system/my_system.css, and /build/my_system/translation.js). This is useful if building a sheet template that is going to be used for several different projects.\r\n * @param {object} [pugOptions] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:\r\n * @param {boolean} [pugOptions.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.\r\n * @param {object} [scssOptions = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.\r\n * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1.\r\n */",
"meta": {
"range": [
1975,
2398
],
"filename": "index.js",
"lineno": 20,
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
"description": "The relative path to the directory where you want your HTML and CSS files to be created.",
"name": "destination"
},
{
"type": {
"names": [
"boolean"
]
},
"optional": true,
"defaultvalue": false,
"description": "Whether the generator should create dynamically named folders inside the destination based on the master pug/scss file names, (e.g. my_system.pug and my_system.scss with a destination of `./build` will create /build/my_system/my_system.html, /build/my_system/my_system.css, and /build/my_system/translation.js). This is useful if building a sheet template that is going to be used for several different projects.",
"name": "dynamicDestination"
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
1991,
2003
],
"filename": "index.js",
"lineno": 20,
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
2004,
2015
],
"filename": "index.js",
"lineno": 20,
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
2016,
2034
],
"filename": "index.js",
"lineno": 20,
"columnno": 47,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000120",
"name": "dynamicDestination",
"type": "Identifier",
"value": "dynamicDestination"
}
},
"undocumented": true,
"name": "dynamicDestination",
"longname": "dynamicDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2035,
2050
],
"filename": "index.js",
"lineno": 20,
"columnno": 66,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000122",
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
2051,
2082
],
"filename": "index.js",
"lineno": 20,
"columnno": 82,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000124",
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
2063,
2081
],
"filename": "index.js",
"lineno": 20,
"columnno": 94,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000128",
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
2083,
2097
],
"filename": "index.js",
"lineno": 20,
"columnno": 114,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000130",
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
2098,
2109
],
"filename": "index.js",
"lineno": 20,
"columnno": 129,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000134",
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
2159,
2165
],
"filename": "index.js",
"lineno": 21,
"columnno": 41,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000146",
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
2166,
2177
],
"filename": "index.js",
"lineno": 21,
"columnno": 48,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000148",
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
2178,
2196
],
"filename": "index.js",
"lineno": 21,
"columnno": 60,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000150",
"name": "dynamicDestination",
"type": "Identifier",
"value": "dynamicDestination"
}
},
"undocumented": true,
"name": "dynamicDestination",
"longname": "dynamicDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2197,
2212
],
"filename": "index.js",
"lineno": 21,
"columnno": 79,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000152",
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
2213,
2223
],
"filename": "index.js",
"lineno": 21,
"columnno": 95,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000154",
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
2224,
2235
],
"filename": "index.js",
"lineno": 21,
"columnno": 106,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000156",
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
2277,
2283
],
"filename": "index.js",
"lineno": 23,
"columnno": 23,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000165",
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
2284,
2295
],
"filename": "index.js",
"lineno": 23,
"columnno": 30,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000167",
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
2296,
2314
],
"filename": "index.js",
"lineno": 23,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000169",
"name": "dynamicDestination",
"type": "Identifier",
"value": "dynamicDestination"
}
},
"undocumented": true,
"name": "dynamicDestination",
"longname": "dynamicDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
2315,
2330
],
"filename": "index.js",
"lineno": 23,
"columnno": 61,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000171",
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
2331,
2341
],
"filename": "index.js",
"lineno": 23,
"columnno": 77,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000173",
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
2342,
2353
],
"filename": "index.js",
"lineno": 23,
"columnno": 88,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000175",
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
2403,
2425
],
"filename": "index.js",
"lineno": 29,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100000183",
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
"id": "astnode100000191",
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
"id": "astnode100000197",
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
"id": "astnode100000214",
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
"id": "astnode100000222",
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
"id": "astnode100000226",
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
"id": "astnode100000230",
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
"id": "astnode100000235",
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
"id": "astnode100000238",
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
"id": "astnode100000240",
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
"id": "astnode100000242",
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
"id": "astnode100000244",
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
"id": "astnode100000246",
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
"id": "astnode100000248",
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
"id": "astnode100000250",
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
"id": "astnode100000252",
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
"id": "astnode100000254",
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
"id": "astnode100000257",
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
"id": "astnode100000259",
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
"id": "astnode100000261",
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
"id": "astnode100000264",
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
"id": "astnode100000267",
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
"id": "astnode100000269",
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
"id": "astnode100000271",
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
"id": "astnode100000273",
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
"id": "astnode100000275",
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
"id": "astnode100000338",
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
"id": "astnode100000352",
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
"id": "astnode100000361",
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
"id": "astnode100000370",
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
"id": "astnode100000376",
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
"id": "astnode100000382",
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
"id": "astnode100000396",
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
"id": "astnode100000416",
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
"id": "astnode100000422",
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
"id": "astnode100000427",
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
"id": "astnode100000457",
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
"id": "astnode100000475",
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
"id": "astnode100000490",
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
"id": "astnode100000501",
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
"id": "astnode100000512",
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
"id": "astnode100000528",
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
"id": "astnode100000542",
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
"id": "astnode100000556",
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
"id": "astnode100000567",
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
"id": "astnode100000574",
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
"id": "astnode100000604",
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
"id": "astnode100000610",
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
"id": "astnode100000618",
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
"id": "astnode100000621",
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
"id": "astnode100000623",
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
"id": "astnode100000625",
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
"id": "astnode100000628",
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
"id": "astnode100000631",
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
"id": "astnode100000633",
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
"id": "astnode100000635",
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
"id": "astnode100000637",
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
"id": "astnode100000639",
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
"id": "astnode100000641",
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
"id": "astnode100000644",
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
"id": "astnode100000647",
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
"id": "astnode100000649",
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
"id": "astnode100000651",
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
"id": "astnode100000654",
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
"id": "astnode100000669",
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
"id": "astnode100000680",
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
"id": "astnode100000697",
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
"id": "astnode100000716",
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
"id": "astnode100000755",
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
"id": "astnode100000778",
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
"id": "astnode100000788",
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
"id": "astnode100000804",
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
"id": "astnode100000855",
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
"id": "astnode100000870",
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
"id": "astnode100000887",
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
"id": "astnode100000893",
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
"id": "astnode100000916",
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
"id": "astnode100000953",
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
"id": "astnode100000990",
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
"id": "astnode100001023",
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
"id": "astnode100001058",
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
"id": "astnode100001080",
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
"id": "astnode100001102",
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
"id": "astnode100001120",
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
"id": "astnode100001122",
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
"id": "astnode100001126",
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
"id": "astnode100001132",
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
"id": "astnode100001143",
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
"id": "astnode100001149",
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
"id": "astnode100001181",
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
"id": "astnode100001187",
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
"id": "astnode100001200",
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
"id": "astnode100001205",
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
"id": "astnode100001207",
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
"id": "astnode100001209",
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
"id": "astnode100001211",
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
"id": "astnode100001213",
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
"id": "astnode100001215",
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
"id": "astnode100001217",
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
"id": "astnode100001219",
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
"id": "astnode100001221",
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
"id": "astnode100001223",
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
"id": "astnode100001225",
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
"id": "astnode100001227",
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
"id": "astnode100001229",
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
"id": "astnode100001231",
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
"id": "astnode100001233",
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
"id": "astnode100001235",
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
"id": "astnode100001237",
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
"id": "astnode100001239",
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
"id": "astnode100001241",
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
"id": "astnode100001243",
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
"id": "astnode100001245",
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
"id": "astnode100001250",
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
"id": "astnode100001256",
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
"id": "astnode100001262",
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
"id": "astnode100001270",
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
"id": "astnode100001274",
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
2110
],
"filename": "outputPug.js",
"lineno": 8,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001280",
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
"id": "astnode100001292",
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
"id": "astnode100001307",
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
"id": "astnode100001327",
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
"id": "astnode100001335",
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
"id": "astnode100001341",
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
"id": "astnode100001354",
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
1743
],
"filename": "outputPug.js",
"lineno": 22,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001367",
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
"id": "astnode100001378",
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
"id": "astnode100001391",
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
"id": "astnode100001413",
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
"id": "astnode100001417",
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
1385
],
"filename": "outputPug.js",
"lineno": 34,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001450",
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
1416,
1483
],
"filename": "outputPug.js",
"lineno": 36,
"columnno": 14,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001476",
"name": "datasetType",
"type": "CallExpression",
"value": ""
}
},
"undocumented": true,
"name": "datasetType",
"longname": "<anonymous>~datasetType",
"kind": "constant",
"memberof": "<anonymous>",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
1494,
1697
],
"filename": "outputPug.js",
"lineno": 37,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001490",
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
1777,
1847
],
"filename": "outputPug.js",
"lineno": 48,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001525",
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
1860,
1979
],
"filename": "outputPug.js",
"lineno": 49,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001538",
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
1992,
2036
],
"filename": "outputPug.js",
"lineno": 52,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001566",
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
2115,
2141
],
"filename": "outputPug.js",
"lineno": 57,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100001588",
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
"id": "astnode100001596",
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
"id": "astnode100001602",
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
"id": "astnode100001608",
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
"id": "astnode100001615",
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
"id": "astnode100001624",
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
"id": "astnode100001633",
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
"id": "astnode100001641",
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
"id": "astnode100001658",
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
"id": "astnode100001678",
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
"id": "astnode100001708",
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
"id": "astnode100001739",
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
"id": "astnode100001750",
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
"id": "astnode100001770",
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
"id": "astnode100001785",
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
"id": "astnode100001799",
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
"id": "astnode100001814",
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
"id": "astnode100001838",
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
"id": "astnode100001848",
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
"id": "astnode100001866",
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
"id": "astnode100001881",
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
"id": "astnode100001889",
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
"id": "astnode100001895",
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
"id": "astnode100001901",
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
"id": "astnode100001907",
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
"id": "astnode100001913",
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
"id": "astnode100001919",
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
"id": "astnode100001923",
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
"id": "astnode100001925",
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
"id": "astnode100001927",
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
"id": "astnode100001929",
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
"id": "astnode100001931",
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
"id": "astnode100001958",
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
"id": "astnode100001960",
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
"id": "astnode100001962",
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
"id": "astnode100001965",
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
"id": "astnode100001969",
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
"id": "astnode100001971",
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
"id": "astnode100001973",
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
"id": "astnode100001975",
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
"id": "astnode100001977",
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
"id": "astnode100001979",
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
"id": "astnode100002006",
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
"id": "astnode100002008",
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
"id": "astnode100002010",
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
"id": "astnode100002012",
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
1821
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002015",
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
"id": "astnode100002019",
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
"id": "astnode100002023",
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
855
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 54,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002025",
"name": "dynamicDestination",
"type": "AssignmentPattern",
"value": "dynamicDestination"
}
},
"undocumented": true,
"name": "dynamicDestination",
"longname": "dynamicDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
856,
871
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 81,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002029",
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
872,
903
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 97,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002031",
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
884,
902
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 109,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002035",
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
904,
918
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 129,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002037",
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
919,
931
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 144,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002041",
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
932,
943
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 157,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002045",
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
961,
993
],
"filename": "processSheet.js",
"lineno": 24,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002051",
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
1004,
1020
],
"filename": "processSheet.js",
"lineno": 25,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002060",
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
1031,
1048
],
"filename": "processSheet.js",
"lineno": 26,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002064",
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
1311,
1407
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002112",
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
1335,
1340
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 36,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002118",
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
1341,
1357
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002120",
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
1358,
1377
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 59,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002122",
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
1378,
1397
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 79,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002124",
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
1398,
1405
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 99,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002126",
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
1424,
1532
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002129",
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
1446,
1451
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 34,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002135",
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
1452,
1468
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 40,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002137",
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
1469,
1488
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 57,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002139",
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
1489,
1504
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 77,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002141",
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
1505,
1523
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 93,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002143",
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
1524,
1530
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 112,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002145",
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
1686,
1728
],
"filename": "processSheet.js",
"lineno": 43,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002166",
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
1739,
1783
],
"filename": "processSheet.js",
"lineno": 44,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002175",
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
1826,
1855
],
"filename": "processSheet.js",
"lineno": 48,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002188",
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
"id": "astnode100002196",
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
"id": "astnode100002202",
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
"id": "astnode100002208",
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
"id": "astnode100002214",
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
"id": "astnode100002220",
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
"id": "astnode100002226",
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
"id": "astnode100002230",
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
"id": "astnode100002232",
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
"id": "astnode100002234",
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
"id": "astnode100002236",
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
"id": "astnode100002240",
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
"id": "astnode100002244",
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
"id": "astnode100002253",
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
"id": "astnode100002264",
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
"id": "astnode100002272",
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
"id": "astnode100002278",
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
"id": "astnode100002280",
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
"id": "astnode100002347",
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
"id": "astnode100002355",
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
"id": "astnode100002361",
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
"id": "astnode100002367",
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
"id": "astnode100002375",
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
"id": "astnode100002381",
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
"id": "astnode100002387",
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
"id": "astnode100002391",
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
"id": "astnode100002393",
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
"id": "astnode100002395",
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
"id": "astnode100002403",
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
"id": "astnode100002417",
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
"id": "astnode100002420",
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
"id": "astnode100002422",
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
"id": "astnode100002425",
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
"id": "astnode100002439",
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
"id": "astnode100002455",
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
"id": "astnode100002463",
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
"id": "astnode100002499",
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
"id": "astnode100002558",
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
6,
28
],
"filename": "resolvePaths.js",
"lineno": 1,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002566",
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
39,
648
],
"filename": "resolvePaths.js",
"lineno": 3,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002572",
"name": "resolvePaths",
"type": "ArrowFunctionExpression"
},
"vars": {
"err": "resolvePaths~err",
"resSource": "resolvePaths~resSource",
"trueDestination": "resolvePaths~trueDestination",
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
158,
219
],
"filename": "resolvePaths.js",
"lineno": 5,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002591",
"name": "err",
"type": "NewExpression",
"value": ""
}
},
"undocumented": true,
"name": "err",
"longname": "resolvePaths~err",
"kind": "constant",
"memberof": "resolvePaths",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
252,
295
],
"filename": "resolvePaths.js",
"lineno": 8,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002599",
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
306,
500
],
"filename": "resolvePaths.js",
"lineno": 9,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002610",
"name": "trueDestination",
"type": "ConditionalExpression",
"value": ""
}
},
"undocumented": true,
"name": "trueDestination",
"longname": "resolvePaths~trueDestination",
"kind": "constant",
"memberof": "resolvePaths",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
511,
613
],
"filename": "resolvePaths.js",
"lineno": 16,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002637",
"name": "resDest",
"type": "CallExpression",
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
652,
681
],
"filename": "resolvePaths.js",
"lineno": 20,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002662",
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
"id": "astnode100002670",
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
"id": "astnode100002676",
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
1092
],
"filename": "watch.js",
"lineno": 5,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002682",
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
"id": "astnode100002686",
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
"id": "astnode100002690",
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
151
],
"filename": "watch.js",
"lineno": 5,
"columnno": 42,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002692",
"name": "dynamicDestination",
"type": "Identifier",
"value": "dynamicDestination"
}
},
"undocumented": true,
"name": "dynamicDestination",
"longname": "dynamicDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
152,
167
],
"filename": "watch.js",
"lineno": 5,
"columnno": 61,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002694",
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
168,
199
],
"filename": "watch.js",
"lineno": 5,
"columnno": 77,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002696",
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
180,
198
],
"filename": "watch.js",
"lineno": 5,
"columnno": 89,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002700",
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
200,
214
],
"filename": "watch.js",
"lineno": 5,
"columnno": 109,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002702",
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
254,
269
],
"filename": "watch.js",
"lineno": 8,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002712",
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
278,
738
],
"filename": "watch.js",
"lineno": 9,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002714",
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
829,
861
],
"filename": "watch.js",
"lineno": 23,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002761",
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
876,
912
],
"filename": "watch.js",
"lineno": 24,
"columnno": 12,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002769",
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
986,
992
],
"filename": "watch.js",
"lineno": 28,
"columnno": 26,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002788",
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
993,
1004
],
"filename": "watch.js",
"lineno": 28,
"columnno": 33,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002790",
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
1005,
1023
],
"filename": "watch.js",
"lineno": 28,
"columnno": 45,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002792",
"name": "dynamicDestination",
"type": "Identifier",
"value": "dynamicDestination"
}
},
"undocumented": true,
"name": "dynamicDestination",
"longname": "dynamicDestination",
"kind": "member",
"scope": "global"
},
{
"comment": "",
"meta": {
"range": [
1024,
1039
],
"filename": "watch.js",
"lineno": 28,
"columnno": 64,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002794",
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
1040,
1050
],
"filename": "watch.js",
"lineno": 28,
"columnno": 80,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002796",
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
1051,
1062
],
"filename": "watch.js",
"lineno": 28,
"columnno": 91,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002798",
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
1063,
1070
],
"filename": "watch.js",
"lineno": 28,
"columnno": 103,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002800",
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
1071,
1077
],
"filename": "watch.js",
"lineno": 28,
"columnno": 111,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002802",
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
1097,
1120
],
"filename": "watch.js",
"lineno": 32,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\render",
"code": {
"id": "astnode100002805",
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
"id": "astnode100002813",
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
"id": "astnode100002825",
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
"id": "astnode100002830",
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
"id": "astnode100002837",
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
"id": "astnode100002854",
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
"id": "astnode100002897",
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
"id": "astnode100002899",
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
"id": "astnode100002901",
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
"id": "astnode100002936",
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
"id": "astnode100002938",
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
"id": "astnode100002940",
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
"id": "astnode100002948",
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
"id": "astnode100002983",
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
"id": "astnode100002985",
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
"id": "astnode100002987",
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
"id": "astnode100003001",
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
"id": "astnode100003003",
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
"id": "astnode100003006",
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
"id": "astnode100003032",
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
"id": "astnode100003043",
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
"id": "astnode100003052",
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
"id": "astnode100003062",
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
"id": "astnode100003068",
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
"id": "astnode100003075",
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
"id": "astnode100003089",
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
"id": "astnode100003091",
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
"id": "astnode100003093",
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
"id": "astnode100003095",
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
"id": "astnode100003097",
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
"id": "astnode100003100",
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
"id": "astnode100003108",
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
"id": "astnode100003114",
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
"id": "astnode100003121",
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
"id": "astnode100003131",
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
"id": "astnode100003147",
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
"id": "astnode100003161",
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
"id": "astnode100003172",
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
"id": "astnode100003185",
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
"id": "astnode100003198",
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
"id": "astnode100003206",
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
"id": "astnode100003222",
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
"id": "astnode100003272",
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
"id": "astnode100003274",
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
"id": "astnode100003276",
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
"id": "astnode100003278",
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
"id": "astnode100003292",
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
"id": "astnode100003327",
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
"id": "astnode100003329",
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
"id": "astnode100003331",
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
"id": "astnode100003347",
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
"id": "astnode100003371",
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
"id": "astnode100003373",
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
"id": "astnode100003375",
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
"id": "astnode100003377",
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
"id": "astnode100003380",
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
"id": "astnode100003384",
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
"id": "astnode100003386",
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
"id": "astnode100003388",
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
"id": "astnode100003390",
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
"id": "astnode100003392",
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
"id": "astnode100003443",
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
"id": "astnode100003500",
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
"id": "astnode100003513",
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
"id": "astnode100003515",
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
"id": "astnode100003517",
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
"id": "astnode100003519",
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
"id": "astnode100003568",
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
"id": "astnode100003570",
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
"id": "astnode100003572",
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
"id": "astnode100003575",
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
"id": "astnode100003578",
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
"id": "astnode100003580",
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
"id": "astnode100003584",
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
"id": "astnode100003586",
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
"id": "astnode100003588",
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
"id": "astnode100003590",
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
"id": "astnode100003592",
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
"id": "astnode100003594",
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
"id": "astnode100003596",
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
"id": "astnode100003598",
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
"id": "astnode100003601",
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
"id": "astnode100003604",
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
"id": "astnode100003620",
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
"id": "astnode100003622",
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
"id": "astnode100003624",
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
"id": "astnode100003626",
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
"id": "astnode100003628",
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
"id": "astnode100003652",
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
"id": "astnode100003661",
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
"id": "astnode100003666",
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
"id": "astnode100003675",
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
"id": "astnode100003677",
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
"id": "astnode100003679",
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
"id": "astnode100003681",
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
"id": "astnode100003688",
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
"id": "astnode100003693",
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
"id": "astnode100003745",
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
"id": "astnode100003757",
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
"id": "astnode100003763",
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
"id": "astnode100003798",
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
"id": "astnode100003811",
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
"id": "astnode100003828",
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
"id": "astnode100003838",
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
"id": "astnode100003847",
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
"id": "astnode100003859",
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
"id": "astnode100003876",
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
"id": "astnode100003902",
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
"id": "astnode100003911",
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
"id": "astnode100003936",
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
"id": "astnode100003945",
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
"id": "astnode100003984",
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
"id": "astnode100004003",
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
"id": "astnode100004036",
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
"id": "astnode100004063",
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
"id": "astnode100004078",
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
"id": "astnode100004081",
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
"id": "astnode100004083",
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
"id": "astnode100004085",
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
"id": "astnode100004087",
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
"id": "astnode100004089",
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
"id": "astnode100004092",
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
"id": "astnode100004131",
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
"id": "astnode100004141",
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
"id": "astnode100004149",
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
"id": "astnode100004166",
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
"id": "astnode100004172",
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
"id": "astnode100004178",
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
"id": "astnode100004182",
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
"id": "astnode100004184",
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
"id": "astnode100004204",
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
"id": "astnode100004226",
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
"id": "astnode100004251",
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
"id": "astnode100004267",
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
"id": "astnode100004273",
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
"id": "astnode100004310",
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
"id": "astnode100004318",
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
"id": "astnode100004322",
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
"id": "astnode100004328",
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
"id": "astnode100004332",
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
"id": "astnode100004338",
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
"id": "astnode100004342",
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
"id": "astnode100004348",
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
"id": "astnode100004352",
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
"id": "astnode100004358",
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
"id": "astnode100004362",
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
"id": "astnode100004366",
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
"id": "astnode100004370",
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
"id": "astnode100004374",
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
"id": "astnode100004378",
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
"id": "astnode100004382",
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
"id": "astnode100004388",
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
"id": "astnode100004392",
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
"id": "astnode100004434",
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
"id": "astnode100004447",
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
"id": "astnode100004453",
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
"id": "astnode100004466",
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
"id": "astnode100004472",
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
"id": "astnode100004520",
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
"id": "astnode100004534",
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
"id": "astnode100004546",
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
"id": "astnode100004553",
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
"id": "astnode100004563",
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
"id": "astnode100004566",
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
"id": "astnode100004578",
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
"id": "astnode100004580",
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
"id": "astnode100004583",
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
"id": "astnode100004619",
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
"id": "astnode100004621",
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
"id": "astnode100004623",
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
"id": "astnode100004625",
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
"id": "astnode100004633",
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
"id": "astnode100004635",
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
"id": "astnode100004637",
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
"id": "astnode100004640",
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
"id": "astnode100004656",
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
"id": "astnode100004659",
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
"id": "astnode100004661",
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
"id": "astnode100004663",
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
"id": "astnode100004666",
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
"id": "astnode100004672",
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
"id": "astnode100004690",
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
"id": "astnode100004692",
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
"id": "astnode100004695",
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
"id": "astnode100004701",
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
"id": "astnode100004712",
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
"id": "astnode100004717",
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
"id": "astnode100004728",
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
"id": "astnode100004747",
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
"id": "astnode100004753",
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
"id": "astnode100004773",
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
"id": "astnode100004778",
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
"id": "astnode100004783",
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
"id": "astnode100004801",
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
"id": "astnode100004807",
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
"id": "astnode100004818",
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
"id": "astnode100004822",
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
"id": "astnode100004838",
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
"id": "astnode100004845",
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
"id": "astnode100004870",
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
"id": "astnode100004887",
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
"id": "astnode100004893",
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
"id": "astnode100004903",
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
"id": "astnode100004907",
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
"id": "astnode100004923",
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
"id": "astnode100004930",
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
"id": "astnode100004955",
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
"id": "astnode100004965",
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
"id": "astnode100004971",
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
"id": "astnode100004981",
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
"id": "astnode100004988",
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
"id": "astnode100005009",
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
"id": "astnode100005015",
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
"id": "astnode100005026",
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
"id": "astnode100005051",
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
"id": "astnode100005054",
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
"id": "astnode100005056",
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
"id": "astnode100005058",
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
"id": "astnode100005065",
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
"id": "astnode100005091",
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
"id": "astnode100005096",
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
"id": "astnode100005130",
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
"id": "astnode100005136",
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
"id": "astnode100005145",
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
"id": "astnode100005148",
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
"id": "astnode100005156",
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
"id": "astnode100005165",
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
"id": "astnode100005171",
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
"id": "astnode100005176",
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
"id": "astnode100005181",
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
"id": "astnode100005191",
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
"id": "astnode100005202",
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
"id": "astnode100005212",
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
"id": "astnode100005223",
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
"id": "astnode100005238",
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
"id": "astnode100005249",
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
"id": "astnode100005258",
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
"id": "astnode100005273",
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
"id": "astnode100005282",
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
"id": "astnode100005299",
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
"id": "astnode100005305",
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
"id": "astnode100005322",
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
"id": "astnode100005328",
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
"id": "astnode100005348",
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
"id": "astnode100005381",
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
"id": "astnode100005384",
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
"id": "astnode100005390",
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
"id": "astnode100005400",
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
"id": "astnode100005406",
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
"id": "astnode100005412",
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
"id": "astnode100005416",
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
"id": "astnode100005424",
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
"id": "astnode100005430",
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
"id": "astnode100005444",
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
"id": "astnode100005454",
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
"id": "astnode100005460",
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
"id": "astnode100005489",
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
"id": "astnode100005500",
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
"id": "astnode100005506",
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
"id": "astnode100005536",
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
"id": "astnode100005542",
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
"id": "astnode100005555",
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
"id": "astnode100005576",
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
"id": "astnode100005586",
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
"id": "astnode100005600",
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
"id": "astnode100005607",
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
"id": "astnode100005616",
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
"id": "astnode100005648",
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
"id": "astnode100005653",
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
"id": "astnode100005663",
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
"id": "astnode100005671",
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
"id": "astnode100005680",
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
"id": "astnode100005687",
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
"id": "astnode100005700",
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
"id": "astnode100005706",
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
"id": "astnode100005717",
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
"id": "astnode100005730",
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
"id": "astnode100005736",
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
"id": "astnode100005744",
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
"id": "astnode100005751",
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
"id": "astnode100005782",
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
"id": "astnode100005799",
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
"id": "astnode100005817",
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
"id": "astnode100005823",
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
"id": "astnode100005828",
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
"id": "astnode100005833",
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
"id": "astnode100005849",
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
"id": "astnode100005855",
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
"id": "astnode100005861",
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
"id": "astnode100005867",
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
"id": "astnode100005873",
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
"id": "astnode100005882",
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
"id": "astnode100005887",
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
"id": "astnode100005889",
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
"id": "astnode100005891",
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
"id": "astnode100005896",
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
"id": "astnode100005913",
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
"id": "astnode100005916",
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
"id": "astnode100005923",
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
"id": "astnode100005929",
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
"id": "astnode100005937",
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
"id": "astnode100005946",
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
"id": "astnode100005952",
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
"id": "astnode100005961",
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
"id": "astnode100005969",
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
"id": "astnode100005981",
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
"id": "astnode100005993",
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
"id": "astnode100006005",
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
"id": "astnode100006010",
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
"id": "astnode100006017",
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
"id": "astnode100006066",
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
"id": "astnode100006100",
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
"id": "astnode100006121",
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
"id": "astnode100006152",
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
"id": "astnode100006226",
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
"id": "astnode100006243",
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
"id": "astnode100006252",
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
"id": "astnode100006271",
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
"id": "astnode100006285",
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
"id": "astnode100006327",
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
"id": "astnode100006369",
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
"id": "astnode100006376",
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
"id": "astnode100006390",
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
"id": "astnode100006396",
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
"id": "astnode100006446",
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
"id": "astnode100006466",
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
"id": "astnode100006472",
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
"id": "astnode100006476",
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
"id": "astnode100006480",
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
"id": "astnode100006491",
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
"id": "astnode100006501",
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
"id": "astnode100006507",
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
"id": "astnode100006511",
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
"id": "astnode100006515",
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
"id": "astnode100006519",
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
"id": "astnode100006542",
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
"id": "astnode100006553",
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
"id": "astnode100006567",
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
"id": "astnode100006573",
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
"id": "astnode100006580",
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
"id": "astnode100006588",
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
"id": "astnode100006600",
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
"id": "astnode100006616",
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
"id": "astnode100006701",
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
"id": "astnode100006707",
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
"id": "astnode100006721",
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
"id": "astnode100006726",
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
"id": "astnode100006732",
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
"id": "astnode100006746",
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
"id": "astnode100006753",
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
"id": "astnode100006758",
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
"id": "astnode100006781",
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
"id": "astnode100006789",
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
"id": "astnode100006799",
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
"id": "astnode100006813",
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
"id": "astnode100006838",
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
"id": "astnode100006846",
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
"id": "astnode100006859",
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
"id": "astnode100006865",
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
"id": "astnode100006872",
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
"id": "astnode100006903",
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
"id": "astnode100006909",
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
"id": "astnode100006915",
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
"id": "astnode100006930",
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
"id": "astnode100006936",
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
"id": "astnode100006942",
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
"id": "astnode100006962",
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
"id": "astnode100006968",
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
"id": "astnode100006972",
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
"id": "astnode100006978",
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
"id": "astnode100006984",
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
"id": "astnode100007001",
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
"id": "astnode100007007",
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
"id": "astnode100007025",
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
"id": "astnode100007031",
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
"id": "astnode100007041",
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
"id": "astnode100007070",
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
"id": "astnode100007076",
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
"id": "astnode100007086",
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
"id": "astnode100007115",
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
"id": "astnode100007121",
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
"id": "astnode100007219",
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
"id": "astnode100007225",
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
"id": "astnode100007348",
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
10573
],
"filename": "utility.js",
"lineno": 232,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007354",
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
"id": "astnode100007373",
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
10465,
10562
],
"filename": "utility.js",
"lineno": 235,
"columnno": 4,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007391",
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
10576,
10612
],
"filename": "utility.js",
"lineno": 238,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007409",
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
"comment": "/**\r\n * Orders a single ID array.\r\n * @memberof Utilities\r\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\r\n * @param {string[]} IDs - Array of IDs to be ordered. Aka the default ID Array passed to the getSectionIDs callback\r\n * @returns {string[]} - The ordered id array\r\n */",
"meta": {
"range": [
10937,
11088
],
"filename": "utility.js",
"lineno": 247,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007415",
"name": "orderSection",
"type": "FunctionExpression"
},
"vars": {
"idArr": "Utilities.orderSection~idArr",
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
"description": "Array of IDs to be ordered. Aka the default ID Array passed to the getSectionIDs callback",
"name": "IDs"
}
],
"returns": [
{
"type": {
"names": [
"Array.<string>"
]
},
"description": "- The ordered id array"
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
10988,
11067
],
"filename": "utility.js",
"lineno": 248,
"columnno": 8,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007424",
"name": "idArr",
"type": "ArrayExpression",
"value": "[\"\",\"\"]"
}
},
"undocumented": true,
"name": "idArr",
"longname": "Utilities.orderSection~idArr",
"kind": "constant",
"memberof": "Utilities.orderSection",
"scope": "inner",
"params": []
},
{
"comment": "",
"meta": {
"range": [
11091,
11125
],
"filename": "utility.js",
"lineno": 251,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007448",
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
11342,
11427
],
"filename": "utility.js",
"lineno": 259,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007454",
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
11430,
11460
],
"filename": "utility.js",
"lineno": 262,
"columnno": 0,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007471",
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
11571,
12223
],
"filename": "utility.js",
"lineno": 265,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007477",
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
11581,
11706
],
"filename": "utility.js",
"lineno": 266,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007480",
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
11597,
11610
],
"filename": "utility.js",
"lineno": 267,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007482",
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
11619,
11633
],
"filename": "utility.js",
"lineno": 268,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007484",
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
11642,
11656
],
"filename": "utility.js",
"lineno": 269,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007486",
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
11665,
11678
],
"filename": "utility.js",
"lineno": 270,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007488",
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
11687,
11700
],
"filename": "utility.js",
"lineno": 271,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007490",
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
11711,
11846
],
"filename": "utility.js",
"lineno": 273,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007492",
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
11851,
12220
],
"filename": "utility.js",
"lineno": 278,
"columnno": 2,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007518",
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
11881,
12014
],
"filename": "utility.js",
"lineno": 279,
"columnno": 10,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007523",
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
12520,
12538
],
"filename": "utility.js",
"lineno": 301,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007572",
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
12889,
12911
],
"filename": "utility.js",
"lineno": 309,
"columnno": 6,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007578",
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
12938,
12944
],
"filename": "utility.js",
"lineno": 311,
"columnno": 22,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007590",
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
12945,
12953
],
"filename": "utility.js",
"lineno": 311,
"columnno": 29,
"path": "E:\\Git\\Kurohyou_studios\\k-scaffold\\lib\\scripts",
"code": {
"id": "astnode100007592",
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
"id": "astnode100007597",
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
"id": "astnode100007601",
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
"id": "astnode100007603",
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
"id": "astnode100007671",
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
"id": "astnode100007693",
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
"id": "astnode100007704",
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
"id": "astnode100007707",
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
"id": "astnode100007711",
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
"id": "astnode100007713",
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
"id": "astnode100007715",
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
"id": "astnode100007717",
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
"id": "astnode100007735",
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
"id": "astnode100007738",
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
"id": "astnode100007746",
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
"id": "astnode100007748",
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
"id": "astnode100007754",
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
"id": "astnode100007757",
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