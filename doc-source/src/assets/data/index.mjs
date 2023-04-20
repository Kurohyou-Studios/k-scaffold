export const sass = [{"description":"Styling for the adaptive text construction to create textareas and inputs that grow based on their contents. Used in the default [defaultStyles](#defaultStyles) mixin, but can be used separately if you only want to include specific framework css.\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"adaptiveText","code":"\n  .adaptive{\n    display:grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-template-areas: \"content\";\n    position:relative;\n    >*{\n      grid-area: content;\n    }\n    > span{\n      opacity: 0;\n      z-index: -10;\n      @include borderPlaceholders.base-border;\n      text-transform: initial;\n      border-radius:0px;\n    }\n  }\n  .adaptive--text{\n    min-height:4rem;\n  }\n  .adaptive--text__span{\n    white-space: pre-wrap;\n    padding:2px;\n  }\n  .adaptive--text__textarea{\n    width:100%;\n    height:100%;\n    resize: none;\n  }\n  .adaptive--text__textarea,\n  .adaptive--input__input{\n    position:absolute;\n  }\n  .adaptive--input__input{\n    width:100%;\n  }\n  .adaptive--input__span{\n    padding:2px;\n    min-height:1.5rem;\n  }\n","line":{"start":7,"end":48}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"adaptive/_adaptive.scss","name":"_adaptive.scss"}},{"description":"The styling for basic collapsible/expandable sections.\n","commentRange":{"start":8,"end":8},"context":{"type":"mixin","name":"collapsible","code":"\n  .collapse-container{\n    display:grid;\n    position:relative;\n  }\n  .text-collapse{\n    cursor:pointer;\n    display:flex;\n    justify-content:flex-start;\n    align-items:center;\n    &:before{\n      content: var(--expandedSymbol);\n      @include materialIcons.materialStyle;\n    }\n  }\n  .text-collapse__text{\n    display:inline;\n  }\n  .text-collapse__check{\n    &:not(:checked) + .text-collapse{\n      @include borderPlaceholders.inputHighlight;\n    }\n    &:checked + .text-collapse:before{\n      content: var(--collapsedSymbol);\n    }\n  }\n  .repitem,\n  .collapse-container{\n    &:hover{\n      .collapse,.roll-container{\n        opacity:var(--collapseHoverOpacity);\n      }\n    }\n    .collapse{\n      opacity:var(--collapseBaseOpacity);\n      position:absolute;\n      right:-10px;\n      top:0px;\n      border:0px solid black;\n      border-radius:0;\n      color:var(--collapseExpandedColor);\n      text-transform:none;\n      background-color:transparent;\n      &:before{\n        content:'y';\n        font-family:pictos;\n      }\n      &:checked{\n        color:var(--collapseCollapsedColor);\n        background-color:transparent;\n        ~ .expanded,\n        ~ .collapse-container .expanded{\n          display:none !important;\n        }\n        ~ .expanded--empty:is(:not([value]),[value='']) + *,\n        ~ .collapse-container ~.expanded--empty:is(:not([value]),[value='']) + *{\n          display:none !important;\n        }\n      }\n      &:not(:checked){\n        ~ .collapsed{\n          display:none !important;\n        }\n      }\n      &:hover{\n        color:var(--collapseExpandedColor);\n      }\n    }\n  }\n  .repcontainer.editmode{\n    .collapse{\n      display:none;\n    }\n  }\n","line":{"start":9,"end":83}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders/_collapse.scss","name":"_collapse.scss"}},{"description":"The styling for the functionality of the fillLeft pug mixin. This allows us to easily make [radios/checkboxes that fill as the value increments](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"fillLeft","code":"\n  .fill-left{\n    display:var(--fillLeftDisplay);\n    align-self:var(--fillLeftAlignment);\n    box-sizing:border-box;\n  }\n  .fill-left__radio{\n    appearance:none;\n    -webkit-appearance:none;\n    background-color:var(--fillLeftSelectedColor);\n    width:100%;\n    height:100%;\n    cursor:pointer;\n    &[data-value]:checked:before{\n      content:attr(data-value);\n      color:var(--fillLeftDataColor);\n      font-size:var(--fillLeftDataSize);\n      place-self:center;\n      text-transform: var(--fillLeftDataTransform);\n    }\n    &:checked ~ .fill-left__radio{\n      background-color:var(--fillLeftUnselectedColor);\n    }\n  }\n","line":{"start":7,"end":31}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders/_fillLeft.scss","name":"_fillLeft.scss"}},{"description":"Mixin for applying our checked styling to something\n","commentRange":{"start":6,"end":6},"context":{"type":"mixin","name":"checked","code":"\n  background-color:var(--checkedBackColor);\n  &:before{\n    content: var(--checkContent);\n    grid-area:content;\n    font-weight:var(--checkWeight);\n    place-self:start center;\n    color: var(--checkColor);\n    font-size: var(--checkSize);\n    line-height: var(--checkLineHeight);\n  }\n","line":{"start":7,"end":18}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders/_inputBase.scss","name":"_inputBase.scss"},"usedBy":[{"description":"Basic input styling to ensure that the various inputs are ready for future styling\n","context":{"type":"mixin","name":"inputBase","code":"\n  input{\n    &[type='checkbox']{\n      border: 1px solid var(--checkboxBorderColor);\n      cursor: pointer;\n      -webkit-appearance:none;\n      appearance:none;\n      width: var(--checkboxWidth);\n      min-width: var(--checkboxWidth);\n      height: var(--checkboxHeight);\n      min-height: var(--checkboxHeight);\n      display:grid;\n      grid-template-columns:1fr;\n      grid-template-areas:\"content\";\n      &:not(.collapse):not(.fill-left__radio):checked{\n        @include checked;\n      }\n    }\n    &[type='number']{\n      width: 3rem;\n      -moz-appearance: textfield !important;\n      text-align: center;\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  textarea,\n  input:not(:is([type='radio'],[type='checkbox'])),\n  .uneditable-input{\n    padding: var(--inputPadding);\n  }\n  input:is([type=\"text\"],[type=\"number\"]),textarea{\n    cursor:auto;\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  input:not(:where([type='checkbox'], [type='radio'])),\n  .uneditable-input,\n  textarea{\n    @include borderPlaceholders.base-border;\n  }\n  select,\n  .sheet-pseudo-select span,\n  .pseudo-select span{\n    -webkit-apperance: none;\n    appearance: none;\n    text-transform: var(--selectTextTransform);\n    overflow: hidden!important;\n    white-space: nowrap;\n    text-overflow: var(--selectTextOverflow);\n    text-align: var(--selectTextAlign);\n    color:var(--selectColor);\n  }\n  input{\n    width: auto;\n    &:placeholder{\n      color: var(--placeholderColor);\n    }\n    &.plus-control:not([value*=\"-\"])+span:before{\n      content: '+';\n    }\n  }\n  textarea{\n    resize: var(--textareaResize);\n    white-space: pre-wrap;\n    &.fixed{\n      resize: none;\n      overflow: auto;\n    }\n  }\n","line":{"start":20,"end":97}}}]},{"description":"Basic input styling to ensure that the various inputs are ready for future styling\n","commentRange":{"start":19,"end":19},"context":{"type":"mixin","name":"inputBase","code":"\n  input{\n    &[type='checkbox']{\n      border: 1px solid var(--checkboxBorderColor);\n      cursor: pointer;\n      -webkit-appearance:none;\n      appearance:none;\n      width: var(--checkboxWidth);\n      min-width: var(--checkboxWidth);\n      height: var(--checkboxHeight);\n      min-height: var(--checkboxHeight);\n      display:grid;\n      grid-template-columns:1fr;\n      grid-template-areas:\"content\";\n      &:not(.collapse):not(.fill-left__radio):checked{\n        @include checked;\n      }\n    }\n    &[type='number']{\n      width: 3rem;\n      -moz-appearance: textfield !important;\n      text-align: center;\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button{\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  textarea,\n  input:not(:is([type='radio'],[type='checkbox'])),\n  .uneditable-input{\n    padding: var(--inputPadding);\n  }\n  input:is([type=\"text\"],[type=\"number\"]),textarea{\n    cursor:auto;\n  }\n  select,\n  .pseudo-select span,\n  .sheet-pseudo-select span,\n  input:not(:where([type='checkbox'], [type='radio'])),\n  .uneditable-input,\n  textarea{\n    @include borderPlaceholders.base-border;\n  }\n  select,\n  .sheet-pseudo-select span,\n  .pseudo-select span{\n    -webkit-apperance: none;\n    appearance: none;\n    text-transform: var(--selectTextTransform);\n    overflow: hidden!important;\n    white-space: nowrap;\n    text-overflow: var(--selectTextOverflow);\n    text-align: var(--selectTextAlign);\n    color:var(--selectColor);\n  }\n  input{\n    width: auto;\n    &:placeholder{\n      color: var(--placeholderColor);\n    }\n    &.plus-control:not([value*=\"-\"])+span:before{\n      content: '+';\n    }\n  }\n  textarea{\n    resize: var(--textareaResize);\n    white-space: pre-wrap;\n    &.fixed{\n      resize: none;\n      overflow: auto;\n    }\n  }\n","line":{"start":20,"end":97}},"group":["attribute holders"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"checked"}],"file":{"path":"attribute_holders/_inputBase.scss","name":"_inputBase.scss"}},{"description":"All input related items have their styling cleared to remove any Roll20 default styles. Note that all of your styles should be at a level higher than this mixin is used in.\n","commentRange":{"start":5,"end":10},"context":{"type":"mixin","name":"clear","code":"\n  select,\n  textarea,\n  input,\n  .uneditable-input,\n  label,\n  button {\n    all: initial;\n  }\n","line":{"start":11,"end":20}},"example":[{"type":"scss","code":"@use 'k-scaffold' as k;\n.ui-dialog .tab-content .charsheet{\n  @include k.clear;\n}"}],"group":["base styles"],"access":"public","file":{"path":"generic_scss/_roll20clear.scss","name":"_roll20clear.scss"}},{"description":"Creates the default highlight styling for inputs/selects\n","commentRange":{"start":5,"end":5},"context":{"type":"mixin","name":"inputHighlight","code":"\n  border-width: 1px 3px;\n  border-style: solid;\n  border-color: var(--borderColor);\n  border-radius: 5px;\n  box-sizing: border-box;\n","line":{"start":6,"end":12}},"group":["borders"],"access":"public","require":[],"file":{"path":"generic_scss/_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"Basic border styling for elements\n","commentRange":{"start":13,"end":13},"context":{"type":"mixin","name":"base-border","code":"\n  border-width: 1px 3px;\n  border-style: solid;\n  border-radius: 5px;\n  border-color: transparent;\n  box-sizing: border-box;\n","line":{"start":14,"end":20}},"group":["borders"],"access":"public","file":{"path":"generic_scss/_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"Styling for elements that should have a box around them\n","commentRange":{"start":21,"end":21},"context":{"type":"mixin","name":"boxed","code":"\n  border: 2px solid var(--borderColor);\n  border-radius:0;\n  box-sizing:border-box;\n","line":{"start":22,"end":26}},"group":["borders"],"access":"public","require":[],"file":{"path":"generic_scss/_borderPlaceholders.scss","name":"_borderPlaceholders.scss"},"usedBy":[{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}}}]},{"description":"The basic stylings for a button like object. Provides some basic coloring, shadowing, and hover/active state styling\n","commentRange":{"start":7,"end":7},"context":{"type":"mixin","name":"base-button","code":"\n\tbackground-color: #DCDCDC33;\n\tborder-radius: 5px;\n\tbox-shadow: 0 2px 4px black;\n\tborder-width: 0;\n\ttransition: {\n\t\tproperty:box-shadow,backdrop-filter;\n\t\tduration:200ms;\n\t\ttiming-function:ease-out;\n\t};\n\tbackdrop-filter:blur(1px);\n\toverflow:hidden;\n\t&:is(:hover,:focus){\n\t\tbackground-color: #85858580;\n\t\tbox-shadow: 0 4px 6px black;\n\t\tbackdrop-filter:blur(2px);\n\t}\n\t&:active{\n\t\tbackground-color: #858585ff;\n\t\tbox-shadow: 0 1px 2px black;\n\t\tbackdrop-filter:blur(0px);\n\t}\n","line":{"start":8,"end":30}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders/_buttons.scss","name":"_buttons.scss"},"usedBy":[{"description":"Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).\n","context":{"type":"mixin","name":"die-button","code":"\n\t@include base-button;\n\tline-height: 14px;\n\t/*height to vertically center a 2rem dicefontd10*/\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tpadding: 5px 3px 7px;\n","line":{"start":33,"end":41}}},{"description":"Basic styling for buttons with text (or text and icons)\n","context":{"type":"mixin","name":"text-button","code":"\n\tpadding: 5px 7px;\n\t@include base-button;\n","line":{"start":44,"end":47}}}]},{"description":"Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).\n","commentRange":{"start":32,"end":32},"context":{"type":"mixin","name":"die-button","code":"\n\t@include base-button;\n\tline-height: 14px;\n\t/*height to vertically center a 2rem dicefontd10*/\n\tfont-size: 2rem;\n\tfont-weight: normal;\n\tfont-style: normal;\n\tpadding: 5px 3px 7px;\n","line":{"start":33,"end":41}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"base-button"}],"file":{"path":"attribute_holders/_buttons.scss","name":"_buttons.scss"}},{"description":"Basic styling for buttons with text (or text and icons)\n","commentRange":{"start":43,"end":43},"context":{"type":"mixin","name":"text-button","code":"\n\tpadding: 5px 7px;\n\t@include base-button;\n","line":{"start":44,"end":47}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"base-button"}],"file":{"path":"attribute_holders/_buttons.scss","name":"_buttons.scss"}},{"description":"Styling for our roll buttons\n","commentRange":{"start":48,"end":48},"context":{"type":"mixin","name":"roller","code":"\n  display: flex;\n  align-items: center;\n  gap: var(--half-gap);\n  &:before{\n    content:'T';\n    font-family:dicefontd20;\n  }\n","line":{"start":49,"end":57}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"attribute_holders/_buttons.scss","name":"_buttons.scss"},"usedBy":[{"description":"Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.\n","context":{"type":"mixin","name":"button","code":"\n  button{\n    cursor: pointer;\n  }\n\t.roller{\n\t\t@include roller;\n\t}\n","line":{"start":59,"end":66}}}]},{"description":"Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.\n","commentRange":{"start":58,"end":58},"context":{"type":"mixin","name":"button","code":"\n  button{\n    cursor: pointer;\n  }\n\t.roller{\n\t\t@include roller;\n\t}\n","line":{"start":59,"end":66}},"group":["buttons"],"author":["Scott Casey"],"access":"public","require":[{"type":"mixin","name":"roller"}],"file":{"path":"attribute_holders/_buttons.scss","name":"_buttons.scss"}},{"description":"A mixin that switches the scaffold's roll template color variables (including sheet variables) over to dark mode specific ones. Should only be used directly inside a `.sheet-rolltemplate-TEMPLATENAME` rule.\n","commentRange":{"start":22,"end":28},"context":{"type":"mixin","name":"darkRoll","code":"\n  &.sheet-rolltemplate-darkmode{\n    @include darkMode;\n    --inlineRollBackColor: var(--dm-inlineRollBackColor);\n    --inlineRollColor: var(--fontColor);\n    --inlineRollCritColor: var(--dm-inlineRollCritColor);\n    --inlineRollFumbleColor: var(--dm-inlineRollCritColor);\n    --inlineRollImportantColor: var(--dm-inlineRollCritColor);\n  }\n","line":{"start":29,"end":38}},"example":[{"type":"scss","code":"// Will apply the darkmode styling attributes to the default template when dark mode is enabled.\n@use 'k-scaffold' as k;\n.sheet-rolltemplate-default{\n  @include k.darkRoll;\n}"}],"groupDescriptions":{"color modes":"A mixin that switches the scaffold's sheet color variables over to dark mode specific versions."},"group":["color modes"],"access":"public","require":[],"file":{"path":"generic_scss/_darkmode.scss","name":"_darkmode.scss"}},{"description":"These variables control how the default translations included with the scaffold function\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"Animation variables","code":"\n  --revealTime:500ms;\n  --revealFunction: ease-in-out;\n  --revealTrans: var(--revealTime) var(--revealFunction);\n","line":{"start":7,"end":11}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_animation.scss","name":"_animation.scss"}},{"description":"These variables control aspects of the borders in the k-scaffold\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"Border variables","code":"\n  --borderWidth:1px;\n  --borderStyle:solid;\n","line":{"start":7,"end":10}},"group":["css variables"],"access":"public","file":{"path":"generic_scss/variables/_border.scss","name":"_border.scss"}},{"description":"These variables control aspects of the checkbox and radio display in the k-scaffold.\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"checked variables","code":"\n  --checkContent: '✓';\n  --checkWeight: bold;\n  --checkSize: 150%;\n  --checkLineHeight: calc(var(--checkSize) / 3);\n\n  --checkboxBorderWidth: var(--borderWidth);\n  --checkboxBorderStyle: var(--borderStyle);\n  --lm-checkboxBorderColor: var(--lm-borderColor);\n  --dm-checkboxBorderColor: var(--dm-borderColor);\n  --checkboxBorderColor: var(--lm-checkBorderColor);\n\n  --checkboxWidth: 14px;\n  --checkboxHeight: 14px;\n","line":{"start":7,"end":21}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_checked.scss","name":"_checked.scss"}},{"description":"Variables that control the styling of the collapse inputs\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"collapse variables","code":"\n  --expandedSymbol:'unfold_less';\n  --collapsedSymbol: 'unfold_more';\n\n  --collapseHoverOpacity: 1;\n  --collapseBaseOpacity: 0;\n\n  --lm-collapseExpandedColor:var(--lm-selectedColor);\n  --dm-collapseExpandedColor:var(--dm-selectedColor);\n  --collapseExpandedColor: var(--lm-collapseExpandedColor);\n\n  --lm-collapseCollapsedColor:var(--lm-unselectedColor);\n  --dm-collapseCollapsedColor:var(--dm-unselectedColor);\n  --collapseCollapsedColor: var(--lm-collapseCollapsedColor);\n","line":{"start":7,"end":21}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_collapse.scss","name":"_collapse.scss"}},{"description":"Variables for defining colors in your sheet using light mode and dark mode\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"colors variables","code":"\n  --lm-backColor:#fff;\n  --dm-backColor:var(--dark-surface1);\n  --backColor:var(--lm-backColor);\n\n  --lm-selectedColor:#000;\n  --dm-selectedColor:#007476;\n  --selectedColor:var(--lm-selectedColor);\n\n  --lm-unselectedColor1:lightgrey;\n  --dm-unselectedColor1:#0e0e0e;\n  --unselectedColor1:var(--lm-unselectedColor1);\n\n  --lm-unselectedColor2:transparent;\n  --dm-unselectedColor2:transparent;\n  --unselectedColor1:var(--lm-unselectedColor2);\n\n  --lm-checkColor:#000;\n  --dm-checkColor:#ff0000;\n  --checkColor:var(--lm-checkColor);\n  --lm-checkedBackColor:transparent;\n  --dm-checkedBackColor:transparent;\n  --checkedBackColor:var(--lm-checkedBackColor);\n\n  --lm-borderColor:#000;\n  --dm-borderColor:lightgrey;\n  --borderColor:var(--lm-borderColor);\n\n  --lm-fontColor:#0f0f0f;\n  --dm-fontColor:var(--dark-primarytext);\n  --fontColor:var(--lm-fontColor);\n\n  --lm-disabledColor:var(--lm-unselectedColor1);\n  --dm-disabledColor:var(--dm-unselectedColor1);\n  --disabledColor:var(--lm-disabledColor);\n","line":{"start":7,"end":42}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_colors.scss","name":"_colors.scss"}},{"description":"Variables that control the style behavior of the fillLeft construction\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"fillLeft variables","code":"\n  --fillLeftDisplay: flex;\n  --fillLeftAlignment: center;\n\n  --fillLeftDataTransform: uppercase;\n  --fillLeftDataSize: var(--size6);\n\n  // Colors\n  --lm-fillLeftSelectedColor: var(--lm-selectedColor);\n  --dm-fillLeftSelectedColor: var(--dm-selectedColor);\n  --fillLeftSelectedColor: var(--lm-fillLeftSelectedColor);\n\n  --lm-fillLeftUnselectedColor: var(--lm-unselectedColor);\n  --dm-fillLeftUnselectedColor: var(--dm-unselectedColor);\n  --fillLeftUnselectedColor: var(--lm-fillLeftUnselectedColor);\n\n  --lm-fillLeftDataColor: var(--lm-backColor);\n  --dm-fillLeftDataColor: var(--dm-backColor);\n  --fillLeftDataColor: var(--lm-fillLeftDataColor);\n","line":{"start":7,"end":26}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_fillLeft.scss","name":"_fillLeft.scss"}},{"description":"Variables that control how font family, and font-size of text on the sheet.\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"font variables","code":"\n  // Font families\n  --font1:var(--topHeadFont);\n  --font2:var(--topHeadFont);\n  --font3:var(--midHeadFont);\n  --font4:var(--midHeadFont);\n  --font5:var(--midHeadFont);\n  --font6:var(--contentHeadFont);\n  --font7:var(--contentHeadFont);\n\n  // Font sizes\n  --baseFontSize: 16px;\n  --size1:300%;\n  --size2:250%;\n  --size3:200%;\n  --size4:150%;\n  --size5:125%;\n  --size6:100%;\n  --size7:87.5%;\n\n  // Default icon font size\n  --icon-size:24px;\n\n  //Default fonts used\n  --font-icon: 'Material Icons';\n","line":{"start":7,"end":32}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_font.scss","name":"_font.scss"}},{"description":"Variables to control the display of input elements\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"input variables","code":"\n  --inputTopPadding: 2px;\n  --inputRightPadding: 2px;\n  --inputBottomPadding: 2px;\n  --inputLeftPadding: 2px;\n  --inputPadding:\n    var(--inputTopPadding)\n    var(--inputRightPadding)\n    var(--inputBottomPadding)\n    var(--inputLeftPadding);\n  \n  --lm-placeholderColor:#ededed80;\n  --dm-placeholderColor:#3f3f3f80;\n  --placeholderColor: var(--lm-placeholderColor);\n\n  --textareaResize: vertical;\n","line":{"start":7,"end":23}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_input.scss","name":"_input.scss"}},{"description":"Variables to control the display of the various label constructions\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"label variables","code":"\n\n  --input-label-gap:var(--half-gap) var(--half-gap);\n\n  --input-label-text-transform: capitalize;\n","line":{"start":7,"end":12}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_label.scss","name":"_label.scss"}},{"description":"Variables to control basic layout of the k-scaffold\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"layout variables","code":"\n  // Layout variables\n  // Variables to define our basic gap between layout elements. Followed by several gaps that are mathematically related to it.\n  --normal-gap-x:1rem;\n  --normal-gap-y:1rem;\n  --normal-gap: var(--normal-gap-x);\n\n  // Half gaps\n  --half-gap-x:calc(var(--normal-gap-x) / 2);\n  --half-gap-y:calc(var(--normal-gap-y) / 2);\n  --half-gap: var(--half-gap-x);\n\n  // Tiny gaps (1/4 gap)\n  --tiny-gap-x:calc(var(--half-gap-x) / 2);\n  --tiny-gap-y:calc(var(--half-gap-y) / 2);\n  --tiny-gap: var(--tiny-gap-x);\n\n  // Big gaps (double gap)\n  --big-gap-x:calc(var(--normal-gap-x) * 2);\n  --big-gap-y:calc(var(--normal-gap-y) * 2);\n  --big-gap: var(--big-gap-x);\n","line":{"start":7,"end":28}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_layout.scss","name":"_layout.scss"}},{"description":"Variables to control the display of selects\n","commentRange":{"start":5,"end":6},"context":{"type":"mixin","name":"select variables","code":"\n  --lm-selectColor: var(--lm-fontColor);\n  --dm-selectColor: var(--dm-fontColor);\n  --selectColor: var(--lm-fontColor);\n\n  --selectTextOverflow: var(--textOverflow);\n  --selectTextAlign: center;\n  --selectTextTransform: capitalize;\n","line":{"start":7,"end":15}},"group":["css variables"],"access":"public","require":[],"file":{"path":"generic_scss/variables/_select.scss","name":"_select.scss"}},{"description":"Styling for our various special fieldset constructions. e.g. [customControlFieldset](/pug.html#customControlFieldset).\n","commentRange":{"start":7,"end":7},"context":{"type":"mixin","name":"fieldsetStyling","code":"\n  .repitem {\n    >input:not([type='checkbox']) {\n      width: 100%;\n    }\n\n    .headed-textarea,\n    .description {\n      grid-column: 1/-1;\n    }\n  }\n\n  .repcontainer {\n    display: grid;\n    gap: var(--normal-gap);\n  }\n\n  .repeating-container {\n    display: grid;\n    grid-template-areas: 'header';\n    align-self: start;\n\n    >.header {\n      grid-area: header;\n    }\n    :is(.repcontrol-button,.repcontrol_edit) {\n      opacity: 0;\n      transition: var(--revealTrans);\n    }\n    &:is(:hover, :focus-within, :focus) :is(.repcontrol-button,.repcontrol_edit) {\n      opacity: 1;\n    }\n  }\n\n  // Adding pseudo rep styling\n  .repcontrol-button {\n    align-self: start;\n\n    ~.repcontrol {\n      justify-self: end;\n      z-index: 100;\n\n      >.repcontrol_add {\n        display: none !important;\n      }\n    }\n  }\n\n  .repcontrol-button--add {\n    justify-self: start;\n    width: 15px;\n    height: 15px;\n    padding: 4px;\n    font-size: 0;\n    color: var(--col-alt);\n    border: 1px solid var(--col-alt);\n\n    &::before {\n      inset: 0;\n      place-self: center;\n      font-family: var(--font-icon);\n      font-size: 12px;\n      content: 'add';\n    }\n  }\n\n  //End pseudo rep styling\n","line":{"start":8,"end":75}},"group":["fieldsets"],"author":["Scott Casey"],"access":"public","require":[],"file":{"path":"fieldsets/_fieldsetStyling.scss","name":"_fieldsetStyling.scss"}},{"description":"Styling for items that need the pictos custom font\n","commentRange":{"start":9,"end":9},"context":{"type":"mixin","name":"pictosCustom","code":"\n  font-family: pictos custom;\n  text-transform: none;\n","line":{"start":10,"end":13}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the pictos 3 font\n","commentRange":{"start":14,"end":14},"context":{"type":"mixin","name":"pictos3","code":"\n  font-family: pictos three;\n  text-transform: none;\n","line":{"start":15,"end":18}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d4 font\n","commentRange":{"start":20,"end":20},"context":{"type":"mixin","name":"diceD4","code":"\n  font-family: dicefontd4 !important;\n  text-transform: none !important;\n","line":{"start":21,"end":24}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d6 font\n","commentRange":{"start":26,"end":26},"context":{"type":"mixin","name":"diceD6","code":"\n  font-family: dicefontd6 !important;\n  text-transform: none !important;\n","line":{"start":27,"end":30}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d8 font\n","commentRange":{"start":32,"end":32},"context":{"type":"mixin","name":"diceD8","code":"\n  font-family: dicefontd8 !important;\n  text-transform: none !important;\n","line":{"start":33,"end":36}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d10 font\n","commentRange":{"start":38,"end":38},"context":{"type":"mixin","name":"diceD10","code":"\n  font-family: dicefontd10 !important;\n  text-transform: none !important;\n","line":{"start":39,"end":42}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d12 font\n","commentRange":{"start":44,"end":44},"context":{"type":"mixin","name":"diceD12","code":"\n  font-family: dicefontd12 !important;\n  text-transform: none !important;\n","line":{"start":45,"end":48}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d20 font\n","commentRange":{"start":50,"end":50},"context":{"type":"mixin","name":"diceD20","code":"\n  font-family: dicefontd20 !important;\n  text-transform: none !important;\n","line":{"start":51,"end":54}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Styling for items that need the dice d30 font\n","commentRange":{"start":56,"end":56},"context":{"type":"mixin","name":"diceD30","code":"\n  font-family: dicefontd30 !important;\n  text-transform: none !important;\n","line":{"start":57,"end":60}},"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"},"usedBy":[{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}}}]},{"description":"Utility classes for applying font styles\n","commentRange":{"start":15,"end":15},"context":{"type":"mixin","name":"textStyles","code":"\n  .sheet-italics,\n  .italics{\n    @include italics;\n  }\n","line":{"start":16,"end":21}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Basic styling for headers.\n","commentRange":{"start":22,"end":22},"context":{"type":"mixin","name":"baseHeader","code":"\n  @include baseText;\n  color:var(--fontColor);\n  display: block;\n  white-space: nowrap;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-weight:normal;\n","line":{"start":23,"end":31}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h1 level headers\n","context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}}},{"description":"Base styling of h2 level headers\n","context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}}},{"description":"Base styling of h3 level headers\n","context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}}},{"description":"Base styling of h4 level headers\n","context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}}},{"description":"Base styling of h5 level headers\n","context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}}},{"description":"Base styling of h6 level headers\n","context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}}}]},{"description":"Headers that should pop!\n","commentRange":{"start":33,"end":33},"context":{"type":"mixin","name":"importantHeader","code":"\n  text-transform: uppercase;\n  font-weight: normal;\n","line":{"start":34,"end":37}},"group":["fonts"],"access":"public","file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h1 level headers\n","context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}}},{"description":"Base styling of h2 level headers\n","context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}}},{"description":"Base styling of h3 level headers\n","context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}}}]},{"description":"Headers that should be important, but not eye-catching\n","commentRange":{"start":39,"end":39},"context":{"type":"mixin","name":"midHeader","code":"\n  &:not(:where(input)){\n    text-transform:capitalize;\n  }\n","line":{"start":40,"end":44}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"},"usedBy":[{"description":"Base styling of h4 level headers\n","context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}}},{"description":"Base styling of h5 level headers\n","context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}}},{"description":"Base styling of h6 level headers\n","context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}}}]},{"description":"Base styling of h1 level headers\n","commentRange":{"start":47,"end":47},"context":{"type":"mixin","name":"h1-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size1);\n  font-family: var(--font1);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":48,"end":56}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h2 level headers\n","commentRange":{"start":63,"end":63},"context":{"type":"mixin","name":"h2-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size2);\n  font-family: var(--font2);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":64,"end":72}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h3 level headers\n","commentRange":{"start":79,"end":79},"context":{"type":"mixin","name":"h3-style","code":"\n  @include baseHeader;\n  @include importantHeader;\n  font-size: var(--size3);\n  font-family: var(--font3);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":80,"end":88}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"importantHeader"}],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h4 level headers\n","commentRange":{"start":95,"end":95},"context":{"type":"mixin","name":"h4-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size4);\n  font-family: var(--font4);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":96,"end":104}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h5 level headers\n","commentRange":{"start":111,"end":111},"context":{"type":"mixin","name":"h5-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":112,"end":121}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Base styling of h6 level headers\n","commentRange":{"start":128,"end":128},"context":{"type":"mixin","name":"h6-style","code":"\n  @include baseHeader;\n  @include midHeader;\n  font-size: var(--size5);\n  font-style:normal;\n  font-family: var(--font5);\n  &:not(input){\n    text-align: center;\n  }\n","line":{"start":129,"end":138}},"group":["fonts"],"access":"public","require":[{"type":"mixin","name":"baseHeader"},{"type":"mixin","name":"midHeader"}],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Header element styling is applied to normal header elements (h1 - h6) as well as elements that have an `aria-level` defined on them. Note that a `role='heading'` should also be defined on these html elements for full accessibility.\n","commentRange":{"start":145,"end":145},"context":{"type":"mixin","name":"headerElements","code":"\n  h1,\n  *[aria-level='1']{\n    @include h1;\n  }\n  h2,\n  *[aria-level='2']{\n    @include h2;\n  }\n  h3,\n  *[aria-level='3']{\n    @include h3;\n  }\n  h4,\n  *[aria-level='4']{\n    @include h4;\n  }\n  h5,\n  *[aria-level='5']{\n    @include h5;\n  }\n  h6,\n  *[aria-level='6']{\n    @include h6;\n  }\n","line":{"start":146,"end":171}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"The styling that is applied to all text elements.\n","commentRange":{"start":172,"end":172},"context":{"type":"mixin","name":"textElements","code":"\n  span,\n  input,\n  textarea,\n  button,\n  select{\n    @include baseText;\n    color: inherit;\n    font-family: inherit;\n    font-size:inherit;\n    line-height:inherit;\n  }\n  @each $size in 1,2,3,4,5,6,7{\n    .text-#{$size},\n    .sheet-text-#{$size}{\n      font-size: var(--size#{$size});\n    }\n  }\n  .capitalize,\n  .sheet-capitalize{\n    text-transform: capitalize !important;\n  }\n  .lowercase,\n  .sheet-lowercase{\n    text-transform:lowercase !important;\n  }\n  .uppercase,\n  .sheet-uppercase{\n    text-transform:uppercase !important;\n  }\n","line":{"start":173,"end":203}},"group":["fonts"],"access":"public","require":[],"file":{"path":"generic_scss/_textLevel.scss","name":"_textLevel.scss"}},{"description":"Utility classes for applying aspect ratios and sizes\n","commentRange":{"start":7,"end":9},"context":{"type":"mixin","name":"Sizes and Ratios","code":"\n  .ratio1-1,\n  .sheet-ratio1-1{\n    @include ratio1_1;\n  }\n","line":{"start":10,"end":15}},"group":["layout"],"access":"public","require":[],"file":{"path":"generic_scss/_sizingAndRatio.scss","name":"_sizingAndRatio.scss"}},{"description":"Mixin that includes all of the framework's styles. Should be included in a 3 class declaration for character sheets.\n","commentRange":{"start":24,"end":30},"context":{"type":"mixin","name":"defaultStyles","code":"\n  // Clear roll20 styles\n  @include genericStyle.clear;\n\n  // Basic Layout constructs\n  @include genericStyle.layout;\n  @include genericStyle.borderStyles;\n  @include genericStyle.sizesAndRatios;\n  \n  // Text stylings\n  @include genericStyle.textElements;\n  @include genericStyle.materialIcons;\n  @include genericStyle.textStyles;\n  @include genericStyle.headerElements;\n  @include genericStyle.r20FontClasses;\n\n  // Input and button\n  @include attributeConstructs.inputBase;\n  @include attributeConstructs.button;\n  @include attributeConstructs.collapsible;\n  @include attributeConstructs.fillLeft;\n  @include labels.input-label;\n  @include labels.headed-textarea;\n  @include adaptive.adaptiveText;\n\n  @include fieldsetStyling.fieldsetStyling;\n","line":{"start":31,"end":57}},"example":[{"type":"scss","code":"@use 'k-scaffold' as k;\n\n.ui-dialog .tab-content .charsheet{\n  @include k.defaultStyles;\n}"}],"access":"public","group":["undefined"],"require":[],"file":{"path":"_k.scss","name":"_k.scss"},"usedBy":[{"description":"Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.\n","context":{"type":"mixin","name":"defaultRollStyling","code":"\n  @include defaultStyles;\n  @include rolltemplate.rollStyles;\n","line":{"start":66,"end":69}}}]},{"description":"Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.\n","commentRange":{"start":59,"end":65},"context":{"type":"mixin","name":"defaultRollStyling","code":"\n  @include defaultStyles;\n  @include rolltemplate.rollStyles;\n","line":{"start":66,"end":69}},"example":[{"type":"scss","code":"@use 'k-scaffold/k';\n\n.sheet-rolltemplate-TEMPLATENAME{\n  @include k.defaultRollStyling;\n}"}],"access":"public","group":["undefined"],"require":[{"type":"mixin","name":"defaultStyles"}],"file":{"path":"_k.scss","name":"_k.scss"}},{"description":"Styling for the built-in layout out utility classes\n @group layout\n","commentRange":{"start":1,"end":2},"context":{"type":"mixin","name":"layout","code":"\n  // Flexbox variables\n  .flex-box,\n  .sheet-flex-box{\n    display:flex;\n  }\n  .flex-wrap,\n  .sheet-flex-wrap{\n    flex-wrap:wrap;\n  }\n  .justify-space-around,\n  .sheet-justify-space-around{\n    justify-content:space-around;\n  }\n  .justify-space-between,\n  .sheet-justify-space-between{\n    justify-content:space-between;\n  }\n  .justify-center,\n  .sheet-justify-center{\n    justify-content:center;\n  }\n  \n  .flex-min-content,\n  .sheet-flex-min-content{\n    flex: 1 0 min-content;\n  }\n  .stacked{\n    flex-direction:column;\n    &.center>*{\n      text-align: center;\n    }\n    &:not(.center){\n      align-items:start;\n    }\n    > [name]:not([type=\"number\"]):not([type=\"checkbox\"]):not([type=\"radio\"]){\n      width:100%;\n    }\n  }\n  .flex-column,\n  .sheet-flex-column{\n    flex-direction: column;\n  }\n  .flex-row-reverse,\n  .sheet-flex-row-revers{\n    flex-direction: row-reverse;\n  }\n  .flex-column-reverse,\n  .sheet-flex-column-reverse{\n    flex-direction: column-reverse;\n  }\n\n  // Gap/Flex combined variables\n  .normal-gap,\n  .sheet-normal-gap{\n    gap:var(--normal-gap);\n  }\n  .normal-gap-x,\n  .sheet-normal-gap-x{\n    column-gap:var(--normal-gap-x);\n  }\n  .normal-gap-y,\n  .sheet-normal-gap-y{\n    row-gap:var(--normal-gap-y);\n  }\n  \n  .half-gap,\n  .sheet-half-gap{\n    gap:var(--half-gap);\n  }\n  .half-gap-x,\n  .sheet-half-gap-x{\n    column-gap:var(--half-gap-x);\n  }\n  .half-gap-y,\n  .sheet-half-gap-y{\n    row-gap:var(--half-gap-y);\n  }\n  \n  .tiny-gap,\n  .sheet-tiny-gap{\n    gap:var(--tiny-gap);\n  }\n  .tiny-gap-x,\n  .sheet-tiny-gap-x{\n    column-gap:var(--tiny-gap-x);\n  }\n  .tiny-gap-y,\n  .sheet-tiny-gap-y{\n    row-gap:var(--tiny-gap-y);\n  }\n  \n  .big-gap,\n  .sheet-big-gap{\n    gap:var(--big-gap);\n  }\n  .big-gap-x,\n  .sheet-big-gap-x{\n    column-gap:var(--big-gap-x);\n  }\n  .big-gap-y,\n  .sheet-big-gap-y{\n    row-gap:var(--big-gap-y);\n  }\n\n  // Grid variables\n  .grid,\n  .sheet-grid{\n    display:grid;\n  }\n\n  .grid-span-2,\n  .sheet-grid-span-2{\n    grid-column:span 2;\n  }\n  .grid-span-all,\n  .sheet-grid-span-all{\n    grid-column:1/-1;\n  }\n\n  .grid-column,\n  .sheet-grid-column{\n    grid-auto-flow:column;\n  }\n  .grid-dense,\n  .sheet-grid-dense{\n    grid-auto-flow:dense;\n  }\n","line":{"start":3,"end":131}},"access":"public","group":["undefined"],"require":[],"file":{"path":"generic_scss/_layout.scss","name":"_layout.scss"}},{"description":"Mixin that creates the properties that should be assigned for inline rolls\n","commentRange":{"start":1,"end":1},"context":{"type":"mixin","name":"rollProperties","code":"\n  // Background settings\n  background-color: var(--inlineRoll#{$type}BackColor);\n\n  // Font settings\n  color:var(--inlineRoll#{$type}Color);\n  font-family:var(--inlineRoll#{$type}Font);\n  font-size:var(--inlineRoll#{$type}Size);\n\n  // Spacing\n  padding: var(--inlineRoll#{$type}Padding);\n  border: var(--inlineRoll#{$type}Border);\n  margin: var(--inlineRoll#{$type}Margin);\n","line":{"start":2,"end":15}},"access":"public","group":["undefined"],"require":[],"file":{"path":"rolltemplate/helpers/_index.scss","name":"_index.scss"}},{"description":"Utility classes that are provided to easily apply a variety of border styles to your elements.\n","commentRange":{"start":27,"end":28},"context":{"type":"mixin","name":"borderStyles","code":"\n  .boxed,\n  .sheet-boxed{\n    @include boxed;\n    &.thick-left{\n      border-left-width: 5px;\n    }\n    &.thick-bottom{\n      border-bottom-width: 5px;\n    }\n    &.thick-right{\n      border-right-width: 5px;\n    }\n    &.thick-top{\n      border-top-width: 5px;\n    }\n  }\n  .underlined,\n  .sheet-underlined{\n    @include base-border;\n    border-radius: 0;\n    border-bottom: 1px solid var(--borderColor);\n    transition: border-radius border var(--revealTrans);\n  }\n  :is(.underlined,.boxed){\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){\n      @include inputHighlight;\n    }\n    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){\n      background-color: var(--disabledColor);\n    }\n  }\n  .underlined--invisible{\n    border-color:transparent !important;\n  }\n","line":{"start":29,"end":64}},"group":["utility"],"access":"public","require":[{"type":"mixin","name":"boxed"},{"type":"mixin","name":"base-border"},{"type":"mixin","name":"inputHighlight"}],"file":{"path":"generic_scss/_borderPlaceholders.scss","name":"_borderPlaceholders.scss"}},{"description":"Utility classes that are provided to apply material icon styling to your elements\n","commentRange":{"start":16,"end":17},"context":{"type":"mixin","name":"materialIcons","code":"\n  .sheet-material-icons,\n  .material-icons {\n    @include materialStyle;\n  }\n","line":{"start":18,"end":23}},"group":["utility"],"groupDescriptions":{"materialstyle":"Mixin to add the necessary styling to use material icons."},"example":[{"type":"scss","code":" @use 'k-scaffold' as k;\n.charsheet .material-icon{\n  @include k.materialStyle;\n}"}],"access":"public","require":[],"file":{"path":"generic_scss/_materialIcons.scss","name":"_materialIcons.scss"}},{"description":"Utility classes for applying the various dice and pictos fonts that are included on Roll20.\n","commentRange":{"start":62,"end":63},"context":{"type":"mixin","name":"r20FontClasses","code":"\n  .sheet-pictos,\n  .pictos{\n    @include pictos;\n  }\n  .pictos3,\n  .sheet-pictos3{\n    @include pictos3;\n  }\n  .pictoscustom,\n  .sheet-pictoscustom{\n    @include pictosCustom;\n  }\n  .d4,\n  .sheet-d4{\n    @include diceD4;\n  }\n  .d6,\n  .sheet-d6{\n    @include diceD6;\n  }\n  .d8,\n  .sheet-d8{\n    @include diceD8;\n  }\n  .d10,\n  .sheet-d10{\n    @include diceD10;\n  }\n  .d12,\n  .sheet-d12{\n    @include diceD12;\n  }\n  .d20,\n  .sheet-d20{\n    @include diceD20;\n  }\n  .d30,\n  .sheet-d30{\n    @include diceD30;\n  }\n","line":{"start":64,"end":105}},"group":["utility"],"groupDescriptions":{"fonts":"Styling for items that need the pictos font"},"access":"public","require":[{"type":"mixin","name":"pictos3"},{"type":"mixin","name":"pictosCustom"},{"type":"mixin","name":"diceD4"},{"type":"mixin","name":"diceD6"},{"type":"mixin","name":"diceD8"},{"type":"mixin","name":"diceD10"},{"type":"mixin","name":"diceD12"},{"type":"mixin","name":"diceD20"},{"type":"mixin","name":"diceD30"}],"file":{"path":"generic_scss/_pictos.scss","name":"_pictos.scss"}}];
export const pug = [{"meta":{"name":"adaptiveTextarea","description":"Creates an html construction for creating a [content-scaled](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs) textarea. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).","arguments":[{"name":"textObj","description":"The object describing the textarea as per the {@link textarea} mixin.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} textObj - The object describing the textarea as per the {@link textarea} mixin."}],"attributes":null,"example":"include ../_k.pug\n+adaptiveTextarea({name:'character description'})\n\n//Appending the class directly to the mixin\n+adaptiveTextarea({name:'character description'}).custom-class\n"},"file":"lib/adaptive/_adaptive.pug","source":"mixin adaptiveTextarea(textObj)\n  .adaptive.adaptive--text&attributes(attributes)\n    - let spanObj = {name:textObj.name,class:'adaptive--text__span'};\n    - textObj.class = textObj.class ? `${textObj.class} adaptive--text__textarea` : 'adaptive--text__textarea';\n    +span(spanObj)\n    +textarea(textObj)","output":"<div class=\"adaptive adaptive--text\">\n  <span class=\"adaptive--text__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <textarea class=\"adaptive--text__textarea\" name=\"attr_character_description\" title=\"@{character_description}\"></textarea>\n</div>\n<!--Appending the class directly to the mixin-->\n<div class=\"adaptive adaptive--text custom-class\">\n  <span class=\"adaptive--text__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <textarea class=\"adaptive--text__textarea\" name=\"attr_character_description\" title=\"@{character_description}\"></textarea>\n</div>"},{"meta":{"name":"adaptiveInput","description":"Creates an html construction for creating a [content-scaled](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs) input. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).","arguments":[{"name":"inputObj","description":"The object describing the input as per the {@link input} mixin. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - The object describing the input as per the {@link input} mixin. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example)."}],"attributes":null,"example":"include ../_k.pug\n+adaptiveInput({name:'character description',type:'text'})\n\n//Appending class directly to the mixin\n+adaptiveInput({name:'character description',type:'text'}).custom-class\n"},"file":"lib/adaptive/_adaptive.pug","source":"mixin adaptiveInput(textObj)\n  .adaptive.adaptive--input&attributes(attributes)\n    - let spanObj = {name:textObj.name,class:'adaptive--input__span','max-width':maxWidth};\n    - textObj.class = textObj.class ? `${textObj.class} adaptive--input__input` : 'adaptive--input__input';\n    +span(spanObj)\n    +input(textObj)","output":"<div class=\"adaptive adaptive--input\">\n  <span class=\"adaptive--input__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <input class=\"adaptive--input__input\" name=\"attr_character_description\" type=\"text\" title=\"@{character_description}\"/>\n</div>\n<!--Appending class directly to the mixin-->\n<div class=\"adaptive adaptive--input custom-class\">\n  <span class=\"adaptive--input__span\" name=\"attr_character_description\" title=\"@{character_description}\"></span>\n  <input class=\"adaptive--input__input\" name=\"attr_character_description\" type=\"text\" title=\"@{character_description}\"/>\n</div>"},{"meta":{"name":"img","description":"A mixin to create a sheet image element. Particularly useful when using the image attribute syntax.","arguments":[{"name":"imgObj","description":"An object describing the properties of the img just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} imgObj - An object describing the properties of the img just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property."}],"example":"include ../_k.pug\n+img({name:'my image',class:'some-class'})\n"},"file":"lib/attribute_holders/_attribute_backed.pug","source":"mixin img(obj)\n  - checkKUse();\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  - obj['data-i18n-alt'] = obj['data-i18n-alt'] || obj.name;\n  - obj.name = attrName(obj.name);\n  - obj.title = obj.title || attrTitle(obj.name);\n  - obj.name = `attr_${obj.name}`;\n  - const elementObj = makeElementObj(obj);\n  - addFieldToFieldsetObj(obj);\n  - storeTrigger(obj);\n  img&attributes(elementObj)","output":"<img class=\"some-class\" name=\"attr_my_image\" data-i18n-alt=\"my image\" title=\"@{my_image}\"/>"},{"meta":{"name":"span","description":"Creates a span element and formats the name of the span for compatibility with the Roll20 attribute system.","arguments":[{"name":"attrObj","description":"The object describing the span itself.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} attrObj - The object describing the span itself."},{"name":"block","description":"What is contained within the span","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - What is contained within the span"}],"attributes":null,"example":"include ../_k.pug\n+span({name:'attribute backed span',trigger:{calculation:'calculateAttribute'}})\n"},"file":"lib/attribute_holders/_attribute_backed.pug","source":"mixin span(obj)\n  - checkKUse();\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  if obj.name\n    - obj.name = replaceSpaces(obj.name);\n    - obj.title = obj.title || attrTitle(obj.name);\n    - obj.name = `attr_${obj.name}`;\n    - addFieldToFieldsetObj(obj);\n  - const elementObj = makeElementObj(obj);\n  span&attributes(elementObj)\n    block\n  if obj.name\n    - obj.type = 'span';\n    - storeTrigger(obj);","output":"<span name=\"attr_attribute_backed_span\" title=\"@{attribute_backed_span}\"></span>"},{"meta":{"name":"div","description":"Creates a div element and will properly format the name attribute of the div if it is provided","arguments":[{"name":"divObj","description":"The object describing the div","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - The object describing the div"},{"name":"block","description":"The contents of the div","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the div"}],"attributes":null,"example":"include ../_k.pug\n+div({name:'background image'})\n"},"file":"lib/attribute_holders/_attribute_backed.pug","source":"mixin div(obj)\n  - checkKUse();\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  if obj.name\n    - obj.name = replaceSpaces(obj.name);\n    - obj.title = obj.title || attrTitle(obj.name);\n    - obj.name = `attr_${obj.name}`;\n  div&attributes(obj)\n    block","output":"<div name=\"attr_background_image\" title=\"@{background_image}\"></div>"},{"meta":{"name":"button","description":"Creates a button element. Valid types are `roll` or `action`. If a type is not specified in the object argument, a roll button is created. If an action button is created, spaces in the name are replaced with dashes instead of underscores.","arguments":[{"name":"buttonObj","description":"The object describing the button","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - The object describing the button"},{"name":"block","description":"The contents of the button element","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the button element"}],"example":"include ../_k.pug\n//A basic roll button\n+button({name:'my button',value:'/r 3d10'})\n//An action button\n+button({name:'my button',type:'action','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})\n"},"file":"lib/attribute_holders/_buttons.pug","source":"mixin button(obj, _attributes)\n  - checkKUse();\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  - obj.name = attrName(obj.name);\n  - obj.title = obj.title || buttonTitle(obj.name);\n  if obj.type === 'action'\n    - obj.name = `act_${obj.name}`;\n  else\n    - obj.type = 'roll';\n    - obj.name = `roll_${obj.name}`;\n  - const elementObj = makeElementObj(obj);\n  if obj.type !== 'roll'\n    - storeTrigger(obj);\n  button&attributes(elementObj)&attributes(attributes)\n    block","output":"<!--A basic roll button-->\n<button name=\"roll_my_button\" value=\"/r 3d10\" title=\"%{my_button}\" type=\"roll\"></button>\n<!--An action button-->\n<button name=\"act_my_button\" type=\"action\" data-i18n=\"action button\" title=\"%{my_button}\"></button>"},{"meta":{"name":"action","arguments":[{"name":"buttonObj","description":"The object describing the button","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - The object describing the button"},{"name":"block","description":"The contents of the button element","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the button element"}],"description":"Alias for {@link button} that creates a button element with a type of `action`. Spaces in the name are replaced with dashes instead of underscores.","attributes":null,"example":"include ../_k.pug\n+action({name:'my button','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})\n"},"file":"lib/attribute_holders/_buttons.pug","source":"mixin action(obj, _attributes)\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  - obj.type = 'action';\n  - obj.name = attrName(obj.name).replace(/[\\s_]+/g,'-');\n  +button(obj)&attributes(attributes)\n    block","output":"<button name=\"act_my-button\" data-i18n=\"action button\" type=\"action\" title=\"%{my-button}\"></button>"},{"meta":{"name":"roller","arguments":[{"name":"buttonObj","description":"The object describing the button","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - The object describing the button"},{"name":"block","description":"The contents of the button element","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The contents of the button element"}],"description":"Creates a multi element construction made of a hidden input, a roll button, and a hidden action button. On sheet load, or character sheet name change, the hidden input is updated with an ability call to the action button. The roll button refers to the hidden input as its value. This allows for an action button to be used to call custom roll parsing (or other sheet functionality) while retaining the ability to drag the button to the macro bar. Uses the same arguments as {@link button}. A trigger should be passed, and will be associated with the action button's name.","attributes":null,"example":"include ../_k.pug\n+roller({name:'my button','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})\n"},"file":"lib/attribute_holders/_buttons.pug","source":"mixin roller(obj)\n  +rollerExtras(obj)\n    - let rollObj = {...obj};\n    - delete rollObj.trigger;\n    +button(obj)\n      block","output":"<button class=\"roller\" name=\"roll_my_button\" data-i18n=\"action button\" value=\"@{my_button_action}\" title=\"%{my_button}\" type=\"roll\"></button>\n<button name=\"act_my-button-action\" hidden=\"\" type=\"action\" title=\"%{my-button-action}\"></button>\n<input name=\"attr_my_button_action\" type=\"hidden\" title=\"@{my_button_action}\"/>"},{"meta":{"name":"compendiumAttributes","description":"Creates a set of compendium drop target attributes. Defaults to creating target attributes for the `Name` and `data` compendium attributes.","arguments":[{"name":"prefix","description":"A prefix to attach to the default attribute names.","type":"string","default":null,"nullable":false,"optional":true,"original":"{string} [prefix] - A prefix to attach to the default attribute names."},{"name":"lookupAttributes","description":"An array of the lookup attributes to create targets for. The target attributes are named based on the compendium attribute they are for.","type":"array","default":"['Name','data']","nullable":false,"optional":true,"original":"{array} [lookupAttributes = ['Name','data']] - An array of the lookup attributes to create targets for. The target attributes are named based on the compendium attribute they are for."},{"name":"triggerAccept","description":"The compendium attribute that should trigger the sheetworkers to handle the compendium drop.","type":"string","default":"'Name'","nullable":false,"optional":true,"original":"{string} [triggerAccept = 'Name'] - The compendium attribute that should trigger the sheetworkers to handle the compendium drop."},{"name":"trigger","description":"The trigger object.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - The trigger object."}],"attributes":null,"example":"include ../_k.pug\n//Using just defaults\n+compendiumAttributes({})\n\n//Specifying a prefix\n+compendiumAttributes({prefix:'prefix'})\n\n//Specifying lookupAttributes and a prefix\n+compendiumAttributes({lookupAttributes:['Name','data','Category'],prefix:'prefix'})\n"},"file":"lib/attribute_holders/_compendium.pug","source":"mixin compendiumAttributes({prefix,lookupAttributes = ['Name','data'],triggerAccept = 'Name',trigger = {triggeredFuncs:[\"handleCompendiumDrop\"]}})\n  - prefix = prefix ? `${prefix} ` : '';\n  each accept in lookupAttributes\n    - let inputObj = {name:`${prefix}drop ${accept.toLowerCase()}`,accept,value:''};\n    if accept === triggerAccept\n      - inputObj.trigger = trigger;\n    +hidden(inputObj)","output":"<!--Using just defaults-->\n<input name=\"attr_drop_name\" accept=\"Name\" value=\"\" type=\"hidden\" title=\"@{drop_name}\"/>\n<input name=\"attr_drop_data\" accept=\"data\" value=\"\" type=\"hidden\" title=\"@{drop_data}\"/>\n<!--Specifying a prefix-->\n<input name=\"attr_prefix_drop_name\" accept=\"Name\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_name}\"/>\n<input name=\"attr_prefix_drop_data\" accept=\"data\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_data}\"/>\n<!--Specifying lookupAttributes and a prefix-->\n<input name=\"attr_prefix_drop_name\" accept=\"Name\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_name}\"/>\n<input name=\"attr_prefix_drop_data\" accept=\"data\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_data}\"/>\n<input name=\"attr_prefix_drop_category\" accept=\"Category\" value=\"\" type=\"hidden\" title=\"@{prefix_drop_category}\"/>"},{"meta":{"name":"fillLeft","description":"A mixin that creates an html construction ready to be styled for use as a [fill-to-left section](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).","arguments":[{"name":"radioObj","description":"The object containing the details of the radio input to create. Similar to the {@link radio}, but the value property passed is used as the default checked value.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} radioObj - The object containing the details of the radio input to create. Similar to the {@link radio}, but the value property passed is used as the default checked value."},{"name":"divObj","description":"Optional object containing any details of the div to be applied such as class, id, or other properties. Class and ID can also be supplied by attaching them to the mixin invocation just like with a regular div.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [divObj] - Optional object containing any details of the div to be applied such as class, id, or other properties. Class and ID can also be supplied by attaching them to the mixin invocation just like with a regular div."},{"name":"valueArray","description":"Array containing the values to be used for the fill to left construction. These should be in the order that they should be displayed left to right.","type":"array","default":null,"nullable":false,"optional":false,"original":"{array} valueArray - Array containing the values to be used for the fill to left construction. These should be in the order that they should be displayed left to right."},{"name":"noClear","description":"Optional argument that tells the mixin whether or not to apply the `fill-left__radio--clearer` class to the first radio button value. If falsy (or not passed), the class is applied. If truthy, the class is not applied.","type":"boolean","default":null,"nullable":false,"optional":true,"original":"{boolean} [noClear] - Optional argument that tells the mixin whether or not to apply the `fill-left__radio--clearer` class to the first radio button value. If falsy (or not passed), the class is applied. If truthy, the class is not applied."}],"example":"include ../_k.pug\n+fillLeft({\n  radioObj:{name:'my radio'},\n  divObj:{class:'some-custom-class'},\n  valueArray:[1,2,3,4,5]\n})\n"},"file":"lib/attribute_holders/_fill_left.pug","source":"mixin fillLeft({radioObj,divObj,valueArray,noClear,displayValues})\n  - divObj = divObj || {};\n  .fill-left&attributes(divObj)&attributes(attributes)\n    if !noClear\n      - const clearObj = {...radioObj,value:0};\n      -\n        clearObj.class = clearObj.class ? \n          `${clearObj.class} fill-left__radio` :\n          `fill-left__radio`;\n      if value === 0\n        - clearObj.checked = '';\n      +hidden(clearObj)\n    each value,index in valueArray\n      - const usedObj = {...radioObj,value};\n      -\n        usedObj.class = usedObj.class ? \n          `${usedObj.class} fill-left__radio` :\n          `fill-left__radio`;\n      if displayValues\n        - usedObj['data-value'] = displayValues[index];\n      if value === radioObj.value\n        - usedObj.checked = '';\n      \n      +#{noClear ? 'radio' : 'checkbox'}(usedObj)","output":"<div class=\"fill-left some-custom-class\">\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"0\" type=\"hidden\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"1\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"2\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"3\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"4\" type=\"checkbox\" title=\"@{my_radio}\"/>\n  <input class=\"fill-left__radio\" name=\"attr_my_radio\" value=\"5\" type=\"checkbox\" title=\"@{my_radio}\"/>\n</div>"},{"meta":{"name":"input","description":"A generic mixin to create an input. The mixin will replace spaces in the attribute name with underscores and will add a title property if one isn't supplied that will inform the user what the attribute call for the attribute is.","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"attributes":null,"example":"include ../_k.pug\n+input({name:'my attribute',type:'text',class:'some-class',trigger:{affects:['other_attribute']}})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin input(obj)\n  - checkKUse();\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  - obj.name = attrName(obj.name);\n  - obj.title = obj.title || attrTitle(obj.name);\n  - obj.name = `attr_${obj.name}`;\n  - const elementObj = makeElementObj(obj);\n  - addFieldToFieldsetObj(obj);\n  - storeTrigger(obj);\n  input&attributes(elementObj)&attributes(attributes)","output":"<input class=\"some-class\" name=\"attr_my_attribute\" type=\"text\" title=\"@{my_attribute}\"/>"},{"meta":{"name":"text","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"An alias for {@link input} that specifies the input type as text. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+text({name:'my attribute',class:'some-class',trigger:{affects:['other_attribute']}})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin text(obj)\n  - obj.type = 'text';\n  +input(obj)","output":"<input class=\"some-class\" name=\"attr_my_attribute\" type=\"text\" title=\"@{my_attribute}\"/>"},{"meta":{"name":"checkbox","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"An alias for {@link input} that specifies the input type as checkbox. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+checkbox({name:'my checkbox',value:1})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin checkbox(obj)\n  - obj.type = 'checkbox';\n  +input(obj)&attributes(attributes)","output":"<input name=\"attr_my_checkbox\" value=\"1\" type=\"checkbox\" title=\"@{my_checkbox}\"/>"},{"meta":{"name":"collapse","arguments":[{"name":"name","description":"The name to use for the collapse element. Defaults to `collapse`","type":"string","default":"collapse","nullable":false,"optional":true,"original":"{string} [name=collapse] - The name to use for the collapse element. Defaults to `collapse`"}],"description":"Alias for {@link checkbox} that creates a checkbox for us in collapse/expanding a section. Sets the checkbox to unchecked with a checked value of `1` and a class of `collapse`. Additional classes/ids can be applied by applying them inline to the mixin call.","attributes":null,"example":"include ../_k.pug\n+collapse()\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin collapse(name='collapse')\n  +checkbox({name,value:1,class:'collapse'})&attributes(attributes)","output":"<input class=\"collapse\" name=\"attr_collapse\" value=\"1\" type=\"checkbox\" title=\"@{collapse}\"/>"},{"meta":{"name":"radio","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that specifies `radio` as the input type. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+radio({name:'my radio',value:1,checked:''})\n+radio({name:'my radio',value:2})\n+radio({name:'my radio',value:3})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin radio(obj)\n  - obj.type = 'radio';\n  +input(obj)","output":"<input name=\"attr_my_radio\" value=\"1\" checked=\"\" type=\"radio\" title=\"@{my_radio}\"/>\n<input name=\"attr_my_radio\" value=\"2\" type=\"radio\" title=\"@{my_radio}\"/>\n<input name=\"attr_my_radio\" value=\"3\" type=\"radio\" title=\"@{my_radio}\"/>"},{"meta":{"name":"number","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that makes a number input. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+number({name:'my number',class:'some-class',trigger:{affects:['other_attribute']}})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin number(obj)\n  - obj.type = 'number';\n  +input(obj)","output":"<input class=\"some-class\" name=\"attr_my_number\" type=\"number\" title=\"@{my_number}\"/>"},{"meta":{"name":"range","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that makes a range input. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+range({name:'my range',class:'some-class'})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin range(obj)\n  - obj.type = 'range';\n  +input(obj)","output":"<input class=\"some-class\" name=\"attr_my_range\" type=\"range\" title=\"@{my_range}\"/>"},{"meta":{"name":"hidden","arguments":[{"name":"inputObj","description":"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],"description":"Alias for {@link input} that makes a hidden input. See {@link input} for arguments.","attributes":null,"example":"include ../_k.pug\n+hidden({name:'my hidden attribute',class:'some-class',trigger:{triggeredFuncs:['someFunction']}})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin hidden(obj)\n  - obj.type = 'hidden';\n  +input(obj)","output":"<input class=\"some-class\" name=\"attr_my_hidden_attribute\" type=\"hidden\" title=\"@{my_hidden_attribute}\"/>"},{"meta":{"name":"textarea","description":"A mixin to create K-scaffold compatible textareas.","arguments":[{"name":"textObj","description":"See {@link input} for information on valid properties of the textObj.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} textObj - See {@link input} for information on valid properties of the textObj."}],"attributes":null,"example":"include ../_k.pug\n+textarea({name:'my textarea',class:'some-class',trigger:{affects:['an_attribute']}})\n"},"file":"lib/attribute_holders/_inputs.pug","source":"mixin textarea(obj)\n  - checkKUse();\n  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;\n  - obj.name = attrName(obj.name);\n  - obj.title = obj.title || attrTitle(obj.name);\n  - obj.name = `attr_${obj.name}`;\n  - addFieldToFieldsetObj(obj);\n  - storeTrigger(obj);\n  - const elementObj = makeElementObj(obj);\n  textarea&attributes(elementObj)","output":"<textarea class=\"some-class\" name=\"attr_my_textarea\" title=\"@{my_textarea}\"></textarea>"},{"meta":{"name":"select","arguments":[{"name":"selectObj","description":"The object describing the select","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} selectObj - The object describing the select"},{"name":"block","description":"The content within the select","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The content within the select"}],"description":"A mixin to create a select element. Also provides an option mixin that is restricted to only work within the select. Trigger objects can be passed as arguments on the select call itself or on the default selected option. Uses K-scaffold global variables to control how option mixins within the select's block behave.","example":"include ../_k.pug\n+select({name:'my select'})\n  +option({value:'a value','data-i18n':'a translation key',trigger:{affects:['some_attribute']}})\n  +option({value:'value 2','data-i18n':'translation 2'})\n  +option({value:'value 3'})\n  |Some Text we include via the option's block\n|\n|\n+select({\n  name:'my select',\n  trigger:{\n    affects:['some_attribute']\n  }\n})\n  +option({value:'a value','data-i18n':'a translation key'})\n  +option({value:'value 2','data-i18n':'translation 2'})\n  +option({value:'value 3'})\n    |Some Text we include via the option's block\n"},"file":"lib/attribute_holders/_selects.pug","source":"mixin select(obj)\n  - checkKUse();\n  -\n    obj.class = obj.class ?\n      replaceProblems(obj.class) :\n      undefined;\n  - obj.name = attrName(obj.name);\n  - obj.title = obj.title || attrTitle(obj.name);\n  - obj.name = `attr_${obj.name}`;\n  - addFieldToFieldsetObj(obj);\n\n  //- Initialize the object that will be passed to the cascade\n  - const triggerObj = {...obj,type:'select'};\n  - const options = [];\n  \n  mixin option(optObj)\n    -\n      optObj.class = optObj.class ?\n        replaceProblems(optObj.class) :\n        undefined;\n    -\n      const pushObj = {\n        obj:optObj,\n        attributes: attributes || {}\n      };\n    if block\n      - pushObj.block = block;\n    - options.push(pushObj);\n\n\n  if !block\n    option(value='!!! Error: empty select !!!')\n  else\n    - block();\n    - const selObj = makeElementObj(obj);\n    select&attributes(selObj)&attributes(attributes)\n      each o in options\n        if o.hasOwnProperty('selected') && o.hasOwnProperty('value')\n          - triggerObj.value = o.value;\n          if o.trigger && !triggerObj.trigger\n            - triggerObj.trigger = o.trigger;\n        - const elemObj = makeElementObj(o.obj);\n        option&attributes(elemObj)&attributes(o.attributes)\n    - storeTrigger(triggerObj);","output":"Some Text we include via the option's block<select name=\"attr_my_select\" title=\"@{my_select}\">\n  <option value=\"a value\" data-i18n=\"a translation key\"></option>\n  <option value=\"value 2\" data-i18n=\"translation 2\"></option>\n  <option value=\"value 3\"></option>\n</select>\n\n<select name=\"attr_my_select\" title=\"@{my_select}\">\n  <option value=\"a value\" data-i18n=\"a translation key\"></option>\n  <option value=\"value 2\" data-i18n=\"translation 2\"></option>\n  <option value=\"value 3\"></option>\n</select>"},{"meta":{"name":"fieldset","description":"A mixin that creates a fieldset for the creation of a repeating section. The mixin prefixes the name with `repeating_` and replaces problem characters (e.g. spaces are replaced with dashes). Additionally, the auto-generated title properties from the K-scaffold\\'s mixins will include the proper repeating section information.","arguments":[{"name":"name","description":"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{"name":"trigger","description":"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{"name":"addClass","description":"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],"attributes":null,"example":"include ../_k.pug\n//A basic fieldset declaration with a trigger\n+fieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']}\n})\n  +text({name:'name'})\n\n//A Fieldset with an added class\n+fieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']},\n  addClass:'some-class'\n})\n  +text({name:'name'})\n"},"file":"lib/fieldsets/_fieldsets.pug","source":"mixin fieldset({name,trigger,addClass})\n  - if (typeof name === 'undefined') { throw new Error(\"+fieldset() mixin require a name\"); }\n  -\n    name = repeatsIgnoreSystemPrefix || !getSystemPrefix() ?\n      name :\n      `${getSystemPrefix()} ${name}`;\n  - name = name.replace(/\\s+/g,'-');\n  - let section = `repeating_${name}`;\n  - k.repeatingPrefix = `${section}_$X_`;\n  - createFieldsetObj(section)\n  if trigger\n    - storeTrigger({name:section,type:'fieldset',trigger})\n  if addClass\n    span(hidden=\"\" class=addClass)\n  fieldset(class=`${section}`)\n    block\n  - k.repeatingPrefix = '';","output":"<!--A basic fieldset declaration with a trigger-->\n<fieldset class=\"repeating_fieldset\">\n  <input name=\"attr_name\" type=\"text\" title=\"@{repeating_fieldset_$X_name}\"/>\n</fieldset>\n<!--A Fieldset with an added class-->\n<span class=\"some-class\" hidden=\"\"></span>\n<fieldset class=\"repeating_fieldset\">\n  <input name=\"attr_name\" type=\"text\" title=\"@{repeating_fieldset_$X_name}\"/>\n</fieldset>"},{"meta":{"name":"customControlFieldset","description":"Alias for {@link fieldset} that creates to custom action buttons to add/remove rows to the repeating section. Useful when you need to trigger a sheetworker when a row is added. This also prevents the occassional error of a new row disappearing immediately after the user has clicked the button to create one. Proper use of this will require css to hide the default buttons that fieldsets create automatically. Note that currently this assumes the existence of an addItem and editSection sheetworker function.","arguments":[{"name":"name","description":"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{"name":"trigger","description":"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{"name":"addClass","description":"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],"attributes":null,"example":"include ../_k.pug\n//A basic customControlfieldset declaration with a trigger\n+customControlFieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']}\n})\n\n//A customControlfieldset with an added class\n+customControlFieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']},\n  addClass:'some-class'\n})\n"},"file":"lib/fieldsets/_fieldsets.pug","source":"mixin customControlFieldset({name,trigger,addClass})\n  - if (typeof name === 'undefined') { throw new Error(\"+customControlFieldset() mixin require a name\"); }\n  - const prefixHolder = setSystemPrefix();\n  -\n    buttonName = prefixHolder ?\n      `${prefixHolder} ${name}`:\n      name;\n  +action({name:`add ${buttonName}`,class:'repcontrol-button repcontrol-button--add',trigger:{listenerFunc:'addItem'}})\n  - setSystemPrefix(prefixHolder);\n  +fieldset({name,trigger,addClass})\n    block","output":"<!--A basic customControlfieldset declaration with a trigger-->\n<button class=\"repcontrol-button repcontrol-button--add\" name=\"act_add-fieldset\" type=\"action\" title=\"%{add-fieldset}\"></button>\n<fieldset class=\"repeating_fieldset\"></fieldset>\n<!--A customControlfieldset with an added class-->\n<button class=\"repcontrol-button repcontrol-button--add\" name=\"act_add-fieldset\" type=\"action\" title=\"%{add-fieldset}\"></button>\n<span class=\"some-class\" hidden=\"\"></span>\n<fieldset class=\"repeating_fieldset\"></fieldset>"},{"meta":{"name":"repeating_section","description":"A mixin that creates a section element with an h2, a space for column headers, and a {@link customcontrolfieldset} which can be styled to fit those column headers. The h2 labels the section via `aria-labelledby`.","arguments":[{"name":"name","description":"The name of the section as per {@link fieldset}. This name will also be added to the section's class list as `repeating-container--NAME`. If no id argument is passed, this is also used as the id of the section.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} name - The name of the section as per {@link fieldset}. This name will also be added to the section's class list as `repeating-container--NAME`. If no id argument is passed, this is also used as the id of the section."},{"name":"header","description":"The translation key for the h2 element in the section","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} header - The translation key for the h2 element in the section"},{"name":"columnArr","description":"Array of translation keys to use as column headers. These are added as h5's.","type":"array","default":null,"nullable":false,"optional":false,"original":"{array} columnArr - Array of translation keys to use as column headers. These are added as h5's."},{"name":"id","description":"An id to use for the section element.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} id - An id to use for the section element."}],"attributes":null,"example":"include ../_k.pug\n+repeating_section('attacks','weapons',['name','bonus','damage','property'],'atk')\n  +text({name:'name'})\n  +number({name:'bonus'})\n  +text({name:'damage'})\n  +text({name:'properties'})\n"},"file":"lib/fieldsets/_fieldsets.pug","source":"mixin repeating_section(name,header,columnArr,id)\n  - if (typeof name === 'undefined') { throw new Error(\"+repeating_section() mixin require a name\"); }\n  section(class=`repeating-container--${name} repeating-container section` id=`${(id||name).replace(/\\s+/g,'-')}`)\n    if header\n      h2(data-i18n=header)\n    if columnArr\n      .repeat-columns\n        each head in columnArr\n          h5(data-i18n=head)\n    +customControlFieldset({name: name})\n      block","output":"<section class=\"repeating-container--attacks repeating-container section\" id=\"atk\">\n  <h2 data-i18n=\"weapons\"></h2>\n    <div class=\"repeat-columns\">\n      <h5 data-i18n=\"name\"></h5>\n        <h5 data-i18n=\"bonus\"></h5>\n          <h5 data-i18n=\"damage\"></h5>\n            <h5 data-i18n=\"property\"></h5></div>\n            <button class=\"repcontrol-button repcontrol-button--add\" name=\"act_add-attacks\" type=\"action\" title=\"%{add-attacks}\"></button>\n            <fieldset class=\"repeating_attacks\">\n              <input name=\"attr_name\" type=\"text\" title=\"@{repeating_attacks_$X_name}\"/>\n              <input name=\"attr_bonus\" type=\"number\" title=\"@{repeating_attacks_$X_bonus}\"/>\n              <input name=\"attr_damage\" type=\"text\" title=\"@{repeating_attacks_$X_damage}\"/>\n              <input name=\"attr_properties\" type=\"text\" title=\"@{repeating_attacks_$X_properties}\"/>\n            </fieldset>\n          </section>"},{"meta":{"name":"inlineFieldset","description":"An alias for {@link fieldset} that creates a fieldset with an added class that can be easily hooked into via CSS to style the fieldset for inline display.","arguments":[{"name":"name","description":"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{"name":"trigger","description":"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{"name":"addClass","description":"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],"attributes":null,"example":"include ../_k.pug\n+inlineFieldset({\n  name:'fieldset',\n  trigger:{triggeredFuncs:['doWhenRemoved']},\n  addClass:'some-class'\n})\n"},"file":"lib/fieldsets/_fieldsets.pug","source":"mixin inlineFieldset({name,trigger,addClass})\n  - if (typeof name === 'undefined') { throw new Error(\"+inlineFieldset() mixin require a name\"); }\n  - addClass = addClass ? `${addClass} inline-fieldset` : 'inline-fieldset';\n  - varObjects.inlineFieldsets = varObjects.inlineFieldsets || [];\n  - varObjects.inlineFieldsets.push(name);\n  \n  +action({name:`add ${name}`,class:'repcontrol-button repcontrol-button--add repcontrol-button--inline',trigger:{listenerFunc:'sectionInteract'}})\n  +fieldset({name,trigger,addClass})\n    +radio({name:'display state',class:'display-control',value:'short-display',hidden:''})\n    .inline-fieldset__summary.display-target\n      label.pointer\n        +checkbox({name:'collapse',value:1,hidden:'',trigger:{triggeredFuncs:['collapseSection']}})\n        +span({name:'name',class:'inline-fieldset__summary__text'})\n    +radio({name:'display state',class:'display-control',value:'display',checked:'',hidden:''})\n    .inline-fieldset__detail.display-target\n      +collapse\n      block","output":"<button class=\"repcontrol-button repcontrol-button--add repcontrol-button--inline\" name=\"act_add-fieldset\" type=\"action\" title=\"%{add-fieldset}\"></button>\n<span class=\"some-class inline-fieldset\" hidden=\"\"></span>\n<fieldset class=\"repeating_fieldset\">\n  <input class=\"display-control\" name=\"attr_display_state\" value=\"short-display\" hidden=\"\" type=\"radio\" title=\"@{repeating_fieldset_$X_display_state}\"/>\n  <div class=\"inline-fieldset__summary display-target\">\n    <label class=\"pointer\">\n      <input name=\"attr_collapse\" value=\"1\" hidden=\"\" type=\"checkbox\" title=\"@{repeating_fieldset_$X_collapse}\"/>\n      <span class=\"inline-fieldset__summary__text\" name=\"attr_name\" title=\"@{repeating_fieldset_$X_name}\"></span>\n    </label>\n  </div>\n  <input class=\"display-control\" name=\"attr_display_state\" value=\"display\" checked=\"\" hidden=\"\" type=\"radio\" title=\"@{repeating_fieldset_$X_display_state}\"/>\n  <div class=\"inline-fieldset__detail display-target\">\n    <input class=\"collapse\" name=\"attr_collapse\" value=\"1\" type=\"checkbox\" title=\"@{repeating_fieldset_$X_collapse}\"/>\n  </div>\n</fieldset>"},{"meta":{"name":"button-label","description":"A mixin to create a combined button and input that are within the same container. Similar to {@link input-label}, but does not use a label.","arguments":[{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"buttonObj","description":"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{"name":"divObj","description":"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],"attributes":null,"example":"include ../_k.pug\n+button-label({\n  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},\n  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},\n  divObj:{class:'strength'}\n})\n"},"file":"lib/labels/_labels.pug","source":"mixin button-label({inputObj,buttonObj,divObj})\n  if divObj\n    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;\n  - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;\n  - buttonObj.class = buttonObj.class ? replaceProblems(buttonObj.class) : undefined;\n  - inputObj.name = inputObj.name.replace(/\\s+/g,'_');\n  - buttonObj.name = (buttonObj.name || inputObj.name).replace(/\\s+/g,'_');\n  .input-label.input-label--button&attributes(divObj)\n    - inputObj.class = inputObj.class ? `${inputObj.class} input-label__input` : 'input-label__input';\n    if spanObj\n      - buttonObj.class = buttonObj.class ? `${buttonObj.class} input-label__text` : 'input-label__text';\n    +button(buttonObj)\n    +input(inputObj)","output":"<div class=\"input-label input-label--button strength\">\n  <button name=\"roll_strength_roll\" type=\"roll\" value=\"/r 1d20+@{strength}\" title=\"%{strength_roll}\"></button>\n  <input class=\"underlined input-label__input\" name=\"attr_strength\" type=\"number\" value=\"10\" title=\"@{strength}\"/>\n</div>"},{"meta":{"name":"roller-label","description":"Similar to the construction created by {@link button-label}, except that it creates a {@link roller} construction instead of just a straight button.","arguments":[{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"buttonObj","description":"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{"name":"divObj","description":"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],"attributes":null,"example":"include ../_k.pug\n+roller-label({\n  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},\n  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},\n  divObj:{class:'strength'}\n})\n"},"file":"lib/labels/_labels.pug","source":"mixin roller-label({inputObj,buttonObj,divObj})\n  +rollerExtras(buttonObj)\n    +button-label({inputObj,buttonObj,divObj})","output":"<div class=\"input-label input-label--button strength\">\n  <button class=\"roller\" name=\"roll_strength_roll\" type=\"roll\" value=\"@{strength_action}\" title=\"%{strength_roll}\"></button>\n  <input class=\"underlined input-label__input\" name=\"attr_strength\" type=\"number\" value=\"10\" title=\"@{strength}\"/>\n</div>\n<button name=\"act_strength-action\" hidden=\"\" type=\"action\" title=\"%{strength-action}\"></button>\n<input name=\"attr_strength_action\" type=\"hidden\" title=\"@{strength_action}\"/>"},{"meta":{"name":"action-label","description":"Similar to the construction created by {@link button-label}, except that it specifcally creates an [action button](https://wiki.roll20.net/Button#Action_Button) as per {@link action}.","arguments":[{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"buttonObj","description":"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{"name":"divObj","description":"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],"attributes":null,"example":"include ../_k.pug\n+roller-label({\n  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},\n  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},\n  divObj:{class:'strength'}\n})\n"},"file":"lib/labels/_labels.pug","source":"mixin action-label({inputObj,buttonObj,divObj})\n  - buttonObj.type = 'action';\n  +button-label({inputObj,buttonObj,divObj})","output":"<div class=\"input-label input-label--button strength\">\n  <button class=\"roller\" name=\"roll_strength_roll\" type=\"roll\" value=\"@{strength_action}\" title=\"%{strength_roll}\"></button>\n  <input class=\"underlined input-label__input\" name=\"attr_strength\" type=\"number\" value=\"10\" title=\"@{strength}\"/>\n</div>\n<button name=\"act_strength-action\" hidden=\"\" type=\"action\" title=\"%{strength-action}\"></button>\n<input name=\"attr_strength_action\" type=\"hidden\" title=\"@{strength_action}\"/>"},{"meta":{"name":"select-label","description":"Similar to the construction created by {@link input-label}, except that the input is replaced with a select.","arguments":[{"name":"label","description":"The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} label - The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key"},{"name":"inputObj","description":"An object describing the select to be paired with the button. This is the same object that you would pass to {@link select}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the select to be paired with the button. This is the same object that you would pass to {@link select}."},{"name":"divObj","description":"An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [divObj] - An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all."},{"name":"spanObj","description":"An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [spanObj] - An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}."},{"name":"block","description":"The mixin uses the pug block as the content of the select.","type":"block","default":null,"nullable":false,"optional":false,"original":"{block} block - The mixin uses the pug block as the content of the select."}],"attributes":null,"example":"include ../_k.pug\n+select-label({\n  label:'Whisper to GM',\n  inputObj:{name:'whisper'},\n  divObj:{class:'div-class'},\n  spanObj:{class:'span-class'}\n})\n  +option({value:'','data-i18n':'never',selected:''})\n  +option({value:'/w gm ','data-i18n':'always'})\n"},"file":"lib/labels/_labels.pug","source":"mixin select-label({label,inputObj,divObj,spanObj})\n  if divObj\n    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;\n  if inputObj\n    - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;\n  if spanObj\n    - spanObj.class = spanObj.class ? replaceProblems(spanObj.class) : undefined;\n  label.input-label&attributes(divObj)\n    - inputObj.name = inputObj.name.replace(/\\s+/g,'_');\n    - inputObj.class = inputObj.class ? `${inputObj.class} input-label__input` : 'input-label__input';\n    if spanObj\n      - spanObj.class = spanObj.class ? `${spanObj.class} input-label__text` : 'input-label__text';\n    span(data-i18n=label)&attributes(spanObj)\n    +select(inputObj)\n      block","output":"<label class=\"input-label div-class\">\n  <span class=\"span-class input-label__text\" data-i18n=\"Whisper to GM\"></span>\n  <select class=\"input-label__input\" name=\"attr_whisper\" title=\"@{whisper}\">\n    <option value=\"\" data-i18n=\"never\" selected=\"\"></option>\n    <option value=\"/w gm \" data-i18n=\"always\"></option>\n  </select>\n</label>"},{"meta":{"name":"input-label","description":null,"arguments":[{"name":"label","description":"The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} label - The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key"},{"name":"inputObj","description":"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{"name":"divObj","description":"An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [divObj] - An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all."},{"name":"spanObj","description":"An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}.","type":"object","default":null,"nullable":false,"optional":true,"original":"{object} [spanObj] - An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}."}],"attributes":null,"example":"include ../_k.pug\n+input-label({\n  label:'strength',\n  inputObj:{name:'strength',type:'number'},\n  divObj:{class:'div-class'},\n  spanObj:{class:'span-class'}\n})\n"},"file":"lib/labels/_labels.pug","source":"mixin input-label({label,inputObj,divObj,spanObj})\n  if divObj\n    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;\n  if inputObj\n    - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;\n  if spanObj\n    - spanObj.class = spanObj.class ? replaceProblems(spanObj.class) : undefined;\n  label.input-label&attributes(divObj)\n    - inputObj.name = inputObj.name.replace(/\\s+/g,'_');\n    - inputObj.class = inputObj.class ? `${inputObj.class} input-label__input` : 'input-label__input';\n    if spanObj\n      - spanObj.class = spanObj.class ? `${spanObj.class} input-label__text` : 'input-label__text';\n    span(data-i18n=label)&attributes(spanObj)\n    +input(inputObj)","output":"<label class=\"input-label div-class\">\n  <span class=\"span-class input-label__text\" data-i18n=\"strength\"></span>\n  <input class=\"input-label__input\" name=\"attr_strength\" type=\"number\" title=\"@{strength}\"/>\n</label>"},{"meta":{"name":"headedTextarea","description":"Creates a construction for pairing a header with a textarea. Currently is locked to creating an `h3`.  This mixin also accepts classes and IDs appended directly to it (see the second example)","arguments":[{"name":"textObj","description":"The object describing the textarea as per {@link textarea}","type":"object","default":null,"nullable":false,"optional":false,"original":"{object} textObj - The object describing the textarea as per {@link textarea}"},{"name":"header","description":"The `data-i18n` translation key to use for the header","type":"string","default":null,"nullable":false,"optional":false,"original":"{string} header - The `data-i18n` translation key to use for the header"}],"attributes":null,"example":"include ../_k.pug\n+headedTextarea({textObj:{name:'character description','data-i18n-placeholder':'The description of your character'},header:'description'})\n//With class appended to the mixin itself\n+headedTextarea({textObj:{name:'character description','data-i18n-placeholder':'The description of your character'},header:'description'}).character-description\n"},"file":"lib/labels/_labels.pug","source":"mixin headedTextarea({textObj,header})\n  .headed-textarea&attributes(attributes)\n    - textObj.class = textObj.class ? `${textObj.class} headed-textarea__textarea` : 'headed-textarea__textarea';\n    h3(data-i18n=header class='headed-textarea__header')\n    +textarea(textObj)","output":"<div class=\"headed-textarea\">\n  <h3 class=\"headed-textarea__header\" data-i18n=\"description\"></h3>\n    <textarea class=\"headed-textarea__textarea\" name=\"attr_character_description\" data-i18n-placeholder=\"The description of your character\" title=\"@{character_description}\"></textarea>\n  </div>\n  <!--With class appended to the mixin itself-->\n  <div class=\"headed-textarea character-description\">\n    <h3 class=\"headed-textarea__header\" data-i18n=\"description\"></h3>\n      <textarea class=\"headed-textarea__textarea\" name=\"attr_character_description\" data-i18n-placeholder=\"The description of your character\" title=\"@{character_description}\"></textarea>\n    </div>"},{"meta":{"name":"modalButton","description":"One of the mixin to create modal window (i.e. pop-up). This makes a label that, when clicked, will trigger the display of same-named modal {@link modalWindow}.","arguments":[{"name":"name","description":"The name of the modal window this button is for.","type":"string","default":null,"nullable":false,"optional":true,"original":"{string} [name] - The name of the modal window this button is for."}],"attributes":null,"example":"include ../_k.pug\n// Tabs that are persistent (default) and have the background tab as the default tab\n+modalButton({name: \"settings\"})\n    // Use a nice google-font (will need a suitable SCSS import)\n    span.material-icons settings\n    \n+modalWindow({name: \"settings\"})\n    p Content of the settings modal window\n"},"file":"lib/modal/_modal.pug","source":"mixin modalButton({name})\n    //- Cleanup the name like an action button, i.e. with '-', because it is used in CSS\n    - name = actionButtonName(replaceProblems(name));\n    - attributes.class = attributes.class ? ` ${replaceProblems(attributes.class)}` : '';\n    //- Use 'kmodal' instead of modal, because Roll20 already uses a 'modal' class\n    - attributes.class = `kmodal kmodal--${name} kmodal__button kmodal--${name}__button${attributes.class}`;\n    - attributes.for = `kmodal-${name}`;\n    label&attributes(attributes)\n        block","output":"<!-- Tabs that are persistent (default) and have the background tab as the default tab-->\n<label class=\"kmodal kmodal--settings kmodal__button kmodal--settings__button\" for=\"kmodal-settings\">\n<!-- Use a nice google-font (will need a suitable SCSS import)-->\n<span class=\"material-icons\">\n  settings\n</span>\n</label>\n<input class=\"kmodal kmodal--settings kmodal__checkbox kmodal--settings__checkbox\" type=\"checkbox\" id=\"kmodal-settings\"/>\n<div class=\"kmodal kmodal__outer kmodal--settings kmodal--settings__outer\">\n<label class=\"kmodal kmodal__background kmodal--settings kmodal--settings__background\" for=\"kmodal-settings\"></label>\n<div class=\"kmodal kmodal__inner kmodal--settings kmodal--settings__inner\">\n  <label class=\"kmodal kmodal__close kmodal--settings kmodal--settings__close\" for=\"kmodal-settings\"></label>\n  <div class=\"kmodal kmodal__content kmodal--settings kmodal--settings__content\">\n    <p>\n      Content of the settings modal window\n    </p>\n  </div>\n</div>\n</div>"},{"meta":{"name":"modalWindow","description":"One of the mixin to create modal window (i.e. pop-up). This makes the window that will be displayed when the corrresponding {@link modalButton} is clicked.","arguments":[{"name":"name","description":"The name of the modal window","type":"string","default":null,"nullable":false,"optional":true,"original":"{string} [name] - The name of the modal window"}],"attributes":null,"example":"include ../_k.pug\n// Tabs that are persistent (default) and have the background tab as the default tab\n+modalButton({name: \"settings\"})\n    // Use a nice google-font (will need a suitable SCSS import)\n    span.material-icons settings\n    \n+modalWindow({name: \"settings\"})\n    p Content of the settings modal window\n"},"file":"lib/modal/_modal.pug","source":"mixin modalWindow({name})\n    //- Cleanup the name like an action button, i.e. with '-', because it is used in CSS\n    - name = actionButtonName(replaceProblems(name))\n    - attributes.class = attributes.class ? ` ${replaceProblems(attributes.class)}` : '';\n        //- Use 'kmodal' instead of modal, because Roll20 already uses a 'modal' class\n    - attributes.class = `kmodal kmodal__outer kmodal--${name} kmodal--${name}__outer${attributes.class}`;\n        \n    input(class=`kmodal kmodal--${name} kmodal__checkbox kmodal--${name}__checkbox` type=\"checkbox\" id=`kmodal-${name}`)\n    div&attributes(attributes)\n        label(class=`kmodal kmodal__background kmodal--${name} kmodal--${name}__background` for=`kmodal-${name}`)\n        div(class=`kmodal kmodal__inner kmodal--${name} kmodal--${name}__inner`)\n            label(class=`kmodal kmodal__close kmodal--${name} kmodal--${name}__close` for=`kmodal-${name}`)\n            div(class=`kmodal kmodal__content kmodal--${name} kmodal--${name}__content`)\n                block","output":"<!-- Tabs that are persistent (default) and have the background tab as the default tab-->\n<label class=\"kmodal kmodal--settings kmodal__button kmodal--settings__button\" for=\"kmodal-settings\">\n<!-- Use a nice google-font (will need a suitable SCSS import)-->\n<span class=\"material-icons\">\n  settings\n</span>\n</label>\n<input class=\"kmodal kmodal--settings kmodal__checkbox kmodal--settings__checkbox\" type=\"checkbox\" id=\"kmodal-settings\"/>\n<div class=\"kmodal kmodal__outer kmodal--settings kmodal--settings__outer\">\n<label class=\"kmodal kmodal__background kmodal--settings kmodal--settings__background\" for=\"kmodal-settings\"></label>\n<div class=\"kmodal kmodal__inner kmodal--settings kmodal--settings__inner\">\n  <label class=\"kmodal kmodal__close kmodal--settings kmodal--settings__close\" for=\"kmodal-settings\"></label>\n  <div class=\"kmodal kmodal__content kmodal--settings kmodal--settings__content\">\n    <p>\n      Content of the settings modal window\n    </p>\n  </div>\n</div>\n</div>"},{"meta":{"name":"modalContainer","description":"One of the mixin to create modal window (i.e. pop-up). This reduces the scope of a {@link modalWindow}. By default, the window covers all of the character sheet. Inside a modal container, it covers at most the container.","arguments":null,"attributes":null,"example":"include ../_k.pug\n// Tabs that are persistent (default) and have the background tab as the default tab\n+modalButton({name: \"settings\"})\n    // Use a nice google-font (will need a suitable SCSS import)\n    span.material-icons settings\n\n+modalContainer\n    +modalWindow({name: \"settings\"})\n        p Content of the settings modal window\n"},"file":"lib/modal/_modal.pug","source":"mixin modalContainer()\n    .kmodal.kmodal__container&attributes(attributes)\n        block","output":"<!-- Tabs that are persistent (default) and have the background tab as the default tab-->\n<label class=\"kmodal kmodal--settings kmodal__button kmodal--settings__button\" for=\"kmodal-settings\">\n<!-- Use a nice google-font (will need a suitable SCSS import)-->\n<span class=\"material-icons\">\n  settings\n</span>\n</label>\n<div class=\"kmodal kmodal__container\">\n<input class=\"kmodal kmodal--settings kmodal__checkbox kmodal--settings__checkbox\" type=\"checkbox\" id=\"kmodal-settings\"/>\n<div class=\"kmodal kmodal__outer kmodal--settings kmodal--settings__outer\">\n  <label class=\"kmodal kmodal__background kmodal--settings kmodal--settings__background\" for=\"kmodal-settings\"></label>\n  <div class=\"kmodal kmodal__inner kmodal--settings kmodal--settings__inner\">\n    <label class=\"kmodal kmodal__close kmodal--settings kmodal--settings__close\" for=\"kmodal-settings\"></label>\n    <div class=\"kmodal kmodal__content kmodal--settings kmodal--settings__content\">\n      <p>\n        Content of the settings modal window\n      </p>\n    </div>\n  </div>\n</div>\n</div>"},{"meta":{"name":"script","description":"Creates a generic [Roll20 script block](https://wiki.roll20.net/Building_Character_Sheets#JavaScript_2) for use with the sheetworker system.","arguments":null,"attributes":null,"example":"include ../_k.pug\n+script\n"},"file":"lib/scripts/_scripts.pug","source":"mixin script\n  script(type='text/worker')\n    block","output":"<script type=\"text/worker\"></script>"},{"meta":{"name":"kscript","description":"Similar to {@link script}, but includes the K-scaffold\\'s javascript function library.","arguments":null,"attributes":null,"example":"include ../_k.pug\n+kscript\n"},"file":"lib/scripts/_scripts.pug","source":"mixin kscript\n  - scriptUsed = true;\n  +script\n    |const k = (function(){\n    |const kFuncs = {};\n    //- The below declarations import variables from the pug file and mixins into the sheetworker code\n    - const propArray = ['cascades','repeatingSectionDetails','persistentTabs'];\n    each prop in propArray\n      |\n      |const !{prop} = !{JSON.stringify(varObjects[prop])};\n      |\n      |kFuncs.!{prop} = !{prop};\n      - delete varObjects[prop];\n    |\n    |\n    include kvariables.js\n    include utility.js\n    include attribute_proxy.js\n    include accessSheet.js\n    include parse_cascade.js\n    include sheetworker_aliases.js\n    include listeners.js\n    include ../tabs/tabs.js\n    |\n    |return kFuncs;\n    |}());\n    |\n    each content,prop in varObjects\n      |\n      if typeof content === 'object'\n        |const !{prop} = !{JSON.stringify(content)};\n      else\n        |let !{prop} = !{content};\n      |\n    |\n    block\n    each jsBlock in k.scriptBlocks\n      |\n      |\n      - jsBlock();","output":"<script type=\"text/worker\">\n  const k = (function(){\nconst kFuncs = {};\nconst cascades = {\"attr_character_name\":{\"name\":\"character_name\",\"type\":\"text\",\"defaultValue\":\"\",\"affects\":[],\"triggeredFuncs\":[\"setActionCalls\"],\"listenerFunc\":\"accessSheet\",\"listener\":\"change:character_name\"},\"attr_character_description\":{\"name\":\"character_description\",\"type\":\"span\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_image\":{\"name\":\"my_image\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_attribute_backed_span\":{\"calculation\":\"calculateAttribute\",\"name\":\"attribute_backed_span\",\"type\":\"span\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"act_my_button\":{\"triggeredFuncs\":[\"doSomethingOnClick\"],\"name\":\"my_button\",\"listener\":\"clicked:my_button\",\"listenerFunc\":\"accessSheet\",\"type\":\"action\"},\"act_my-button\":{\"triggeredFuncs\":[\"doSomethingOnClick\"],\"name\":\"my-button\",\"listener\":\"clicked:my-button\",\"listenerFunc\":\"accessSheet\",\"type\":\"action\"},\"act_my-button-action\":{\"triggeredFuncs\":[\"doSomethingOnClick\"],\"name\":\"my-button-action\",\"listener\":\"clicked:my-button-action\",\"listenerFunc\":\"accessSheet\",\"type\":\"action\"},\"attr_my_button_action\":{\"name\":\"my_button_action\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_drop_name\":{\"triggeredFuncs\":[\"handleCompendiumDrop\"],\"name\":\"drop_name\",\"listener\":\"change:drop_name\",\"listenerFunc\":\"accessSheet\",\"type\":\"hidden\",\"defaultValue\":\"\",\"affects\":[]},\"attr_drop_data\":{\"name\":\"drop_data\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_prefix_drop_name\":{\"triggeredFuncs\":[\"handleCompendiumDrop\"],\"name\":\"prefix_drop_name\",\"listener\":\"change:prefix_drop_name\",\"listenerFunc\":\"accessSheet\",\"type\":\"hidden\",\"defaultValue\":\"\",\"affects\":[]},\"attr_prefix_drop_data\":{\"name\":\"prefix_drop_data\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_prefix_drop_category\":{\"name\":\"prefix_drop_category\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_radio\":{\"name\":\"my_radio\",\"type\":\"hidden\",\"defaultValue\":0,\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_attribute\":{\"affects\":[\"other_attribute\"],\"name\":\"my_attribute\",\"listener\":\"change:my_attribute\",\"listenerFunc\":\"accessSheet\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[]},\"attr_my_checkbox\":{\"name\":\"my_checkbox\",\"type\":\"checkbox\",\"defaultValue\":0,\"triggeredFuncs\":[],\"affects\":[]},\"attr_collapse\":{\"name\":\"collapse\",\"type\":\"checkbox\",\"defaultValue\":0,\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_number\":{\"affects\":[\"other_attribute\"],\"name\":\"my_number\",\"listener\":\"change:my_number\",\"listenerFunc\":\"accessSheet\",\"type\":\"number\",\"defaultValue\":0,\"triggeredFuncs\":[]},\"attr_my_range\":{\"name\":\"my_range\",\"type\":\"range\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_my_hidden_attribute\":{\"triggeredFuncs\":[\"someFunction\"],\"name\":\"my_hidden_attribute\",\"listener\":\"change:my_hidden_attribute\",\"listenerFunc\":\"accessSheet\",\"type\":\"hidden\",\"defaultValue\":\"\",\"affects\":[]},\"attr_my_textarea\":{\"affects\":[\"an_attribute\"],\"name\":\"my_textarea\",\"listener\":\"change:my_textarea\",\"listenerFunc\":\"accessSheet\",\"defaultValue\":\"\",\"triggeredFuncs\":[]},\"attr_my_select\":{\"name\":\"my_select\",\"type\":\"select\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[\"some_attribute\"],\"listener\":\"change:my_select\",\"listenerFunc\":\"accessSheet\"},\"fieldset_repeating_fieldset\":{\"triggeredFuncs\":[\"doWhenRemoved\"],\"name\":\"repeating_fieldset\",\"listener\":\"remove:repeating_fieldset\",\"listenerFunc\":\"accessSheet\",\"type\":\"fieldset\"},\"attr_repeating_fieldset_$X_name\":{\"name\":\"repeating_fieldset_$X_name\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"act_add-fieldset\":{\"listenerFunc\":\"addItem\",\"name\":\"add-fieldset\",\"listener\":\"clicked:add-fieldset\",\"type\":\"action\"},\"act_add-attacks\":{\"listenerFunc\":\"addItem\",\"name\":\"add-attacks\",\"listener\":\"clicked:add-attacks\",\"type\":\"action\"},\"attr_repeating_attacks_$X_name\":{\"name\":\"repeating_attacks_$X_name\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_repeating_attacks_$X_bonus\":{\"name\":\"repeating_attacks_$X_bonus\",\"type\":\"number\",\"defaultValue\":0,\"triggeredFuncs\":[],\"affects\":[]},\"attr_repeating_attacks_$X_damage\":{\"name\":\"repeating_attacks_$X_damage\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_repeating_attacks_$X_properties\":{\"name\":\"repeating_attacks_$X_properties\",\"type\":\"text\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_repeating_fieldset_$X_display_state\":{\"name\":\"repeating_fieldset_$X_display_state\",\"type\":\"radio\",\"defaultValue\":\"short-display\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_repeating_fieldset_$X_collapse\":{\"triggeredFuncs\":[\"collapseSection\"],\"name\":\"repeating_fieldset_$X_collapse\",\"listener\":\"change:repeating_fieldset:collapse\",\"listenerFunc\":\"accessSheet\",\"type\":\"checkbox\",\"defaultValue\":0,\"affects\":[]},\"attr_strength\":{\"affects\":[\"athletics\"],\"name\":\"strength\",\"listener\":\"change:strength\",\"listenerFunc\":\"accessSheet\",\"type\":\"number\",\"defaultValue\":10,\"triggeredFuncs\":[]},\"act_strength-action\":{\"listenerFunc\":\"initiateRoll\",\"name\":\"strength-action\",\"listener\":\"clicked:strength-action\",\"type\":\"action\"},\"attr_strength_action\":{\"name\":\"strength_action\",\"type\":\"hidden\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]},\"attr_whisper\":{\"name\":\"whisper\",\"type\":\"select\",\"defaultValue\":\"\",\"triggeredFuncs\":[],\"affects\":[]}};\n\nkFuncs.cascades = cascades;\nconst repeatingSectionDetails = [{\"section\":\"repeating_fieldset\",\"fields\":[\"name\",\"display_state\",\"collapse\"]},{\"section\":\"repeating_attacks\",\"fields\":[\"name\",\"bonus\",\"damage\",\"properties\"]}];\n\nkFuncs.repeatingSectionDetails = repeatingSectionDetails;\nconst persistentTabs = [];\n\nkFuncs.persistentTabs = persistentTabs;\n/**\n * The K-scaffold provides several variables to allow your scripts to tap into its information flow.\n * @namespace Sheetworkers.Variables\n */\n/**\n * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`\n * @memberof Variables\n * @var\n * @type {string}\n */\nlet sheetName = 'kScaffold Powered Sheet';\nkFuncs.sheetName = sheetName;\n/**\n\t* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`\n * @memberof Variables\n\t* @var\n\t* @type {number}\n\t*/\nlet version = 0;\nkFuncs.version = version;\n/**\n\t* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.\n * @memberof Variables\n\t* @var\n\t* @type {boolean}\n\t*/\nlet debugMode = false;\nkFuncs.debugMode = debugMode;\nconst funcs = {};\nkFuncs.funcs = funcs;\nconst updateHandlers = {};\nconst openHandlers = {};\nconst initialSetups = {};\nconst allHandlers = {};\nconst addFuncs = {};\n\nconst kscaffoldJSVersion = '1.0.0';\nconst kscaffoldPUGVersion = '1.0.0';\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.\n * @namespace Sheetworkers.Utilities\n * @alias Utilities\n */\n/**\n * Replaces problem characters to use a string as a regex\n * @memberof Utilities\n * @param {string} text - The text to replace characters in\n * @returns {string}\n * @example\n * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\n * console.log(textForRegex);// =>\n     \"\\.some thing\\[with characters\\]\"\n */\nconst sanitizeForRegex = function(text){\n  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');\n};\nkFuncs.sanitizeForRegex = sanitizeForRegex;\n\n/**\n * Converts a value to a number, it\\'s default value, or `0` if no default value passed.\n * @memberof Utilities\n * @param {string|number} val - Value to convert to a number\n * @param {number} def - The default value, uses 0 if not passed\n * @returns {number|undefined}\n * @example\n * const num = k.value('100');\n * console.log(num);// =>\n       100\n */\nconst value = function(val,def){\n  const convertVal = +val;\n  if(def !== undefined && isNaN(def)){\n    throw(`K-scaffold Error: invalid default for value(). Default: ${def}`);\n  }\n  return convertVal === 0 ?\n    convertVal :\n    (+val||def||0);\n};\nkFuncs.value = value;\n\n/**\n * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.\n * @memberof Utilities\n * @param {string} string - The string to parse\n * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute\n * @returns {string[]}\n * @example\n * //Extract info from a full repeating name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\n * console.log(section);// =>\n         \"repeating_equipment\"\n * console.log(rowID);// =>\n           \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n             \"name\"\n * \n * //Extract info from just a row name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\n * console.log(section);// =>\n               \"repeating_equipment\"\n * console.log(rowID);// =>\n                 \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n                   undefined\n */\nconst parseRepeatName = function(string){\n  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);\n  match.shift();\n  return match;\n};\nkFuncs.parseRepeatName = parseRepeatName;\n\n/**\n * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n * \n * Aliases: `k.parseClickTrigger`\n * @memberof Utilities\n * @param {string} string The triggerName property of the\n * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`\n * @returns {string[]}\n * @example\n * //Parse a non repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\n * console.log(section);// =>\n                     undefined\n * console.log(rowID);// =>\n                       undefined\n * console.log(attrName);// =>\n                         \"some-button\"\n * \n * //Parse a repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                           \"repeating_attack\"\n * console.log(rowID);// =>\n                             \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                               \"some-button\"\n * \n * //Parse a repeating name\n * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                                 \"repeating_attack\"\n * console.log(rowID);// =>\n                                   \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                                     \"some-button\"\n */\nconst parseTriggerName = function(string){\n  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);\n  match.shift();\n  return match;\n};\nkFuncs.parseTriggerName = parseTriggerName;\nconst parseClickTrigger = parseTriggerName;\nkFuncs.parseClickTrigger = parseClickTrigger;\n\n/**\n * Parses out the attribute name from the htmlattribute name.\n * @memberof Utilities\n * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).\n * @returns {string}\n * @example\n * //Parse a name\n * const attrName = k.parseHtmlName('attr_attribute_1');\n * console.log(attrName);// =>\n                                       \"attribute_1\"\n */\nconst parseHTMLName = function(string){\n  let match = string.match(/(?:attr|act|roll)_(.+)/);\n  match.shift();\n  return match[0];\n};\nkFuncs.parseHTMLName = parseHTMLName;\n\n/**\n * Capitalize each word in a string\n * @memberof Utilities\n * @param {string} string - The string to capitalize\n * @returns {string}\n * @example\n * const capitalized = k.capitalize('a word');\n * console.log(capitalized);// =>\n                                         \"A Word\"\n */\nconst capitalize = function(string){\n  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>\n                                          letter.toUpperCase());\n};\nkFuncs.capitalize = capitalize;\n\n/**\n * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).\n * @memberof Utilities\n * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.\n * @returns {Promise} - Resolves to the selected value from the roll query\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\n *  console.log(queryResult);//=>\n                                             \"Option 1\" or \"Option 2\" depending on what the user selects\n * \n *  //Get free form input from the user\n *  const freeResult = await extractQueryResult('Prompt Text Here');\n *  consoel.log(freeResult);// =>\n                                               Whatever the user entered\n * }\n */\nconst extractQueryResult = async function(query){\n\tdebug('entering extractQueryResult');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=?{${query}}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.extractQueryResult = extractQueryResult;\n\n/**\n * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.\n * @memberof Utilities\n * @param {string|number} [value] - The value to return. Optional.\n * @returns {Promise} - Resolves to the value passed to the function\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await pseudoQuery('a value');\n *  console.log(queryResult);//=>\n                                                 \"a value\"\n * }\n */\nconst pseudoQuery = async function(value){\n\tdebug('entering pseudoQuery');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=${value}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.pseudoQuery = pseudoQuery;\n\n/**\n * An alias for console.log.\n * @memberof Utilities\n * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.\n */\nconst log = function(msg){\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} log| ${msg}`,\"background-color:#159ccf\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                  {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} log| ${m}: ${msg[m]}`,\"background-color:#159ccf\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} log| ${typeof msg[m]} ${m}`,\"background-color:#159ccf\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.log = log;\n\n/**\n * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.\n * @memberof Utilities\n * @param {any} msg - 'See {@link k.log}\n * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.\n * @returns {void}\n */\nconst debug = function(msg,force){\n  console.warn('kFuncs.version',kFuncs.version);\n  if(!kFuncs.debugMode && !force && kFuncs.version >\n                                                     0) return;\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} DEBUG| ${msg}`,\"background-color:tan;color:red;\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                      {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${m}: ${msg[m]}`,\"background-color:tan;color:red;\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${typeof msg[m]} ${m}`,\"background-color:tan;color:red;font-weight:bold;\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.debug = debug;\n\n/**\n * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.\n * @memberof Utilities\n * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.\n * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.\n */\nconst orderSections = function(attributes,sections){\n  Object.keys(sections).forEach((section)=>\n                                                        {\n    attributes.attributes[`_reporder_${section}`] = commaArray(attributes[`_reporder_${section}`]);\n    orderSection(attributes.attributes[`_reporder_${section}`],sections[section]);\n  });\n};\nkFuncs.orderSections = orderSections;\n\n/**\n * Orders a single ID array.\n * @memberof Utilities\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\n * @param {string[]} IDs - Array of IDs to be ordered.\n */\nconst orderSection = function(repOrder,IDs=[]){\n  IDs.sort((a,b)=>\n                                                          {\n    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());\n  });\n};\nkFuncs.orderSection = orderSection;\n\n/**\n * Splits a comma delimited string into an array\n * @memberof Utilities\n * @param {string} string - The string to split.\n * @returns {array} - The string segments of the comma delimited list.\n */\nconst commaArray = function(string=''){\n  return string.toLowerCase().split(/\\s*,\\s*/);\n};\nkFuncs.commaArray = commaArray;\n\n// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.\nconst RE = {\n  chars: {\n      '\"': '%quot;',\n      ',': '%comma;',\n      ':': '%colon;',\n      '}': '%rcub;',\n      '{': '%lcub;',\n  },\n  escape(data) {\n    return typeof data === 'object' ?\n      `KDATA${btoa(JSON.stringify(data))}` :\n      `KSTRING${btoa(data)}`;\n  },\n  unescape(string) {\n    const isData = typeof string === 'string' &&\n      (\n        string.startsWith('KDATA') ||\n        string.startsWith('KSTRING')\n      );\n    return isData ?\n      (\n        string.startsWith('KDATA') ?\n          JSON.parse(atob(string.replace(/^KDATA/,''))) :\n          atob(string.replace(/^KSTRING/,''))\n      ) :\n      string;\n  }\n};\n\n/**\n * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.\n * @function\n * @param {string|object|any[]} data - The data that you want to Base64 encode\n * @returns {string} - The encoded data\n * @memberof! Utilities\n */\nconst escape = RE.escape;\n/**\n * Decodes Base64 encoded strings that were created by the K-scaffold\n * @function\n * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.\n * @returns {string|object|any[]}\n * @memberof! Utilities\n */\nconst unescape = RE.unescape;\n\nObject.assign(kFuncs,{escape,unescape});/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n\n//# Attribute Obj Proxy handler\nconst createAttrProxy = function(attrs){\n  //creates a proxy for the attributes object so that values can be worked with more easily.\n  const getCascObj = function(event,casc){\n    const eventName = event.triggerName || event.sourceAttribute;\n    let typePrefix = eventName.startsWith('clicked:') ?\n      'act_' :\n      event.removedInfo ?\n      'fieldset_' :\n      'attr_';\n    let cascName = `${typePrefix}${eventName.replace(/(?:removed|clicked):/,'')}`;\n    let cascObj = casc[cascName];\n    k.debug({[cascName]:cascObj});\n    if(event && cascObj){\n      if(event.previousValue){\n        cascObj.previousValue = event.previousValue;\n      }else if(event.originalRollId){\n        cascObj.originalRollId = event.originalRollId;\n        cascObj.rollData = RE.unescape(event.originalRollId);\n      }\n    }\n    return cascObj || {};\n  };\n  \n  const triggerFunctions = function(obj,attributes,sections,casc){\n    if(obj.triggeredFuncs && obj.triggeredFuncs.length){\n      debug(`triggering functions for ${obj.name}`);\n      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>\n                                                            funcs[func] ? \n        funcs[func]({trigger:obj,attributes,sections,casc}) :\n        debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));\n    }\n  };\n  \n  const initialFunction = function(obj,attributes,sections){\n    if(obj.initialFunc){\n      debug(`initial functions for ${obj.name}`);\n      funcs[obj.initialFunc] ?\n        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :\n        debug(`!!!Warning!!! no function named ${obj.initialFunc} found. Initial function not called for ${obj.name}`,true);\n    }\n  };\n  const alwaysFunctions = function(trigger,attributes,sections,casc){\n    Object.values(allHandlers).forEach((handler)=>\n                                                              {\n      handler({trigger,attributes,sections,casc});\n    });\n  };\n  const processChange = function({event,trigger,attributes,sections,casc}){\n    if(event && !trigger){\n      debug(`${event.sourceAttribute} change detected. No trigger found`);\n      return;\n    }\n    if(!attributes || !sections || !casc){\n      debug(`!!! Insufficient arguments || attributes >\n                                                                 ${!!attributes} | sections >\n                                                                   ${!!sections} | casc >\n                                                                     ${!!casc} !!!`);\n      return;\n    }\n    debug({trigger});\n    if(event){\n      debug('checking for initial & always functions');\n      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.\n      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user\n    }\n    if(trigger){\n      debug(`processing ${trigger.name}`);\n      triggerFunctions(trigger,attributes,sections,casc);\n      if(!event && trigger.calculation && funcs[trigger.calculation]){\n        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});\n      }else if(trigger.calculation && !funcs[trigger.calculation]){\n        debug(`K-Scaffold Error: No function named ${trigger.calculation} found`);\n      }\n      if(Array.isArray(trigger.affects)){\n        attributes.queue.push(...trigger.affects);\n      }\n    }\n    attributes.set({attributes,sections,casc});\n  };\n  const attrTarget = {\n    updates:{},\n    attributes:{...attrs},\n    repOrders:{},\n    queue: [],\n    casc:{},\n    alwaysFunctions,\n    processChange,\n    triggerFunctions,\n    initialFunction,\n    getCascObj\n  };\n  const attrHandler = {\n    get:function(obj,prop){//gets the most value of the attribute.\n      //If it is a repeating order, returns the array, otherwise returns the update value or the original value\n      if(prop === 'set'){\n        return function(){\n          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};\n          if(attributes && attributes.queue.length && sections && casc){\n            let triggerName = attributes.queue.shift();\n            let trigger = getCascObj({sourceAttribute:triggerName},casc);\n            attributes.processChange({trigger,attributes,sections,casc});\n          }else{\n            debug({updates:obj.updates});\n            let trueCallback = Object.keys(obj.repOrders).length ?\n              function(){\n                Object.entries(obj.repOrders).forEach(([section,order])=>\n                                                                      {\n                  _setSectionOrder(section,order,)\n                });\n                callback && callback();\n              }:\n              callback;\n            Object.keys(obj.updates).forEach((key)=>\n                                                                        obj.attributes[key] = obj.updates[key]);\n            const update = obj.updates;\n            obj.updates = {};\n            set(update,vocal,trueCallback);\n          }\n        }\n      }else if(Object.keys(obj).some(key=>\n                                                                          key===prop)){ \n        return Reflect.get(...arguments)\n      }else{\n        let retValue;\n        switch(true){\n          case obj.repOrders.hasOwnProperty(prop):\n            retValue = obj.repOrders[prop];\n            break;\n          case obj.updates.hasOwnProperty(prop):\n            retValue = obj.updates[prop];\n            break;\n          default:\n            retValue = obj.attributes[prop];\n            break;\n        }\n        let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}`;\n        let numRetVal = +retValue;\n        if(!Number.isNaN(numRetVal) && retValue !== ''){\n          retValue = numRetVal;\n        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){\n          retValue = cascades[cascRef].defaultValue;\n        }\n        return retValue;\n      }\n    },\n    set:function(obj,prop,value){\n      //Sets the value. Also verifies that the value is a valid attribute value\n      //e.g. not undefined, null, or NaN\n      if(value || value===0 || value===''){\n        if(/reporder|^repeating_[^_]+$/.test(prop)){\n          let section = prop.replace(/_reporder_/,'');\n          obj.repOrders[section] = value;\n        }else if(`${obj.attributes}` !== `${value}` || \n          (obj.updates[prop] && `${obj.updates}` !== `${value}`)\n        ){\n          obj.updates[prop] = value;\n        }\n      }else{\n        debug(`!!!Warning: Attempted to set ${prop} to an invalid value:${value}; value not stored!!!`);\n      }\n      return true;\n    },\n    deleteProperty(obj,prop){\n      //removes the property from the original attributes, updates, and the reporders\n      Object.keys(obj).forEach((key)=>\n                                                                            {\n        delete obj[key][prop.toLowerCase()];\n      });\n    }\n  };\n  return new Proxy(attrTarget,attrHandler);\n};\n\n/**\n * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.\n * @memberof Utilities\n * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.\n * @param {object} optionsObj - Object that contains options to use for this registration.\n * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.\n * @returns {boolean} - True if the registration succeeded, false if it failed.\n * @example\n * //Basic Registration\n * const myFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({myFunc});\n * \n * //Register a function to run on sheet open\n * const openFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({openFunc},{type:['opener']})\n * \n * //Register a function to run on all events\n * const allFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({allFunc},{type:['all']})\n */\nconst registerFuncs = function(funcObj,optionsObj = {}){\n  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){\n    debug(`!!!! K-scaffold error: Improper arguments to register functions !!!!`);\n    return false;\n  }\n  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];\n  const typeSwitch = {\n    'opener':openHandlers,\n    'updater':updateHandlers,\n    'new':initialSetups,\n    'all':allHandlers,\n    'default':funcs\n  };\n  let setState;\n  Object.entries(funcObj).map(([prop,value])=>\n                                                                              {\n    typeArr.forEach((type)=>\n                                                                                {\n      if(typeSwitch[type][prop]){\n        debug(`!!! Duplicate function name for ${prop} as ${type}!!!`);\n        setState = false;\n      }else if(typeof value === 'function'){\n        typeSwitch[type][prop] = value;\n        setState = setState !== false ? true : false;\n      }else{\n        debug(`!!! K-scaffold error: Function registration requires a function. Invalid value to register as ${type} !!!`);\n        setState = false;\n      }\n    });\n  });\n  return setState;\n};\nkFuncs.registerFuncs = registerFuncs;\n\n/**\n * Function that sets up the action calls used in the roller mixin.\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n * @param {object[]} sections - All the repeating section IDs\n */\nconst setActionCalls = function({attributes,sections}){\n  actionAttributes.forEach((base)=>\n                                                                                  {\n    let [section,,field] = k.parseTriggerName(base);\n    let fieldAction = field.replace(/_/g,'-');\n    if(section){\n      sections[section].forEach((id)=>\n                                                                                    {\n        attributes[`${section}_${id}_${field}`] = `%{${attributes.character_name}|${section}_${id}_${fieldAction}}`;\n      });\n    }else{\n      attributes[`${field}`] = `%{${attributes.character_name}|${fieldAction}}`;\n    }\n  });\n};\nfuncs.setActionCalls = setActionCalls;\n\n/**\n * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.\n * @memberof Sheetworkers\n * @param {string} funcName - The name of the function to invoke.\n * @param {...any} args - The arguments to call the function with.\n * @returns {function|null}\n * @example\n * //Call myFunc with two arguments\n * k.callFunc('myFunc','an argument','another argument');\n */\nconst callFunc = function(funcName,...args){\n  if(funcs[funcName]){\n    debug(`calling ${funcName}`);\n    return funcs[funcName](...args);\n  }else{\n    debug(`Invalid function name: ${funcName}`);\n    return null;\n  }\n};\nkFuncs.callFunc = callFunc;/**@namespace Sheetworkers */\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n//Sheet Updaters and styling functions\nconst updateSheet = function(){\n  log('updating sheet');\n  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>\n                                                                                      {\n    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;\n    debug({sheet_version:attributes.sheet_version});\n    if(!attributes.sheet_version){\n      Object.entries(initialSetups).forEach(([funcName,handler])=>\n                                                                                        {\n        if(typeof funcs[funcName] === 'function'){\n          debug(`running ${funcName}`);\n          funcs[funcName]({attributes,sections,casc});\n        }else{\n          debug(`!!!Warning!!! no function named ${funcName} found. Initial sheet setup not performed.`);\n        }\n      });\n    }else{\n      Object.entries(updateHandlers).forEach(([ver,handler])=>\n                                                                                          {\n        if(attributes.sheet_version < +ver){\n          handler({attributes,sections,casc});\n        }\n      });\n    }\n    k.debug({openHandlers});\n    Object.entries(openHandlers).forEach(([funcName,func])=>\n                                                                                            {\n      if(typeof funcs[funcName] === 'function'){\n        debug(`running ${funcName}`);\n        funcs[funcName]({attributes,sections,casc});\n      }else{\n        debug(`!!!Warning!!! no function named ${funcName} found. Sheet open handling not performed.`);\n      }\n    });\n    setActionCalls({attributes,sections});\n    attributes.sheet_version = kFuncs.version;\n    log(`Sheet Update applied. Current Sheet Version ${kFuncs.version}`);\n    attributes.set();\n    log('Sheet ready for use');\n  }});\n};\n\nconst initialSetup = function(attributes,sections){\n  debug('Initial sheet setup');\n};\n\n/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof Sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */\nconst accessSheet = function(event){\n  debug({funcs:Object.keys(funcs)});\n  debug({event});\n  getAllAttrs({callback:(attributes,sections,casc)=>\n                                                                                              {\n    let trigger = attributes.getCascObj(event,casc);\n    attributes.processChange({event,trigger,attributes,sections,casc});\n  }});\n};\nfuncs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/*\nCascade Expansion functions\n*/\n//Expands the repeating section templates in cascades to reflect the rows actually available\nconst expandCascade = function(cascade,sections,attributes){\n  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.\n    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic\n      expandRepeating(memo,key,cascade,sections,attributes);\n    }else if(key){//for non repeating attributes do this logic\n      expandNormal(memo,key,cascade,sections);\n    }\n    return memo;\n  },{});\n};\n\nconst expandRepeating = function(memo,key,cascade,sections,attributes){\n  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>\n                                                                                                {\n    (sections[section]||[]).forEach((id)=>\n                                                                                                  {\n      memo[`${type}${section}_${id}_${field}`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids\n      memo[`${type}${section}_${id}_${field}`].name = `${section}_${id}_${field}`;\n      if(key.startsWith('attr_')){\n        memo[`${type}${section}_${id}_${field}`].affects = memo[`${type}${section}_${id}_${field}`].affects.reduce((m,affected)=>\n                                                                                                    {\n          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.\n            m.push(applyID(affected,id));\n          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section\n            addAllRows(affected,m,sections);\n          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array\n            m.push(affected);\n          }\n          return m;\n        },[]);\n      }\n    });\n  });\n};\n\nconst applyID = function(affected,id){\n  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,`$1${id}$2`);\n};\n\nconst expandNormal = function(memo,key,cascade,sections){\n  memo[key] = _.clone(cascade[key]);\n  if(key.startsWith('attr_')){\n    memo[key].affects = memo[key].affects || [];\n    memo[key].affects = memo[key].affects.reduce((m,a)=>\n                                                                                                      {\n      if(/^repeating/.test(a)){\n        addAllRows(a,m,sections);\n      }else{\n        m.push(a);\n      }\n      return m;\n    },[]);\n  }\n};\n\nconst addAllRows = function(affected,memo,sections){\n  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>\n                                                                                                        {\n    sections[section].forEach(id=>\n                                                                                                          memo.push(`${section}_${id}_${field}`));\n  });\n};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.\n * @namespace Sheetworkers.Sheetworker Aliases\n */\n/**\n * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.\n * @memberof Sheetworker Aliases\n * @name setSectionOrder\n * @param {string} section - The name of the section, with or without `repeating_`\n * @param {string[]} order - Array of ids describing the desired order of the section.\n * @returns {void}\n * @example\n * //Set the order of a repeating_weapon section\n * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);\n * //Can also specify the section name without the repeating_ prefix\n * k.setSectionOrder('equipment',['id1','id2','id3']);\n */\nconst _setSectionOrder = function(section,order){\n  let trueSection = section.replace(/repeating_/,'');\n  setSectionOrder(trueSection,order);\n};\nkFuncs.setSectionOrder = _setSectionOrder;\n\n/**\n * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.\n * @memberof Sheetworker Aliases\n * @name removeRepeatingRow\n * @param {string} row - The row id to be removed\n * @param {attributesProxy} attributes - The attribute values currently in memory\n * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.\n * @returns {void}\n * @example\n * //Remove a repeating Row\n * k.getAllAttrs({\n *  callback:(attributes,sections)=>\n                                                                                                            {\n *    const rowID = sections.repeating_equipment[0];\n *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\n *    console.log(sections.repeating_equipment); // =>\n                                                                                                               rowID no longer exists in the array.\n *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // =>\n                                                                                                                 undefined\n *  }\n * })\n */\nconst _removeRepeatingRow = function(row,attributes,sections){\n  debug(`removing ${row}`);\n  Object.keys(attributes.attributes).forEach((key)=>\n                                                                                                                  {\n    if(key.startsWith(row)){\n      delete attributes[key];\n    }\n  });\n  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');\n  sections[section] = sections[section].filter((id)=>\n                                                                                                                    id!==rowID);\n  removeRepeatingRow(row);\n};\nkFuncs.removeRepeatingRow = _removeRepeatingRow;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.\n * @memberof Sheetworker Aliases\n * @name getAttrs\n * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.\n * @example\n * //Gets the attributes named in props.\n * k.getAttrs({\n *  props:['attribute_1','attribute_2'],\n *  callback:(attributes)=>\n                                                                                                                      {\n *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\n *    attributes.attribute_1 = 'new value';\n *    attributes.set();\n *  }\n * })\n */\nconst _getAttrs = function({props=baseGet,callback}){\n  getAttrs(props,(values)=>\n                                                                                                                        {\n    const attributes = createAttrProxy(values);\n    callback(attributes);\n  });\n};\nkFuncs.getAttrs = _getAttrs;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.\n * @memberof Sheetworker Aliases\n * @param {Object} args\n * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. \n * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.\n * @example\n * //Get every K-scaffold linked attribute on the sheet\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                          {\n *    //Work with the attributes as you please.\n *    attributes.some_attribute = 'a value';\n *    attributes.set();//Apply our change\n *  }\n * })\n */\nconst getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){\n  getSections(sectionDetails,(repeats,sections)=>\n                                                                                                                            {\n    getAttrs([...props,...repeats],(values)=>\n                                                                                                                              {\n      const attributes = createAttrProxy(values);\n      orderSections(attributes,sections);\n      const casc = expandCascade(cascades,sections,attributes);\n      callback(attributes,sections,casc);\n    })\n  });\n};\nkFuncs.getAllAttrs = getAllAttrs;\n\n/**\n * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.\n * @memberof Sheetworker Aliases\n * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.\n * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.\n * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section\n * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.\n * @example\n * // Get some section details\n * const sectionDetails = {\n *  {section:'repeating_equipment',fields:['name','weight','cost']},\n *  {section:'repeating_weapon',fields:['name','attack','damage']}\n * };\n * k.getSections(sectionDetails,(attributeNames,sections)=>\n                                                                                                                                {\n *  console.log(attributeNames);// =>\n                                                                                                                                   Array containing all row specific attribute names\n *  console.log(sections);// =>\n                                                                                                                                     Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\n * })\n */\nconst getSections = function(sectionDetails,callback){\n  let queueClone = _.clone(sectionDetails);\n  const worker = (queue,repeatAttrs=[],sections={})=>\n                                                                                                                                      {\n    let detail = queue.shift();\n    getSectionIDs(detail.section,(IDs)=>\n                                                                                                                                        {\n      sections[detail.section] = IDs;\n      IDs.forEach((id)=>\n                                                                                                                                          {\n        detail.fields.forEach((f)=>\n                                                                                                                                            {\n          repeatAttrs.push(`${detail.section}_${id}_${f}`);\n        });\n      });\n      repeatAttrs.push(`_reporder_${detail.section}`);\n      if(queue.length){\n        worker(queue,repeatAttrs,sections);\n      }else{\n        callback(repeatAttrs,sections);\n      }\n    });\n  };\n  if(!queueClone[0]){\n    callback([],{});\n  }else{\n    worker(queueClone);\n  }\n};\nkFuncs.getSections = getSections;\n\n// Sets the attributes while always calling with {silent:true}\n// Can be awaited to get the values returned from _setAttrs\n/**\n * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.\n * @memberof Sheetworker Aliases\n * @param {object} obj - The object containting attributes to set\n * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.\n * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.\n * @example\n * //Set some attributes silently\n * k.setAttrs({attribute_1:'new value'})\n * //Set some attributes and triggers listeners\n * k.setAttrs({attribute_1:'new value',true})\n * //Set some attributes and call a callback function\n * k.setAttrs({attribute_1:'new value'},null,()=>\n                                                                                                                                              {\n *  //Do something after the attribute is set\n * })\n */\nconst set = function(obj,vocal=false,callback){\n  setAttrs(obj,{silent:!vocal},callback);\n};\nkFuncs.setAttrs = set;\n\nconst generateCustomID = function(string){\n  if(!string.startsWith('-')){\n    string = `-${string}`;\n  }\n  rowID = generateRowID();\n  let re = new RegExp(`^.{${string.length}}`);\n  return `${string}${rowID.replace(re,'')}`;\n};\n\n\n/**\n * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.\n * @memberof Sheetworker Aliases\n * @name generateRowID\n * @param {sectionObj} sections\n * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.\n * @returns {string} - The created ID\n * @example\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                                                {\n *    //Create a new row ID\n *    const rowID = k.generateRowID('repeating_equipment',sections);\n *    console.log(rowID);// =>\n                                                                                                                                                   -p8rg908ug0suzz\n *    //Create a custom row ID\n *    const customID = k.generateRowID('repeating_equipment',sections,'custom');\n *    console.log(customID);// =>\n                                                                                                                                                     -custom98uadj89kj\n *  }\n * });\n */\nconst _generateRowID = function(section,sections,customText){\n  let rowID = customText ?\n    generateCustomID(customText) :\n    generateRowID();\n  section = section.match(/^repeating_[^_]+$/) ?\n    section :\n    `repeating_${section}`;\n  sections[section] = sections[section] || [];\n  sections[section].push(rowID);\n  return `${section}_${rowID}`;\n};\nkFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\nconst listeners = {};\n\n/**\n * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.\n * @memberof Variables\n * @var\n * @type {array}\n */\nconst baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>\n                                                                                                                                                      {\n  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){\n    memo.push(detailObj.name);\n  }\n  if(detailObj.listener){\n    listeners[detailObj.listener] = detailObj.listenerFunc;\n  }\n  return memo;\n},[]);\nkFuncs.baseGet = baseGet;\n\nconst registerEventHandlers = function(){\n  on('sheet:opened',updateSheet);\n  debug({funcKeys:Object.keys(funcs),funcs});\n  //Roll20 change and click listeners\n  Object.entries(listeners).forEach(([event,funcName])=>\n                                                                                                                                                        {\n    if(funcs[funcName]){\n      on(event,funcs[funcName]);\n    }else{\n      debug(`!!!Warning!!! no function named ${funcName} found. No listener created for ${event}`,true);\n    }\n  });\n  log(`kScaffold Loaded`);\n};\nsetTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.\n\n/**\n * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.\n * @memberof Sheetworkers\n * @param {object} event - The R20 event object\n */\nconst addItem = function(event){\n  let [,,section] = parseClickTrigger(event.triggerName);\n  section = section.replace(/add-/,'');\n  getAllAttrs({\n    callback:(attributes,sections,casc) =>\n                                                                                                                                                           {\n      let row = _generateRowID(section,sections);\n      debug({row});\n      attributes[`${row}_name`] = '';\n      setActionCalls({attributes,sections});\n      const trigger = cascades[`fieldset_repeating_${section}`];\n      if(trigger && trigger.addFuncs){\n        trigger.addFuncs.forEach((funcName) =>\n                                                                                                                                                             {\n          if(funcs[funcName]){\n            funcs[funcName]({attributes,sections,casc,trigger});\n          }\n        });\n      }\n      attributes.set({attributes,sections,casc});\n    }\n  });\n};\nfuncs.addItem = addItem;/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof Sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */\nconst kSwitchTab = function ({ trigger, attributes }) {\n  const [container, tab] = (\n    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||\n    []\n  ).slice(1);\n  $20(`[data-container-tab=\"${container}\"]`).removeClass('k-active-tab');\n  $20(`[data-container-tab=\"${container}\"][data-tab=\"${tab}\"]`).addClass('k-active-tab');\n  $20(`[data-container-button=\"${container}\"]`).removeClass('k-active-button');\n  $20(`[data-container-button=\"${container}\"][data-button=\"${tab}\"]`).addClass('k-active-button');\n  const tabInputName = `${container.replace(/\\-/g,'_')}_tab`;\n  if(persistentTabs.indexOf(tabInputName) >\n                                                                                                                                                               -1){\n    attributes[tabInputName] = trigger.name;\n  }\n}\n\nregisterFuncs({ kSwitchTab });\n\n/**\n * Sets persistent tabs to their last active state\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n */\nconst kTabOnOpen = function({trigger,attributes,sections,casc}){\n  if(typeof persistentTabs === 'undefined') return;\n  persistentTabs.forEach((tabInput) =>\n                                                                                                                                                                 {\n    const pseudoTrigger = {name:attributes[tabInput]};\n    kSwitchTab({trigger:pseudoTrigger, attributes});\n  });\n};\nregisterFuncs({ kTabOnOpen },{type:['opener']});\nreturn kFuncs;\n}());\nconst actionAttributes = [\"my_button_action\",\"strength_action\"];const inlineFieldsets = [\"fieldset\"];\n                                                                                                                                                              </script>"},{"meta":{"name":"module","description":"A mixin that works with {@link kscript}. It allows you to link your js directly in the pug file that the js is related to. The K-scaffold will then put the js in the final script tag.","arguments":null,"attributes":null,"example":"include ../_k.pug\n+module\n  |// include local js file here\n+kscript\n  |// local js file will be put here\n"},"file":"lib/scripts/_scripts.pug","source":"mixin module\n  if block\n    - k.scriptBlocks.push(block)","output":"<script type=\"text/worker\">\n  const k = (function(){\nconst kFuncs = {};\nconst cascades = ;\n\nkFuncs.cascades = cascades;\nconst repeatingSectionDetails = ;\n\nkFuncs.repeatingSectionDetails = repeatingSectionDetails;\nconst persistentTabs = ;\n\nkFuncs.persistentTabs = persistentTabs;\n/**\n * The K-scaffold provides several variables to allow your scripts to tap into its information flow.\n * @namespace Sheetworkers.Variables\n */\n/**\n * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`\n * @memberof Variables\n * @var\n * @type {string}\n */\nlet sheetName = 'kScaffold Powered Sheet';\nkFuncs.sheetName = sheetName;\n/**\n\t* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`\n * @memberof Variables\n\t* @var\n\t* @type {number}\n\t*/\nlet version = 0;\nkFuncs.version = version;\n/**\n\t* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.\n * @memberof Variables\n\t* @var\n\t* @type {boolean}\n\t*/\nlet debugMode = false;\nkFuncs.debugMode = debugMode;\nconst funcs = {};\nkFuncs.funcs = funcs;\nconst updateHandlers = {};\nconst openHandlers = {};\nconst initialSetups = {};\nconst allHandlers = {};\nconst addFuncs = {};\n\nconst kscaffoldJSVersion = '1.0.0';\nconst kscaffoldPUGVersion = '1.0.0';\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.\n * @namespace Sheetworkers.Utilities\n * @alias Utilities\n */\n/**\n * Replaces problem characters to use a string as a regex\n * @memberof Utilities\n * @param {string} text - The text to replace characters in\n * @returns {string}\n * @example\n * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\n * console.log(textForRegex);// =>\n     \"\\.some thing\\[with characters\\]\"\n */\nconst sanitizeForRegex = function(text){\n  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');\n};\nkFuncs.sanitizeForRegex = sanitizeForRegex;\n\n/**\n * Converts a value to a number, it\\'s default value, or `0` if no default value passed.\n * @memberof Utilities\n * @param {string|number} val - Value to convert to a number\n * @param {number} def - The default value, uses 0 if not passed\n * @returns {number|undefined}\n * @example\n * const num = k.value('100');\n * console.log(num);// =>\n       100\n */\nconst value = function(val,def){\n  const convertVal = +val;\n  if(def !== undefined && isNaN(def)){\n    throw(`K-scaffold Error: invalid default for value(). Default: ${def}`);\n  }\n  return convertVal === 0 ?\n    convertVal :\n    (+val||def||0);\n};\nkFuncs.value = value;\n\n/**\n * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.\n * @memberof Utilities\n * @param {string} string - The string to parse\n * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute\n * @returns {string[]}\n * @example\n * //Extract info from a full repeating name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\n * console.log(section);// =>\n         \"repeating_equipment\"\n * console.log(rowID);// =>\n           \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n             \"name\"\n * \n * //Extract info from just a row name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\n * console.log(section);// =>\n               \"repeating_equipment\"\n * console.log(rowID);// =>\n                 \"-8908asdflkjZlkj23\"\n * console.log(attrName);// =>\n                   undefined\n */\nconst parseRepeatName = function(string){\n  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);\n  match.shift();\n  return match;\n};\nkFuncs.parseRepeatName = parseRepeatName;\n\n/**\n * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n * \n * Aliases: `k.parseClickTrigger`\n * @memberof Utilities\n * @param {string} string The triggerName property of the\n * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`\n * @returns {string[]}\n * @example\n * //Parse a non repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\n * console.log(section);// =>\n                     undefined\n * console.log(rowID);// =>\n                       undefined\n * console.log(attrName);// =>\n                         \"some-button\"\n * \n * //Parse a repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                           \"repeating_attack\"\n * console.log(rowID);// =>\n                             \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                               \"some-button\"\n * \n * //Parse a repeating name\n * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// =>\n                                 \"repeating_attack\"\n * console.log(rowID);// =>\n                                   \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// =>\n                                     \"some-button\"\n */\nconst parseTriggerName = function(string){\n  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);\n  match.shift();\n  return match;\n};\nkFuncs.parseTriggerName = parseTriggerName;\nconst parseClickTrigger = parseTriggerName;\nkFuncs.parseClickTrigger = parseClickTrigger;\n\n/**\n * Parses out the attribute name from the htmlattribute name.\n * @memberof Utilities\n * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).\n * @returns {string}\n * @example\n * //Parse a name\n * const attrName = k.parseHtmlName('attr_attribute_1');\n * console.log(attrName);// =>\n                                       \"attribute_1\"\n */\nconst parseHTMLName = function(string){\n  let match = string.match(/(?:attr|act|roll)_(.+)/);\n  match.shift();\n  return match[0];\n};\nkFuncs.parseHTMLName = parseHTMLName;\n\n/**\n * Capitalize each word in a string\n * @memberof Utilities\n * @param {string} string - The string to capitalize\n * @returns {string}\n * @example\n * const capitalized = k.capitalize('a word');\n * console.log(capitalized);// =>\n                                         \"A Word\"\n */\nconst capitalize = function(string){\n  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>\n                                          letter.toUpperCase());\n};\nkFuncs.capitalize = capitalize;\n\n/**\n * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).\n * @memberof Utilities\n * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.\n * @returns {Promise} - Resolves to the selected value from the roll query\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\n *  console.log(queryResult);//=>\n                                             \"Option 1\" or \"Option 2\" depending on what the user selects\n * \n *  //Get free form input from the user\n *  const freeResult = await extractQueryResult('Prompt Text Here');\n *  consoel.log(freeResult);// =>\n                                               Whatever the user entered\n * }\n */\nconst extractQueryResult = async function(query){\n\tdebug('entering extractQueryResult');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=?{${query}}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.extractQueryResult = extractQueryResult;\n\n/**\n * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.\n * @memberof Utilities\n * @param {string|number} [value] - The value to return. Optional.\n * @returns {Promise} - Resolves to the value passed to the function\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await pseudoQuery('a value');\n *  console.log(queryResult);//=>\n                                                 \"a value\"\n * }\n */\nconst pseudoQuery = async function(value){\n\tdebug('entering pseudoQuery');\n\tlet queryRoll = await startRoll(`!{{query=[[0[response=${value}]]]}}`);\n\tfinishRoll(queryRoll.rollId);\n\treturn queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');\n};\nkFuncs.pseudoQuery = pseudoQuery;\n\n/**\n * An alias for console.log.\n * @memberof Utilities\n * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.\n */\nconst log = function(msg){\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} log| ${msg}`,\"background-color:#159ccf\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                  {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} log| ${m}: ${msg[m]}`,\"background-color:#159ccf\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} log| ${typeof msg[m]} ${m}`,\"background-color:#159ccf\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.log = log;\n\n/**\n * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.\n * @memberof Utilities\n * @param {any} msg - 'See {@link k.log}\n * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.\n * @returns {void}\n */\nconst debug = function(msg,force){\n  console.warn('kFuncs.version',kFuncs.version);\n  if(!kFuncs.debugMode && !force && kFuncs.version >\n                                                     0) return;\n  if(typeof msg === 'string'){\n    console.log(`%c${kFuncs.sheetName} DEBUG| ${msg}`,\"background-color:tan;color:red;\");\n  }else if(typeof msg === 'object'){\n    Object.keys(msg).forEach((m)=>\n                                                      {\n      if(typeof msg[m] === 'string'){\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${m}: ${msg[m]}`,\"background-color:tan;color:red;\");\n      }else{\n        console.log(`%c${kFuncs.sheetName} DEBUG| ${typeof msg[m]} ${m}`,\"background-color:tan;color:red;font-weight:bold;\");\n        console.table(msg[m]);\n      }\n    });\n  }\n};\nkFuncs.debug = debug;\n\n/**\n * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.\n * @memberof Utilities\n * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.\n * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.\n */\nconst orderSections = function(attributes,sections){\n  Object.keys(sections).forEach((section)=>\n                                                        {\n    attributes.attributes[`_reporder_${section}`] = commaArray(attributes[`_reporder_${section}`]);\n    orderSection(attributes.attributes[`_reporder_${section}`],sections[section]);\n  });\n};\nkFuncs.orderSections = orderSections;\n\n/**\n * Orders a single ID array.\n * @memberof Utilities\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\n * @param {string[]} IDs - Array of IDs to be ordered.\n */\nconst orderSection = function(repOrder,IDs=[]){\n  IDs.sort((a,b)=>\n                                                          {\n    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());\n  });\n};\nkFuncs.orderSection = orderSection;\n\n/**\n * Splits a comma delimited string into an array\n * @memberof Utilities\n * @param {string} string - The string to split.\n * @returns {array} - The string segments of the comma delimited list.\n */\nconst commaArray = function(string=''){\n  return string.toLowerCase().split(/\\s*,\\s*/);\n};\nkFuncs.commaArray = commaArray;\n\n// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.\nconst RE = {\n  chars: {\n      '\"': '%quot;',\n      ',': '%comma;',\n      ':': '%colon;',\n      '}': '%rcub;',\n      '{': '%lcub;',\n  },\n  escape(data) {\n    return typeof data === 'object' ?\n      `KDATA${btoa(JSON.stringify(data))}` :\n      `KSTRING${btoa(data)}`;\n  },\n  unescape(string) {\n    const isData = typeof string === 'string' &&\n      (\n        string.startsWith('KDATA') ||\n        string.startsWith('KSTRING')\n      );\n    return isData ?\n      (\n        string.startsWith('KDATA') ?\n          JSON.parse(atob(string.replace(/^KDATA/,''))) :\n          atob(string.replace(/^KSTRING/,''))\n      ) :\n      string;\n  }\n};\n\n/**\n * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.\n * @function\n * @param {string|object|any[]} data - The data that you want to Base64 encode\n * @returns {string} - The encoded data\n * @memberof! Utilities\n */\nconst escape = RE.escape;\n/**\n * Decodes Base64 encoded strings that were created by the K-scaffold\n * @function\n * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.\n * @returns {string|object|any[]}\n * @memberof! Utilities\n */\nconst unescape = RE.unescape;\n\nObject.assign(kFuncs,{escape,unescape});/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n\n//# Attribute Obj Proxy handler\nconst createAttrProxy = function(attrs){\n  //creates a proxy for the attributes object so that values can be worked with more easily.\n  const getCascObj = function(event,casc){\n    const eventName = event.triggerName || event.sourceAttribute;\n    let typePrefix = eventName.startsWith('clicked:') ?\n      'act_' :\n      event.removedInfo ?\n      'fieldset_' :\n      'attr_';\n    let cascName = `${typePrefix}${eventName.replace(/(?:removed|clicked):/,'')}`;\n    let cascObj = casc[cascName];\n    k.debug({[cascName]:cascObj});\n    if(event && cascObj){\n      if(event.previousValue){\n        cascObj.previousValue = event.previousValue;\n      }else if(event.originalRollId){\n        cascObj.originalRollId = event.originalRollId;\n        cascObj.rollData = RE.unescape(event.originalRollId);\n      }\n    }\n    return cascObj || {};\n  };\n  \n  const triggerFunctions = function(obj,attributes,sections,casc){\n    if(obj.triggeredFuncs && obj.triggeredFuncs.length){\n      debug(`triggering functions for ${obj.name}`);\n      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>\n                                                            funcs[func] ? \n        funcs[func]({trigger:obj,attributes,sections,casc}) :\n        debug(`!!!Warning!!! no function named ${func} found. Triggered function not called for ${obj.name}`,true));\n    }\n  };\n  \n  const initialFunction = function(obj,attributes,sections){\n    if(obj.initialFunc){\n      debug(`initial functions for ${obj.name}`);\n      funcs[obj.initialFunc] ?\n        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :\n        debug(`!!!Warning!!! no function named ${obj.initialFunc} found. Initial function not called for ${obj.name}`,true);\n    }\n  };\n  const alwaysFunctions = function(trigger,attributes,sections,casc){\n    Object.values(allHandlers).forEach((handler)=>\n                                                              {\n      handler({trigger,attributes,sections,casc});\n    });\n  };\n  const processChange = function({event,trigger,attributes,sections,casc}){\n    if(event && !trigger){\n      debug(`${event.sourceAttribute} change detected. No trigger found`);\n      return;\n    }\n    if(!attributes || !sections || !casc){\n      debug(`!!! Insufficient arguments || attributes >\n                                                                 ${!!attributes} | sections >\n                                                                   ${!!sections} | casc >\n                                                                     ${!!casc} !!!`);\n      return;\n    }\n    debug({trigger});\n    if(event){\n      debug('checking for initial & always functions');\n      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.\n      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user\n    }\n    if(trigger){\n      debug(`processing ${trigger.name}`);\n      triggerFunctions(trigger,attributes,sections,casc);\n      if(!event && trigger.calculation && funcs[trigger.calculation]){\n        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});\n      }else if(trigger.calculation && !funcs[trigger.calculation]){\n        debug(`K-Scaffold Error: No function named ${trigger.calculation} found`);\n      }\n      if(Array.isArray(trigger.affects)){\n        attributes.queue.push(...trigger.affects);\n      }\n    }\n    attributes.set({attributes,sections,casc});\n  };\n  const attrTarget = {\n    updates:{},\n    attributes:{...attrs},\n    repOrders:{},\n    queue: [],\n    casc:{},\n    alwaysFunctions,\n    processChange,\n    triggerFunctions,\n    initialFunction,\n    getCascObj\n  };\n  const attrHandler = {\n    get:function(obj,prop){//gets the most value of the attribute.\n      //If it is a repeating order, returns the array, otherwise returns the update value or the original value\n      if(prop === 'set'){\n        return function(){\n          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};\n          if(attributes && attributes.queue.length && sections && casc){\n            let triggerName = attributes.queue.shift();\n            let trigger = getCascObj({sourceAttribute:triggerName},casc);\n            attributes.processChange({trigger,attributes,sections,casc});\n          }else{\n            debug({updates:obj.updates});\n            let trueCallback = Object.keys(obj.repOrders).length ?\n              function(){\n                Object.entries(obj.repOrders).forEach(([section,order])=>\n                                                                      {\n                  _setSectionOrder(section,order,)\n                });\n                callback && callback();\n              }:\n              callback;\n            Object.keys(obj.updates).forEach((key)=>\n                                                                        obj.attributes[key] = obj.updates[key]);\n            const update = obj.updates;\n            obj.updates = {};\n            set(update,vocal,trueCallback);\n          }\n        }\n      }else if(Object.keys(obj).some(key=>\n                                                                          key===prop)){ \n        return Reflect.get(...arguments)\n      }else{\n        let retValue;\n        switch(true){\n          case obj.repOrders.hasOwnProperty(prop):\n            retValue = obj.repOrders[prop];\n            break;\n          case obj.updates.hasOwnProperty(prop):\n            retValue = obj.updates[prop];\n            break;\n          default:\n            retValue = obj.attributes[prop];\n            break;\n        }\n        let cascRef = `attr_${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}`;\n        let numRetVal = +retValue;\n        if(!Number.isNaN(numRetVal) && retValue !== ''){\n          retValue = numRetVal;\n        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){\n          retValue = cascades[cascRef].defaultValue;\n        }\n        return retValue;\n      }\n    },\n    set:function(obj,prop,value){\n      //Sets the value. Also verifies that the value is a valid attribute value\n      //e.g. not undefined, null, or NaN\n      if(value || value===0 || value===''){\n        if(/reporder|^repeating_[^_]+$/.test(prop)){\n          let section = prop.replace(/_reporder_/,'');\n          obj.repOrders[section] = value;\n        }else if(`${obj.attributes}` !== `${value}` || \n          (obj.updates[prop] && `${obj.updates}` !== `${value}`)\n        ){\n          obj.updates[prop] = value;\n        }\n      }else{\n        debug(`!!!Warning: Attempted to set ${prop} to an invalid value:${value}; value not stored!!!`);\n      }\n      return true;\n    },\n    deleteProperty(obj,prop){\n      //removes the property from the original attributes, updates, and the reporders\n      Object.keys(obj).forEach((key)=>\n                                                                            {\n        delete obj[key][prop.toLowerCase()];\n      });\n    }\n  };\n  return new Proxy(attrTarget,attrHandler);\n};\n\n/**\n * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.\n * @memberof Utilities\n * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.\n * @param {object} optionsObj - Object that contains options to use for this registration.\n * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.\n * @returns {boolean} - True if the registration succeeded, false if it failed.\n * @example\n * //Basic Registration\n * const myFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({myFunc});\n * \n * //Register a function to run on sheet open\n * const openFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({openFunc},{type:['opener']})\n * \n * //Register a function to run on all events\n * const allFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({allFunc},{type:['all']})\n */\nconst registerFuncs = function(funcObj,optionsObj = {}){\n  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){\n    debug(`!!!! K-scaffold error: Improper arguments to register functions !!!!`);\n    return false;\n  }\n  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];\n  const typeSwitch = {\n    'opener':openHandlers,\n    'updater':updateHandlers,\n    'new':initialSetups,\n    'all':allHandlers,\n    'default':funcs\n  };\n  let setState;\n  Object.entries(funcObj).map(([prop,value])=>\n                                                                              {\n    typeArr.forEach((type)=>\n                                                                                {\n      if(typeSwitch[type][prop]){\n        debug(`!!! Duplicate function name for ${prop} as ${type}!!!`);\n        setState = false;\n      }else if(typeof value === 'function'){\n        typeSwitch[type][prop] = value;\n        setState = setState !== false ? true : false;\n      }else{\n        debug(`!!! K-scaffold error: Function registration requires a function. Invalid value to register as ${type} !!!`);\n        setState = false;\n      }\n    });\n  });\n  return setState;\n};\nkFuncs.registerFuncs = registerFuncs;\n\n/**\n * Function that sets up the action calls used in the roller mixin.\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n * @param {object[]} sections - All the repeating section IDs\n */\nconst setActionCalls = function({attributes,sections}){\n  actionAttributes.forEach((base)=>\n                                                                                  {\n    let [section,,field] = k.parseTriggerName(base);\n    let fieldAction = field.replace(/_/g,'-');\n    if(section){\n      sections[section].forEach((id)=>\n                                                                                    {\n        attributes[`${section}_${id}_${field}`] = `%{${attributes.character_name}|${section}_${id}_${fieldAction}}`;\n      });\n    }else{\n      attributes[`${field}`] = `%{${attributes.character_name}|${fieldAction}}`;\n    }\n  });\n};\nfuncs.setActionCalls = setActionCalls;\n\n/**\n * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.\n * @memberof Sheetworkers\n * @param {string} funcName - The name of the function to invoke.\n * @param {...any} args - The arguments to call the function with.\n * @returns {function|null}\n * @example\n * //Call myFunc with two arguments\n * k.callFunc('myFunc','an argument','another argument');\n */\nconst callFunc = function(funcName,...args){\n  if(funcs[funcName]){\n    debug(`calling ${funcName}`);\n    return funcs[funcName](...args);\n  }else{\n    debug(`Invalid function name: ${funcName}`);\n    return null;\n  }\n};\nkFuncs.callFunc = callFunc;/**@namespace Sheetworkers */\n/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n//Sheet Updaters and styling functions\nconst updateSheet = function(){\n  log('updating sheet');\n  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>\n                                                                                      {\n    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;\n    debug({sheet_version:attributes.sheet_version});\n    if(!attributes.sheet_version){\n      Object.entries(initialSetups).forEach(([funcName,handler])=>\n                                                                                        {\n        if(typeof funcs[funcName] === 'function'){\n          debug(`running ${funcName}`);\n          funcs[funcName]({attributes,sections,casc});\n        }else{\n          debug(`!!!Warning!!! no function named ${funcName} found. Initial sheet setup not performed.`);\n        }\n      });\n    }else{\n      Object.entries(updateHandlers).forEach(([ver,handler])=>\n                                                                                          {\n        if(attributes.sheet_version < +ver){\n          handler({attributes,sections,casc});\n        }\n      });\n    }\n    k.debug({openHandlers});\n    Object.entries(openHandlers).forEach(([funcName,func])=>\n                                                                                            {\n      if(typeof funcs[funcName] === 'function'){\n        debug(`running ${funcName}`);\n        funcs[funcName]({attributes,sections,casc});\n      }else{\n        debug(`!!!Warning!!! no function named ${funcName} found. Sheet open handling not performed.`);\n      }\n    });\n    setActionCalls({attributes,sections});\n    attributes.sheet_version = kFuncs.version;\n    log(`Sheet Update applied. Current Sheet Version ${kFuncs.version}`);\n    attributes.set();\n    log('Sheet ready for use');\n  }});\n};\n\nconst initialSetup = function(attributes,sections){\n  debug('Initial sheet setup');\n};\n\n/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof Sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */\nconst accessSheet = function(event){\n  debug({funcs:Object.keys(funcs)});\n  debug({event});\n  getAllAttrs({callback:(attributes,sections,casc)=>\n                                                                                              {\n    let trigger = attributes.getCascObj(event,casc);\n    attributes.processChange({event,trigger,attributes,sections,casc});\n  }});\n};\nfuncs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/*\nCascade Expansion functions\n*/\n//Expands the repeating section templates in cascades to reflect the rows actually available\nconst expandCascade = function(cascade,sections,attributes){\n  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.\n    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic\n      expandRepeating(memo,key,cascade,sections,attributes);\n    }else if(key){//for non repeating attributes do this logic\n      expandNormal(memo,key,cascade,sections);\n    }\n    return memo;\n  },{});\n};\n\nconst expandRepeating = function(memo,key,cascade,sections,attributes){\n  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>\n                                                                                                {\n    (sections[section]||[]).forEach((id)=>\n                                                                                                  {\n      memo[`${type}${section}_${id}_${field}`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids\n      memo[`${type}${section}_${id}_${field}`].name = `${section}_${id}_${field}`;\n      if(key.startsWith('attr_')){\n        memo[`${type}${section}_${id}_${field}`].affects = memo[`${type}${section}_${id}_${field}`].affects.reduce((m,affected)=>\n                                                                                                    {\n          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.\n            m.push(applyID(affected,id));\n          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section\n            addAllRows(affected,m,sections);\n          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array\n            m.push(affected);\n          }\n          return m;\n        },[]);\n      }\n    });\n  });\n};\n\nconst applyID = function(affected,id){\n  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,`$1${id}$2`);\n};\n\nconst expandNormal = function(memo,key,cascade,sections){\n  memo[key] = _.clone(cascade[key]);\n  if(key.startsWith('attr_')){\n    memo[key].affects = memo[key].affects || [];\n    memo[key].affects = memo[key].affects.reduce((m,a)=>\n                                                                                                      {\n      if(/^repeating/.test(a)){\n        addAllRows(a,m,sections);\n      }else{\n        m.push(a);\n      }\n      return m;\n    },[]);\n  }\n};\n\nconst addAllRows = function(affected,memo,sections){\n  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>\n                                                                                                        {\n    sections[section].forEach(id=>\n                                                                                                          memo.push(`${section}_${id}_${field}`));\n  });\n};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\n/**\n * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.\n * @namespace Sheetworkers.Sheetworker Aliases\n */\n/**\n * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.\n * @memberof Sheetworker Aliases\n * @name setSectionOrder\n * @param {string} section - The name of the section, with or without `repeating_`\n * @param {string[]} order - Array of ids describing the desired order of the section.\n * @returns {void}\n * @example\n * //Set the order of a repeating_weapon section\n * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);\n * //Can also specify the section name without the repeating_ prefix\n * k.setSectionOrder('equipment',['id1','id2','id3']);\n */\nconst _setSectionOrder = function(section,order){\n  let trueSection = section.replace(/repeating_/,'');\n  setSectionOrder(trueSection,order);\n};\nkFuncs.setSectionOrder = _setSectionOrder;\n\n/**\n * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.\n * @memberof Sheetworker Aliases\n * @name removeRepeatingRow\n * @param {string} row - The row id to be removed\n * @param {attributesProxy} attributes - The attribute values currently in memory\n * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.\n * @returns {void}\n * @example\n * //Remove a repeating Row\n * k.getAllAttrs({\n *  callback:(attributes,sections)=>\n                                                                                                            {\n *    const rowID = sections.repeating_equipment[0];\n *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\n *    console.log(sections.repeating_equipment); // =>\n                                                                                                               rowID no longer exists in the array.\n *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // =>\n                                                                                                                 undefined\n *  }\n * })\n */\nconst _removeRepeatingRow = function(row,attributes,sections){\n  debug(`removing ${row}`);\n  Object.keys(attributes.attributes).forEach((key)=>\n                                                                                                                  {\n    if(key.startsWith(row)){\n      delete attributes[key];\n    }\n  });\n  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');\n  sections[section] = sections[section].filter((id)=>\n                                                                                                                    id!==rowID);\n  removeRepeatingRow(row);\n};\nkFuncs.removeRepeatingRow = _removeRepeatingRow;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.\n * @memberof Sheetworker Aliases\n * @name getAttrs\n * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.\n * @example\n * //Gets the attributes named in props.\n * k.getAttrs({\n *  props:['attribute_1','attribute_2'],\n *  callback:(attributes)=>\n                                                                                                                      {\n *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\n *    attributes.attribute_1 = 'new value';\n *    attributes.set();\n *  }\n * })\n */\nconst _getAttrs = function({props=baseGet,callback}){\n  getAttrs(props,(values)=>\n                                                                                                                        {\n    const attributes = createAttrProxy(values);\n    callback(attributes);\n  });\n};\nkFuncs.getAttrs = _getAttrs;\n\n/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.\n * @memberof Sheetworker Aliases\n * @param {Object} args\n * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. \n * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.\n * @example\n * //Get every K-scaffold linked attribute on the sheet\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                          {\n *    //Work with the attributes as you please.\n *    attributes.some_attribute = 'a value';\n *    attributes.set();//Apply our change\n *  }\n * })\n */\nconst getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){\n  getSections(sectionDetails,(repeats,sections)=>\n                                                                                                                            {\n    getAttrs([...props,...repeats],(values)=>\n                                                                                                                              {\n      const attributes = createAttrProxy(values);\n      orderSections(attributes,sections);\n      const casc = expandCascade(cascades,sections,attributes);\n      callback(attributes,sections,casc);\n    })\n  });\n};\nkFuncs.getAllAttrs = getAllAttrs;\n\n/**\n * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.\n * @memberof Sheetworker Aliases\n * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.\n * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.\n * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section\n * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.\n * @example\n * // Get some section details\n * const sectionDetails = {\n *  {section:'repeating_equipment',fields:['name','weight','cost']},\n *  {section:'repeating_weapon',fields:['name','attack','damage']}\n * };\n * k.getSections(sectionDetails,(attributeNames,sections)=>\n                                                                                                                                {\n *  console.log(attributeNames);// =>\n                                                                                                                                   Array containing all row specific attribute names\n *  console.log(sections);// =>\n                                                                                                                                     Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\n * })\n */\nconst getSections = function(sectionDetails,callback){\n  let queueClone = _.clone(sectionDetails);\n  const worker = (queue,repeatAttrs=[],sections={})=>\n                                                                                                                                      {\n    let detail = queue.shift();\n    getSectionIDs(detail.section,(IDs)=>\n                                                                                                                                        {\n      sections[detail.section] = IDs;\n      IDs.forEach((id)=>\n                                                                                                                                          {\n        detail.fields.forEach((f)=>\n                                                                                                                                            {\n          repeatAttrs.push(`${detail.section}_${id}_${f}`);\n        });\n      });\n      repeatAttrs.push(`_reporder_${detail.section}`);\n      if(queue.length){\n        worker(queue,repeatAttrs,sections);\n      }else{\n        callback(repeatAttrs,sections);\n      }\n    });\n  };\n  if(!queueClone[0]){\n    callback([],{});\n  }else{\n    worker(queueClone);\n  }\n};\nkFuncs.getSections = getSections;\n\n// Sets the attributes while always calling with {silent:true}\n// Can be awaited to get the values returned from _setAttrs\n/**\n * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.\n * @memberof Sheetworker Aliases\n * @param {object} obj - The object containting attributes to set\n * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.\n * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.\n * @example\n * //Set some attributes silently\n * k.setAttrs({attribute_1:'new value'})\n * //Set some attributes and triggers listeners\n * k.setAttrs({attribute_1:'new value',true})\n * //Set some attributes and call a callback function\n * k.setAttrs({attribute_1:'new value'},null,()=>\n                                                                                                                                              {\n *  //Do something after the attribute is set\n * })\n */\nconst set = function(obj,vocal=false,callback){\n  setAttrs(obj,{silent:!vocal},callback);\n};\nkFuncs.setAttrs = set;\n\nconst generateCustomID = function(string){\n  if(!string.startsWith('-')){\n    string = `-${string}`;\n  }\n  rowID = generateRowID();\n  let re = new RegExp(`^.{${string.length}}`);\n  return `${string}${rowID.replace(re,'')}`;\n};\n\n\n/**\n * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.\n * @memberof Sheetworker Aliases\n * @name generateRowID\n * @param {sectionObj} sections\n * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.\n * @returns {string} - The created ID\n * @example\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>\n                                                                                                                                                {\n *    //Create a new row ID\n *    const rowID = k.generateRowID('repeating_equipment',sections);\n *    console.log(rowID);// =>\n                                                                                                                                                   -p8rg908ug0suzz\n *    //Create a custom row ID\n *    const customID = k.generateRowID('repeating_equipment',sections,'custom');\n *    console.log(customID);// =>\n                                                                                                                                                     -custom98uadj89kj\n *  }\n * });\n */\nconst _generateRowID = function(section,sections,customText){\n  let rowID = customText ?\n    generateCustomID(customText) :\n    generateRowID();\n  section = section.match(/^repeating_[^_]+$/) ?\n    section :\n    `repeating_${section}`;\n  sections[section] = sections[section] || [];\n  sections[section].push(rowID);\n  return `${section}_${rowID}`;\n};\nkFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/\n/*jshint -W014,-W084,-W030,-W033*/\nconst listeners = {};\n\n/**\n * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.\n * @memberof Variables\n * @var\n * @type {array}\n */\nconst baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>\n                                                                                                                                                      {\n  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){\n    memo.push(detailObj.name);\n  }\n  if(detailObj.listener){\n    listeners[detailObj.listener] = detailObj.listenerFunc;\n  }\n  return memo;\n},[]);\nkFuncs.baseGet = baseGet;\n\nconst registerEventHandlers = function(){\n  on('sheet:opened',updateSheet);\n  debug({funcKeys:Object.keys(funcs),funcs});\n  //Roll20 change and click listeners\n  Object.entries(listeners).forEach(([event,funcName])=>\n                                                                                                                                                        {\n    if(funcs[funcName]){\n      on(event,funcs[funcName]);\n    }else{\n      debug(`!!!Warning!!! no function named ${funcName} found. No listener created for ${event}`,true);\n    }\n  });\n  log(`kScaffold Loaded`);\n};\nsetTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.\n\n/**\n * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.\n * @memberof Sheetworkers\n * @param {object} event - The R20 event object\n */\nconst addItem = function(event){\n  let [,,section] = parseClickTrigger(event.triggerName);\n  section = section.replace(/add-/,'');\n  getAllAttrs({\n    callback:(attributes,sections,casc) =>\n                                                                                                                                                           {\n      let row = _generateRowID(section,sections);\n      debug({row});\n      attributes[`${row}_name`] = '';\n      setActionCalls({attributes,sections});\n      const trigger = cascades[`fieldset_repeating_${section}`];\n      if(trigger && trigger.addFuncs){\n        trigger.addFuncs.forEach((funcName) =>\n                                                                                                                                                             {\n          if(funcs[funcName]){\n            funcs[funcName]({attributes,sections,casc,trigger});\n          }\n        });\n      }\n      attributes.set({attributes,sections,casc});\n    }\n  });\n};\nfuncs.addItem = addItem;/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof Sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */\nconst kSwitchTab = function ({ trigger, attributes }) {\n  const [container, tab] = (\n    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||\n    []\n  ).slice(1);\n  $20(`[data-container-tab=\"${container}\"]`).removeClass('k-active-tab');\n  $20(`[data-container-tab=\"${container}\"][data-tab=\"${tab}\"]`).addClass('k-active-tab');\n  $20(`[data-container-button=\"${container}\"]`).removeClass('k-active-button');\n  $20(`[data-container-button=\"${container}\"][data-button=\"${tab}\"]`).addClass('k-active-button');\n  const tabInputName = `${container.replace(/\\-/g,'_')}_tab`;\n  if(persistentTabs.indexOf(tabInputName) >\n                                                                                                                                                               -1){\n    attributes[tabInputName] = trigger.name;\n  }\n}\n\nregisterFuncs({ kSwitchTab });\n\n/**\n * Sets persistent tabs to their last active state\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n */\nconst kTabOnOpen = function({trigger,attributes,sections,casc}){\n  if(typeof persistentTabs === 'undefined') return;\n  persistentTabs.forEach((tabInput) =>\n                                                                                                                                                                 {\n    const pseudoTrigger = {name:attributes[tabInput]};\n    kSwitchTab({trigger:pseudoTrigger, attributes});\n  });\n};\nregisterFuncs({ kTabOnOpen },{type:['opener']});\nreturn kFuncs;\n}());\nconst actionAttributes = [\"my_button_action\",\"strength_action\"];const inlineFieldsets = [\"fieldset\"];// local js file will be put here\n// include local js file here\n                                                                                                                                                              </script>"}];
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
41,
255
],
"filename": "errorHead.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
76,
148
],
"filename": "errorHead.js",
"lineno": 4,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
257,
284
],
"filename": "errorHead.js",
"lineno": 8,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
42,
214
],
"filename": "getTemplate.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
217,
245
],
"filename": "getTemplate.js",
"lineno": 8,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
"comment": "/**\n * The build functionality used by the CLI and API build interfaces.\n * @namespace Build\n */",
"meta": {
"filename": "index.js",
"lineno": 1,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
103,
134
],
"filename": "index.js",
"lineno": 5,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
142,
182
],
"filename": "index.js",
"lineno": 6,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
"comment": "/**\n * Renders PUG and SCSS into HTML and CSS text\n * @memberof Build\n * @alias all\n * @param {string} source - The path to the directory containing your PUG and SCSS files\n * @param {string} destination - The relative path to the directory where you want your HTML and CSS files to be created.\n * @param {boolean} [dynamicDestination = false] - Whether the generator should create dynamically named folders inside the destination based on the master pug/scss file names, (e.g. my_system.pug and my_system.scss with a destination of `./build` will create /build/my_system/my_system.html, /build/my_system/my_system.css, and /build/my_system/translation.js). This is useful if building a sheet template that is going to be used for several different projects.\n * @param {object} [pugOptions] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:\n * @param {boolean} [pugOptions.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.\n * @param {object} [scssOptions = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.\n * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1.\n */",
"meta": {
"range": [
1956,
2372
],
"filename": "index.js",
"lineno": 20,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1972,
1984
],
"filename": "index.js",
"lineno": 20,
"columnno": 22,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1985,
1996
],
"filename": "index.js",
"lineno": 20,
"columnno": 35,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1997,
2015
],
"filename": "index.js",
"lineno": 20,
"columnno": 47,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2016,
2031
],
"filename": "index.js",
"lineno": 20,
"columnno": 66,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2032,
2063
],
"filename": "index.js",
"lineno": 20,
"columnno": 82,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2044,
2062
],
"filename": "index.js",
"lineno": 20,
"columnno": 94,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2064,
2078
],
"filename": "index.js",
"lineno": 20,
"columnno": 114,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2079,
2090
],
"filename": "index.js",
"lineno": 20,
"columnno": 129,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2139,
2145
],
"filename": "index.js",
"lineno": 21,
"columnno": 41,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2146,
2157
],
"filename": "index.js",
"lineno": 21,
"columnno": 48,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2158,
2176
],
"filename": "index.js",
"lineno": 21,
"columnno": 60,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2177,
2192
],
"filename": "index.js",
"lineno": 21,
"columnno": 79,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2193,
2203
],
"filename": "index.js",
"lineno": 21,
"columnno": 95,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2204,
2215
],
"filename": "index.js",
"lineno": 21,
"columnno": 106,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2255,
2261
],
"filename": "index.js",
"lineno": 23,
"columnno": 23,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2262,
2273
],
"filename": "index.js",
"lineno": 23,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2274,
2292
],
"filename": "index.js",
"lineno": 23,
"columnno": 42,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2293,
2308
],
"filename": "index.js",
"lineno": 23,
"columnno": 61,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2309,
2319
],
"filename": "index.js",
"lineno": 23,
"columnno": 77,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2320,
2331
],
"filename": "index.js",
"lineno": 23,
"columnno": 88,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
2375,
2397
],
"filename": "index.js",
"lineno": 29,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
41,
101
],
"filename": "kStatus.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
103,
127
],
"filename": "kStatus.js",
"lineno": 7,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
"comment": "/**\n * The local functions and variables that the K-scaffold provides for use in your pug.\n * @namespace Locals\n*/",
"meta": {
"filename": "index.js",
"lineno": 1,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
"code": {}
},
"description": "The local functions and variables that the K-scaffold provides for use in your pug.",
"kind": "namespace",
"name": "Locals",
"longname": "Locals",
"scope": "global"
},
{
"comment": "/**\n * Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.\n * @memberof Locals\n * @property {object[]} repeatingSectionDetails - Array of objects that describe each repeating section and the attributes contained in them.\n * @property {string[]} actionAttributes - Array of attribute names created by use of the `roller` mixin.\n * @property {object} cascades - Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.\n */",
"meta": {
"range": [
795,
810
],
"filename": "index.js",
"lineno": 12,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.\n * @memberof Locals\n * @property {boolean} scriptUsed - Boolean that tracks whether the kScript mixin has been called or not. Default `false`.\n * @property {string} repeatingPrefix - The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`\n * @property {boolean} repeatsIgnoreSystemPrefix - Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.\n * @property {string} systemPrefix - A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`\n */",
"meta": {
"range": [
1736,
1742
],
"filename": "index.js",
"lineno": 22,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1751,
2543
],
"filename": "index.js",
"lineno": 24,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1778,
2146
],
"filename": "index.js",
"lineno": 25,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1798,
1824
],
"filename": "index.js",
"lineno": 26,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1830,
1849
],
"filename": "index.js",
"lineno": 27,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1855,
2119
],
"filename": "index.js",
"lineno": 28,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1872,
2111
],
"filename": "index.js",
"lineno": 29,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1902,
1923
],
"filename": "index.js",
"lineno": 30,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1933,
1944
],
"filename": "index.js",
"lineno": 31,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1954,
1969
],
"filename": "index.js",
"lineno": 32,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1979,
1989
],
"filename": "index.js",
"lineno": 33,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
1999,
2032
],
"filename": "index.js",
"lineno": 34,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2042,
2068
],
"filename": "index.js",
"lineno": 35,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2078,
2110
],
"filename": "index.js",
"lineno": 36,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2125,
2142
],
"filename": "index.js",
"lineno": 38,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2156,
2298
],
"filename": "index.js",
"lineno": 40,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2174,
2191
],
"filename": "index.js",
"lineno": 41,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2197,
2215
],
"filename": "index.js",
"lineno": 42,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2221,
2252
],
"filename": "index.js",
"lineno": 43,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2258,
2273
],
"filename": "index.js",
"lineno": 44,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
2279,
2294
],
"filename": "index.js",
"lineno": 45,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * checks that the kScript mixin is the final mixin used.\n */",
"meta": {
"range": [
2618,
2769
],
"filename": "index.js",
"lineno": 57,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Gets the current state of the system prefix\n * @returns {string}\n */",
"meta": {
"range": [
2856,
2900
],
"filename": "index.js",
"lineno": 67,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.\n * @param {string} val - The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.\n * @param {boolean} normalRepeating - Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.\n * @returns {string}\n */",
"meta": {
"range": [
3511,
3727
],
"filename": "index.js",
"lineno": 75,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
3566,
3611
],
"filename": "index.js",
"lineno": 76,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
3621,
3648
],
"filename": "index.js",
"lineno": 77,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
3652,
3703
],
"filename": "index.js",
"lineno": 78,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts an attribute name into an attribute call for that attribute. Converts `_max` attribute names to the proper attribute call syntax for `_max` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.\n * @memberof Locals\n * @param {string} string - The attribute name to create an attribute call for.\n * @returns {string}\n */",
"meta": {
"range": [
4188,
4285
],
"filename": "index.js",
"lineno": 88,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts a string to a valid snake_case attribute name or kebab-case action button name.\n * @memberof Locals\n * @param {string} string - The string to adapt\n * @returns {string}\n */",
"meta": {
"range": [
4483,
4840
],
"filename": "index.js",
"lineno": 96,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
4516,
4545
],
"filename": "index.js",
"lineno": 97,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
4553,
4697
],
"filename": "index.js",
"lineno": 98,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
4720,
4812
],
"filename": "index.js",
"lineno": 104,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.\n * @memberof Locals\n * @param {string} string - The ability name to create a call for.\n * @returns {string}\n */",
"meta": {
"range": [
5172,
5247
],
"filename": "index.js",
"lineno": 116,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Replaces spaces in a string with underscores (`_`).\n * @memberof Locals\n * @param {string} string - The string to work on\n * @returns {string}\n */",
"meta": {
"range": [
5412,
5466
],
"filename": "index.js",
"lineno": 124,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Escapes problem characters in a string for use as a regex.\n * @memberof Locals\n * @param {string} string - The string to work on\n * @returns {string}\n */",
"meta": {
"range": [
5636,
5705
],
"filename": "index.js",
"lineno": 132,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Capitalizes the first letter of words in a string.\n * @memberof Locals\n * @param {string} string \n * @returns {string}\n */",
"meta": {
"range": [
5844,
5936
],
"filename": "index.js",
"lineno": 140,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts a string to a valid kebab-case action button name\n * @memberof Locals\n * @param {string} name - The string to convert to an action button name\n * @returns {string}\n */",
"meta": {
"range": [
6129,
6189
],
"filename": "index.js",
"lineno": 148,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts the name of an action button in a roller construction to the controlling attribute name.\n * @memberof Locals\n * @param {string} name - The string to convert\n * @returns {string}\n */",
"meta": {
"range": [
6395,
6471
],
"filename": "index.js",
"lineno": 155,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts a title back to an attribute name\n * @param {string} string - The string to convert to an attribute name\n * @memberof Locals\n * @returns {string}\n */",
"meta": {
"range": [
6646,
6703
],
"filename": "index.js",
"lineno": 163,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Adds an item to a designated array property of `varObjects` for tracking.\n * @param {any} item - \n * @param {string} arrName - Name of the array to manipulate\n */",
"meta": {
"range": [
6882,
7056
],
"filename": "index.js",
"lineno": 170,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
6918,
6965
],
"filename": "index.js",
"lineno": 171,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Stores the attribute in the cascades object.\n * @param {object} element - Object describing the element\n */",
"meta": {
"range": [
7180,
9990
],
"filename": "index.js",
"lineno": 181,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7220,
7251
],
"filename": "index.js",
"lineno": 182,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7261,
7341
],
"filename": "index.js",
"lineno": 183,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7280,
7292
],
"filename": "index.js",
"lineno": 184,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7298,
7311
],
"filename": "index.js",
"lineno": 185,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7317,
7337
],
"filename": "index.js",
"lineno": 186,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7351,
7450
],
"filename": "index.js",
"lineno": 188,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7368,
7377
],
"filename": "index.js",
"lineno": 189,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7383,
7390
],
"filename": "index.js",
"lineno": 190,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7396,
7406
],
"filename": "index.js",
"lineno": 191,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7412,
7420
],
"filename": "index.js",
"lineno": 192,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7426,
7433
],
"filename": "index.js",
"lineno": 193,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7439,
7446
],
"filename": "index.js",
"lineno": 194,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7460,
7542
],
"filename": "index.js",
"lineno": 196,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7479,
7493
],
"filename": "index.js",
"lineno": 197,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7499,
7515
],
"filename": "index.js",
"lineno": 198,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7521,
7538
],
"filename": "index.js",
"lineno": 199,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7550,
7629
],
"filename": "index.js",
"lineno": 201,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7633,
7678
],
"filename": "index.js",
"lineno": 204,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7686,
7752
],
"filename": "index.js",
"lineno": 205,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7760,
7818
],
"filename": "index.js",
"lineno": 206,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
7878,
7926
],
"filename": "index.js",
"lineno": 208,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8090,
8183
],
"filename": "index.js",
"lineno": 211,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8191,
8251
],
"filename": "index.js",
"lineno": 212,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8263,
8290
],
"filename": "index.js",
"lineno": 214,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8333,
8699
],
"filename": "index.js",
"lineno": 216,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8707,
8760
],
"filename": "index.js",
"lineno": 225,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8797,
8867
],
"filename": "index.js",
"lineno": 227,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8890,
8910
],
"filename": "index.js",
"lineno": 229,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
8930,
8974
],
"filename": "index.js",
"lineno": 232,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
9048,
9272
],
"filename": "index.js",
"lineno": 235,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
9280,
9470
],
"filename": "index.js",
"lineno": 238,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
9478,
9595
],
"filename": "index.js",
"lineno": 241,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
9684,
9841
],
"filename": "index.js",
"lineno": 245,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
9849,
9977
],
"filename": "index.js",
"lineno": 246,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Finds the details for a specific repeating section\n * @param {string} section - The name of the repeating section\n * @returns {object}\n */",
"meta": {
"range": [
10145,
10274
],
"filename": "index.js",
"lineno": 256,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.\n * @param {string} section - The name of the repeating section\n */",
"meta": {
"range": [
10481,
10633
],
"filename": "index.js",
"lineno": 264,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
10600,
10607
],
"filename": "index.js",
"lineno": 266,
"columnno": 45,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
10608,
10617
],
"filename": "index.js",
"lineno": 266,
"columnno": 53,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Adds info on an attribute to an existing repeating section detail object.\n * @param {object} obj - Object describing the attribute element being created\n */",
"meta": {
"range": [
10806,
11106
],
"filename": "index.js",
"lineno": 274,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
10851,
10901
],
"filename": "index.js",
"lineno": 275,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
10909,
10952
],
"filename": "index.js",
"lineno": 276,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
10960,
10996
],
"filename": "index.js",
"lineno": 277,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"comment": "/**\n * Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.\n * @param {object} obj - The object to convert\n * @returns {object}\n */",
"meta": {
"range": [
11308,
11410
],
"filename": "index.js",
"lineno": 288,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11348,
11365
],
"filename": "index.js",
"lineno": 289,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11413,
11733
],
"filename": "index.js",
"lineno": 294,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11432,
11442
],
"filename": "index.js",
"lineno": 294,
"columnno": 19,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11444,
11445
],
"filename": "index.js",
"lineno": 294,
"columnno": 31,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11447,
11456
],
"filename": "index.js",
"lineno": 294,
"columnno": 34,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11458,
11467
],
"filename": "index.js",
"lineno": 294,
"columnno": 45,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11469,
11484
],
"filename": "index.js",
"lineno": 294,
"columnno": 56,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11486,
11501
],
"filename": "index.js",
"lineno": 294,
"columnno": 73,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11503,
11512
],
"filename": "index.js",
"lineno": 294,
"columnno": 90,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11514,
11522
],
"filename": "index.js",
"lineno": 294,
"columnno": 101,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11524,
11535
],
"filename": "index.js",
"lineno": 294,
"columnno": 111,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11537,
11550
],
"filename": "index.js",
"lineno": 294,
"columnno": 124,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11552,
11567
],
"filename": "index.js",
"lineno": 294,
"columnno": 139,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11569,
11579
],
"filename": "index.js",
"lineno": 294,
"columnno": 156,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11581,
11597
],
"filename": "index.js",
"lineno": 294,
"columnno": 168,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11599,
11614
],
"filename": "index.js",
"lineno": 294,
"columnno": 186,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11616,
11627
],
"filename": "index.js",
"lineno": 294,
"columnno": 203,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11629,
11640
],
"filename": "index.js",
"lineno": 294,
"columnno": 216,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11642,
11654
],
"filename": "index.js",
"lineno": 294,
"columnno": 229,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11656,
11673
],
"filename": "index.js",
"lineno": 294,
"columnno": 243,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11675,
11692
],
"filename": "index.js",
"lineno": 294,
"columnno": 262,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11694,
11715
],
"filename": "index.js",
"lineno": 294,
"columnno": 281,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
11717,
11731
],
"filename": "index.js",
"lineno": 294,
"columnno": 304,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
36,
63
],
"filename": "outputPug.js",
"lineno": 2,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
71,
95
],
"filename": "outputPug.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
105,
110
],
"filename": "outputPug.js",
"lineno": 4,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
129,
167
],
"filename": "outputPug.js",
"lineno": 6,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
176,
1960
],
"filename": "outputPug.js",
"lineno": 8,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
269,
304
],
"filename": "outputPug.js",
"lineno": 10,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
332,
346
],
"filename": "outputPug.js",
"lineno": 11,
"columnno": 26,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
447,
468
],
"filename": "outputPug.js",
"lineno": 14,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
480,
486
],
"filename": "outputPug.js",
"lineno": 15,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
506,
514
],
"filename": "outputPug.js",
"lineno": 16,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
673,
773
],
"filename": "outputPug.js",
"lineno": 21,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
783,
1602
],
"filename": "outputPug.js",
"lineno": 22,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
843,
908
],
"filename": "outputPug.js",
"lineno": 23,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
920,
952
],
"filename": "outputPug.js",
"lineno": 24,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1027,
1039
],
"filename": "outputPug.js",
"lineno": 27,
"columnno": 14,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1055,
1112
],
"filename": "outputPug.js",
"lineno": 28,
"columnno": 14,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1277,
1353
],
"filename": "outputPug.js",
"lineno": 34,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
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
1376,
1559
],
"filename": "outputPug.js",
"lineno": 36,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001476",
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
1634,
1704
],
"filename": "outputPug.js",
"lineno": 47,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001511",
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
1716,
1833
],
"filename": "outputPug.js",
"lineno": 48,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001524",
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
1845,
1889
],
"filename": "outputPug.js",
"lineno": 51,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001552",
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
1963,
1989
],
"filename": "outputPug.js",
"lineno": 56,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001574",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001582",
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
36,
63
],
"filename": "outputTests.js",
"lineno": 2,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001588",
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
72,
2030
],
"filename": "outputTests.js",
"lineno": 4,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001594",
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
128,
187
],
"filename": "outputTests.js",
"lineno": 5,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001601",
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
197,
266
],
"filename": "outputTests.js",
"lineno": 6,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001610",
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
276,
335
],
"filename": "outputTests.js",
"lineno": 7,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001619",
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
374,
587
],
"filename": "outputTests.js",
"lineno": 9,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001627",
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
475,
534
],
"filename": "outputTests.js",
"lineno": 10,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001644",
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
597,
1609
],
"filename": "outputTests.js",
"lineno": 14,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001664",
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
770,
820
],
"filename": "outputTests.js",
"lineno": 17,
"columnno": 14,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001694",
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
930,
946
],
"filename": "outputTests.js",
"lineno": 21,
"columnno": 14,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001725",
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
1051,
1188
],
"filename": "outputTests.js",
"lineno": 24,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001736",
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
1301,
1322
],
"filename": "outputTests.js",
"lineno": 31,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001756",
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
1425,
1487
],
"filename": "outputTests.js",
"lineno": 35,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001771",
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
1514,
1557
],
"filename": "outputTests.js",
"lineno": 39,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001785",
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
1619,
1756
],
"filename": "outputTests.js",
"lineno": 45,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001800",
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
1766,
1819
],
"filename": "outputTests.js",
"lineno": 47,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001824",
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
1829,
1896
],
"filename": "outputTests.js",
"lineno": 48,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001834",
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
1928,
1942
],
"filename": "outputTests.js",
"lineno": 49,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001852",
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
2033,
2061
],
"filename": "outputTests.js",
"lineno": 53,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001867",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001875",
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
42,
72
],
"filename": "processSheet.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001881",
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
80,
120
],
"filename": "processSheet.js",
"lineno": 4,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001887",
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
128,
164
],
"filename": "processSheet.js",
"lineno": 5,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001893",
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
172,
206
],
"filename": "processSheet.js",
"lineno": 6,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001899",
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
215,
464
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001905",
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
232,
237
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 23,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001909",
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
238,
254
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 29,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001911",
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
255,
274
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 46,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001913",
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
275,
282
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 66,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001915",
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
283,
290
],
"filename": "processSheet.js",
"lineno": 8,
"columnno": 74,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001917",
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
411,
427
],
"filename": "processSheet.js",
"lineno": 11,
"columnno": 23,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001944",
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
428,
447
],
"filename": "processSheet.js",
"lineno": 11,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001946",
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
448,
455
],
"filename": "processSheet.js",
"lineno": 11,
"columnno": 60,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001948",
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
473,
750
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001951",
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
489,
494
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 22,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001955",
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
495,
511
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 28,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001957",
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
512,
531
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 45,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001959",
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
532,
547
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 65,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001961",
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
548,
555
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 81,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001963",
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
556,
562
],
"filename": "processSheet.js",
"lineno": 15,
"columnno": 89,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001965",
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
680,
696
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 22,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001992",
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
697,
716
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 39,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001994",
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
717,
732
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 59,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001996",
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
733,
740
],
"filename": "processSheet.js",
"lineno": 18,
"columnno": 75,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100001998",
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
759,
1776
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002001",
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
782,
794
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 29,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002005",
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
795,
806
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 42,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002009",
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
807,
833
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 54,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002011",
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
834,
849
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 81,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002015",
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
850,
881
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 97,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002017",
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
862,
880
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 109,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002021",
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
882,
896
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 129,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002023",
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
897,
909
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 144,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002027",
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
910,
921
],
"filename": "processSheet.js",
"lineno": 23,
"columnno": 157,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002031",
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
938,
970
],
"filename": "processSheet.js",
"lineno": 24,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002037",
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
980,
996
],
"filename": "processSheet.js",
"lineno": 25,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002046",
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
1006,
1023
],
"filename": "processSheet.js",
"lineno": 26,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002050",
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
1281,
1377
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002098",
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
1305,
1310
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 36,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002104",
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
1311,
1327
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 42,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002106",
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
1328,
1347
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 59,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002108",
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
1348,
1367
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 79,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002110",
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
1368,
1375
],
"filename": "processSheet.js",
"lineno": 31,
"columnno": 99,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002112",
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
1392,
1500
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002115",
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
1414,
1419
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 34,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002121",
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
1420,
1436
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002123",
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
1437,
1456
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 57,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002125",
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
1457,
1472
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 77,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002127",
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
1473,
1491
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 93,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002129",
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
1492,
1498
],
"filename": "processSheet.js",
"lineno": 33,
"columnno": 112,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002131",
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
1644,
1686
],
"filename": "processSheet.js",
"lineno": 43,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002152",
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
1696,
1740
],
"filename": "processSheet.js",
"lineno": 44,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002161",
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
1779,
1808
],
"filename": "processSheet.js",
"lineno": 48,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002174",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002182",
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
34,
56
],
"filename": "renderPug.js",
"lineno": 2,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002188",
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
65,
100
],
"filename": "renderPug.js",
"lineno": 4,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002194",
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
108,
146
],
"filename": "renderPug.js",
"lineno": 5,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002200",
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
154,
188
],
"filename": "renderPug.js",
"lineno": 6,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002206",
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
"comment": "/**\n * Renders pug into html text\n * @param {string} source - The path to the file you want to parse as pug.\n * @param {string} destination - The path to the file where you want to store the rendered HTML.\n * @param {object} [options] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:\n * @param {boolean} [options.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.\n * @returns {Promise<string|null>} - The rendered HTML or null if an error occurred\n */",
"meta": {
"range": [
992,
1904
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002212",
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
1012,
1018
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 26,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002216",
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
1019,
1030
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 33,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002218",
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
1031,
1046
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 45,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002220",
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
1047,
1075
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 61,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002222",
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
1056,
1074
],
"filename": "renderPug.js",
"lineno": 17,
"columnno": 70,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002226",
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
1091,
1127
],
"filename": "renderPug.js",
"lineno": 18,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002230",
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
1146,
1169
],
"filename": "renderPug.js",
"lineno": 20,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002239",
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
1200,
1351
],
"filename": "renderPug.js",
"lineno": 22,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002250",
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
1235,
1246
],
"filename": "renderPug.js",
"lineno": 23,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002258",
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
1284,
1299
],
"filename": "renderPug.js",
"lineno": 26,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002264",
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
1307,
1344
],
"filename": "renderPug.js",
"lineno": 27,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002266",
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
1907,
1933
],
"filename": "renderPug.js",
"lineno": 47,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002333",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002341",
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
45,
67
],
"filename": "renderSASS.js",
"lineno": 2,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002347",
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
75,
102
],
"filename": "renderSASS.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002353",
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
112,
125
],
"filename": "renderSASS.js",
"lineno": 4,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002361",
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
153,
188
],
"filename": "renderSASS.js",
"lineno": 6,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002367",
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
"comment": "/**\n * Renders SCSS into CSS text\n * @param {string} source - The path to the file you want to parse as SCSS.\n * @param {string} destination - The path to the file where you want to store the rendered CSS.\n * @param {object} [options = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.\n * @returns {Promise<string|null>} - The rendered css or null if an error occurred\n */",
"meta": {
"range": [
670,
1799
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002373",
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
691,
697
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 27,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002377",
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
698,
709
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 34,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002379",
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
710,
720
],
"filename": "renderSASS.js",
"lineno": 15,
"columnno": 46,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002381",
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
745,
790
],
"filename": "renderSASS.js",
"lineno": 17,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002389",
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
802,
1186
],
"filename": "renderSASS.js",
"lineno": 18,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002403",
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
827,
840
],
"filename": "renderSASS.js",
"lineno": 19,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002406",
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
848,
1180
],
"filename": "renderSASS.js",
"lineno": 20,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002408",
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
881,
1162
],
"filename": "renderSASS.js",
"lineno": 22,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002411",
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
977,
1077
],
"filename": "renderSASS.js",
"lineno": 24,
"columnno": 18,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002425",
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
1097,
1122
],
"filename": "renderSASS.js",
"lineno": 25,
"columnno": 18,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002441",
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
1198,
1224
],
"filename": "renderSASS.js",
"lineno": 31,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002449",
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
1421,
1424
],
"filename": "renderSASS.js",
"lineno": 38,
"columnno": 11,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002485",
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
1802,
1829
],
"filename": "renderSASS.js",
"lineno": 57,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002544",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002552",
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
631
],
"filename": "resolvePaths.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002558",
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
154,
215
],
"filename": "resolvePaths.js",
"lineno": 5,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002577",
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
245,
288
],
"filename": "resolvePaths.js",
"lineno": 8,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002585",
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
298,
486
],
"filename": "resolvePaths.js",
"lineno": 9,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002596",
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
496,
598
],
"filename": "resolvePaths.js",
"lineno": 16,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002623",
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
633,
662
],
"filename": "resolvePaths.js",
"lineno": 20,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002648",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002656",
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
44,
84
],
"filename": "watch.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002662",
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
93,
1063
],
"filename": "watch.js",
"lineno": 5,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002668",
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
104,
116
],
"filename": "watch.js",
"lineno": 5,
"columnno": 17,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002672",
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
117,
128
],
"filename": "watch.js",
"lineno": 5,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002676",
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
129,
147
],
"filename": "watch.js",
"lineno": 5,
"columnno": 42,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002678",
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
148,
163
],
"filename": "watch.js",
"lineno": 5,
"columnno": 61,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002680",
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
164,
195
],
"filename": "watch.js",
"lineno": 5,
"columnno": 77,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002682",
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
176,
194
],
"filename": "watch.js",
"lineno": 5,
"columnno": 89,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002686",
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
196,
210
],
"filename": "watch.js",
"lineno": 5,
"columnno": 109,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002688",
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
247,
262
],
"filename": "watch.js",
"lineno": 8,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002698",
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
270,
720
],
"filename": "watch.js",
"lineno": 9,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002700",
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
807,
839
],
"filename": "watch.js",
"lineno": 23,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002747",
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
853,
889
],
"filename": "watch.js",
"lineno": 24,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002755",
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
959,
965
],
"filename": "watch.js",
"lineno": 28,
"columnno": 26,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002774",
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
966,
977
],
"filename": "watch.js",
"lineno": 28,
"columnno": 33,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002776",
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
978,
996
],
"filename": "watch.js",
"lineno": 28,
"columnno": 45,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002778",
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
997,
1012
],
"filename": "watch.js",
"lineno": 28,
"columnno": 64,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002780",
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
1013,
1023
],
"filename": "watch.js",
"lineno": 28,
"columnno": 80,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002782",
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
1024,
1035
],
"filename": "watch.js",
"lineno": 28,
"columnno": 91,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002784",
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
1036,
1043
],
"filename": "watch.js",
"lineno": 28,
"columnno": 103,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002786",
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
1044,
1050
],
"filename": "watch.js",
"lineno": 28,
"columnno": 111,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002788",
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
1066,
1089
],
"filename": "watch.js",
"lineno": 32,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/render",
"code": {
"id": "astnode100002791",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
163,
1594
],
"filename": "accessSheet.js",
"lineno": 5,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002799",
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
229,
260
],
"filename": "accessSheet.js",
"lineno": 7,
"columnno": 15,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002811",
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
261,
1589
],
"filename": "accessSheet.js",
"lineno": 7,
"columnno": 47,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002816",
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
304,
366
],
"filename": "accessSheet.js",
"lineno": 8,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002823",
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
379,
417
],
"filename": "accessSheet.js",
"lineno": 9,
"columnno": 11,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002840",
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
642,
652
],
"filename": "accessSheet.js",
"lineno": 14,
"columnno": 27,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002883",
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
653,
661
],
"filename": "accessSheet.js",
"lineno": 14,
"columnno": 38,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002885",
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
662,
666
],
"filename": "accessSheet.js",
"lineno": 14,
"columnno": 47,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002887",
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
950,
960
],
"filename": "accessSheet.js",
"lineno": 22,
"columnno": 19,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002922",
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
961,
969
],
"filename": "accessSheet.js",
"lineno": 22,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002924",
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
970,
974
],
"filename": "accessSheet.js",
"lineno": 22,
"columnno": 39,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002926",
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
1017,
1029
],
"filename": "accessSheet.js",
"lineno": 26,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002934",
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
1207,
1217
],
"filename": "accessSheet.js",
"lineno": 30,
"columnno": 25,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002969",
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
1218,
1226
],
"filename": "accessSheet.js",
"lineno": 30,
"columnno": 36,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002971",
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
1227,
1231
],
"filename": "accessSheet.js",
"lineno": 30,
"columnno": 45,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002973",
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
1388,
1398
],
"filename": "accessSheet.js",
"lineno": 35,
"columnno": 20,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002987",
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
1399,
1407
],
"filename": "accessSheet.js",
"lineno": 35,
"columnno": 31,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002989",
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
1415,
1456
],
"filename": "accessSheet.js",
"lineno": 36,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100002992",
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
1603,
1682
],
"filename": "accessSheet.js",
"lineno": 43,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003018",
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
"comment": "/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof Sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */",
"meta": {
"range": [
2150,
2423
],
"filename": "accessSheet.js",
"lineno": 56,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003029",
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
"//Call from an attribute change\non('change:an_attribute',k.accessSheet);"
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
2190,
2214
],
"filename": "accessSheet.js",
"lineno": 57,
"columnno": 9,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003038",
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
2227,
2232
],
"filename": "accessSheet.js",
"lineno": 58,
"columnno": 9,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003048",
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
2251,
2418
],
"filename": "accessSheet.js",
"lineno": 59,
"columnno": 15,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003054",
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
2298,
2341
],
"filename": "accessSheet.js",
"lineno": 60,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003061",
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
2373,
2378
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003075",
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
2379,
2386
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 36,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003077",
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
2387,
2397
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 44,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003079",
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
2398,
2406
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 55,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003081",
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
2407,
2411
],
"filename": "accessSheet.js",
"lineno": 61,
"columnno": 64,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003083",
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
2425,
2456
],
"filename": "accessSheet.js",
"lineno": 64,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003086",
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
127,
6609
],
"filename": "attribute_proxy.js",
"lineno": 5,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003094",
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
263,
956
],
"filename": "attribute_proxy.js",
"lineno": 7,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003100",
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
308,
362
],
"filename": "attribute_proxy.js",
"lineno": 8,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003107",
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
372,
494
],
"filename": "attribute_proxy.js",
"lineno": 9,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003117",
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
504,
577
],
"filename": "attribute_proxy.js",
"lineno": 14,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003133",
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
587,
611
],
"filename": "attribute_proxy.js",
"lineno": 15,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003147",
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
626,
644
],
"filename": "attribute_proxy.js",
"lineno": 16,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003158",
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
713,
756
],
"filename": "attribute_proxy.js",
"lineno": 19,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003171",
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
804,
849
],
"filename": "attribute_proxy.js",
"lineno": 21,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003184",
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
859,
911
],
"filename": "attribute_proxy.js",
"lineno": 22,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003192",
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
969,
1402
],
"filename": "attribute_proxy.js",
"lineno": 28,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003208",
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
1235,
1246
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 21,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003258",
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
1247,
1257
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 33,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003260",
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
1258,
1266
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 44,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003262",
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
1267,
1271
],
"filename": "attribute_proxy.js",
"lineno": 32,
"columnno": 53,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003264",
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
1415,
1776
],
"filename": "attribute_proxy.js",
"lineno": 37,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003278",
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
1606,
1617
],
"filename": "attribute_proxy.js",
"lineno": 41,
"columnno": 32,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003313",
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
1618,
1628
],
"filename": "attribute_proxy.js",
"lineno": 41,
"columnno": 44,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003315",
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
1629,
1637
],
"filename": "attribute_proxy.js",
"lineno": 41,
"columnno": 55,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003317",
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
1786,
1962
],
"filename": "attribute_proxy.js",
"lineno": 45,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003333",
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
1915,
1922
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 15,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003357",
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
1923,
1933
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 23,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003359",
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
1934,
1942
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 34,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003361",
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
1943,
1947
],
"filename": "attribute_proxy.js",
"lineno": 47,
"columnno": 43,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003363",
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
1972,
3300
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003366",
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
1998,
2003
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 34,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003370",
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
2004,
2011
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003372",
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
2012,
2022
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 48,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003374",
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
2023,
2031
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 59,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003376",
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
2032,
2036
],
"filename": "attribute_proxy.js",
"lineno": 50,
"columnno": 68,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003378",
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
2361,
2368
],
"filename": "attribute_proxy.js",
"lineno": 59,
"columnno": 11,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003429",
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
2892,
2981
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003486",
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
2947,
2954
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 63,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003499",
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
2955,
2965
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 71,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003501",
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
2966,
2974
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 82,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003503",
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
2975,
2979
],
"filename": "attribute_proxy.js",
"lineno": 69,
"columnno": 91,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003505",
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
3269,
3279
],
"filename": "attribute_proxy.js",
"lineno": 77,
"columnno": 20,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003554",
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
3280,
3288
],
"filename": "attribute_proxy.js",
"lineno": 77,
"columnno": 31,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003556",
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
3289,
3293
],
"filename": "attribute_proxy.js",
"lineno": 77,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003558",
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
3310,
3515
],
"filename": "attribute_proxy.js",
"lineno": 79,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003561",
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
3329,
3339
],
"filename": "attribute_proxy.js",
"lineno": 80,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003564",
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
3345,
3366
],
"filename": "attribute_proxy.js",
"lineno": 81,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003566",
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
3372,
3384
],
"filename": "attribute_proxy.js",
"lineno": 82,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003570",
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
3390,
3399
],
"filename": "attribute_proxy.js",
"lineno": 83,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003572",
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
3405,
3412
],
"filename": "attribute_proxy.js",
"lineno": 84,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003574",
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
3418,
3433
],
"filename": "attribute_proxy.js",
"lineno": 85,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003576",
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
3439,
3452
],
"filename": "attribute_proxy.js",
"lineno": 86,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003578",
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
3458,
3474
],
"filename": "attribute_proxy.js",
"lineno": 87,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003580",
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
3480,
3495
],
"filename": "attribute_proxy.js",
"lineno": 88,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003582",
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
3501,
3511
],
"filename": "attribute_proxy.js",
"lineno": 89,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003584",
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
3525,
6562
],
"filename": "attribute_proxy.js",
"lineno": 91,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003587",
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
3545,
5660
],
"filename": "attribute_proxy.js",
"lineno": 92,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003590",
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
3788,
3798
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 15,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003606",
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
3799,
3807
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 26,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003608",
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
3808,
3812
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 35,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003610",
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
3813,
3821
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003612",
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
3822,
3827
],
"filename": "attribute_proxy.js",
"lineno": 96,
"columnno": 49,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003614",
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
3954,
3992
],
"filename": "attribute_proxy.js",
"lineno": 98,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003638",
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
4010,
4066
],
"filename": "attribute_proxy.js",
"lineno": 99,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003647",
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
4032,
4059
],
"filename": "attribute_proxy.js",
"lineno": 99,
"columnno": 38,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003652",
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
4106,
4113
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 38,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003661",
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
4114,
4124
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 46,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003663",
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
4125,
4133
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 57,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003665",
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
4134,
4138
],
"filename": "attribute_proxy.js",
"lineno": 100,
"columnno": 66,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003667",
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
4178,
4197
],
"filename": "attribute_proxy.js",
"lineno": 102,
"columnno": 19,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003674",
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
4217,
4519
],
"filename": "attribute_proxy.js",
"lineno": 103,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003679",
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
4573,
4611
],
"filename": "attribute_proxy.js",
"lineno": 111,
"columnno": 52,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003731",
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
4632,
4652
],
"filename": "attribute_proxy.js",
"lineno": 112,
"columnno": 18,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003743",
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
4666,
4682
],
"filename": "attribute_proxy.js",
"lineno": 113,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003749",
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
4873,
4881
],
"filename": "attribute_proxy.js",
"lineno": 120,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003784",
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
4968,
4998
],
"filename": "attribute_proxy.js",
"lineno": 123,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003797",
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
5080,
5108
],
"filename": "attribute_proxy.js",
"lineno": 126,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003814",
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
5160,
5191
],
"filename": "attribute_proxy.js",
"lineno": 129,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003824",
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
5234,
5301
],
"filename": "attribute_proxy.js",
"lineno": 132,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003833",
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
5315,
5336
],
"filename": "attribute_proxy.js",
"lineno": 133,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003845",
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
5405,
5425
],
"filename": "attribute_proxy.js",
"lineno": 135,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003862",
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
5569,
5610
],
"filename": "attribute_proxy.js",
"lineno": 137,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003888",
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
5666,
6340
],
"filename": "attribute_proxy.js",
"lineno": 142,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003897",
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
5928,
5967
],
"filename": "attribute_proxy.js",
"lineno": 147,
"columnno": 14,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003922",
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
5979,
6009
],
"filename": "attribute_proxy.js",
"lineno": 148,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003931",
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
6153,
6178
],
"filename": "attribute_proxy.js",
"lineno": 152,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003970",
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
6346,
6558
],
"filename": "attribute_proxy.js",
"lineno": 159,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100003989",
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
"comment": "/**\n * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.\n * @memberof Utilities\n * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.\n * @param {object} optionsObj - Object that contains options to use for this registration.\n * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `\"opener\"`, `\"updater\"`, and `\"default\"`. `\"default\"` is always used, and never needs to be passed.\n * @returns {boolean} - True if the registration succeeded, false if it failed.\n * @example\n * //Basic Registration\n * const myFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({myFunc});\n * \n * //Register a function to run on sheet open\n * const openFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({openFunc},{type:['opener']})\n * \n * //Register a function to run on all events\n * const allFunc = function({trigger,attributes,sections,casc}){};\n * k.registerFuncs({allFunc},{type:['all']})\n */",
"meta": {
"range": [
7848,
8878
],
"filename": "attribute_proxy.js",
"lineno": 189,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004022",
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
"//Basic Registration\nconst myFunc = function({trigger,attributes,sections,casc}){};\nk.registerFuncs({myFunc});\n\n//Register a function to run on sheet open\nconst openFunc = function({trigger,attributes,sections,casc}){};\nk.registerFuncs({openFunc},{type:['opener']})\n\n//Register a function to run on all events\nconst allFunc = function({trigger,attributes,sections,casc}){};\nk.registerFuncs({allFunc},{type:['all']})"
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
8081,
8153
],
"filename": "attribute_proxy.js",
"lineno": 194,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004049",
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
8163,
8306
],
"filename": "attribute_proxy.js",
"lineno": 195,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004064",
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
8182,
8203
],
"filename": "attribute_proxy.js",
"lineno": 196,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004067",
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
8209,
8233
],
"filename": "attribute_proxy.js",
"lineno": 197,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004069",
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
8239,
8258
],
"filename": "attribute_proxy.js",
"lineno": 198,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004071",
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
8264,
8281
],
"filename": "attribute_proxy.js",
"lineno": 199,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004073",
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
8287,
8302
],
"filename": "attribute_proxy.js",
"lineno": 200,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004075",
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
8314,
8322
],
"filename": "attribute_proxy.js",
"lineno": 202,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004078",
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
8516,
8532
],
"filename": "attribute_proxy.js",
"lineno": 207,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004117",
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
8587,
8617
],
"filename": "attribute_proxy.js",
"lineno": 209,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004127",
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
8627,
8671
],
"filename": "attribute_proxy.js",
"lineno": 210,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004135",
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
8818,
8834
],
"filename": "attribute_proxy.js",
"lineno": 213,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004152",
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
8880,
8916
],
"filename": "attribute_proxy.js",
"lineno": 219,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004158",
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
"comment": "/**\n * Function that sets up the action calls used in the roller mixin.\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n * @param {object[]} sections - All the repeating section IDs\n */",
"meta": {
"range": [
9159,
9635
],
"filename": "attribute_proxy.js",
"lineno": 227,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004164",
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
9186,
9196
],
"filename": "attribute_proxy.js",
"lineno": 227,
"columnno": 33,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004168",
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
9197,
9205
],
"filename": "attribute_proxy.js",
"lineno": 227,
"columnno": 44,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004170",
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
9307,
9344
],
"filename": "attribute_proxy.js",
"lineno": 230,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004190",
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
9411,
9518
],
"filename": "attribute_proxy.js",
"lineno": 233,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004212",
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
9547,
9620
],
"filename": "attribute_proxy.js",
"lineno": 236,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004237",
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
9637,
9674
],
"filename": "attribute_proxy.js",
"lineno": 240,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004253",
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
"comment": "/**\n * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.\n * @memberof Sheetworkers\n * @param {string} funcName - The name of the function to invoke.\n * @param {...any} args - The arguments to call the function with.\n * @returns {function|null}\n * @example\n * //Call myFunc with two arguments\n * k.callFunc('myFunc','an argument','another argument');\n */",
"meta": {
"range": [
10217,
10430
],
"filename": "attribute_proxy.js",
"lineno": 252,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004259",
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
"//Call myFunc with two arguments\nk.callFunc('myFunc','an argument','another argument');"
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
10432,
10458
],
"filename": "attribute_proxy.js",
"lineno": 261,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004296",
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
"comment": "/**\n * The K-scaffold provides several variables to allow your scripts to tap into its information flow.\n * @namespace Sheetworkers.Variables\n */",
"meta": {
"filename": "kvariables.js",
"lineno": 1,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"comment": "/**\n * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`\n * @memberof Variables\n * @var\n * @type {string}\n */",
"meta": {
"range": [
337,
374
],
"filename": "kvariables.js",
"lineno": 11,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004304",
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
376,
404
],
"filename": "kvariables.js",
"lineno": 12,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004308",
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
"comment": "/**\n\t* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`\n * @memberof Variables\n\t* @var\n\t* @type {number}\n\t*/",
"meta": {
"range": [
672,
683
],
"filename": "kvariables.js",
"lineno": 19,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004314",
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
685,
709
],
"filename": "kvariables.js",
"lineno": 20,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004318",
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
"comment": "/**\n\t* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.\n * @memberof Variables\n\t* @var\n\t* @type {boolean}\n\t*/",
"meta": {
"range": [
1028,
1045
],
"filename": "kvariables.js",
"lineno": 27,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004324",
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
1047,
1075
],
"filename": "kvariables.js",
"lineno": 28,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004328",
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
1083,
1093
],
"filename": "kvariables.js",
"lineno": 29,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004334",
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
1095,
1115
],
"filename": "kvariables.js",
"lineno": 30,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004338",
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
1123,
1142
],
"filename": "kvariables.js",
"lineno": 31,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004344",
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
1150,
1167
],
"filename": "kvariables.js",
"lineno": 32,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004348",
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
1175,
1193
],
"filename": "kvariables.js",
"lineno": 33,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004352",
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
1201,
1217
],
"filename": "kvariables.js",
"lineno": 34,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004356",
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
1225,
1238
],
"filename": "kvariables.js",
"lineno": 35,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004360",
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
1247,
1275
],
"filename": "kvariables.js",
"lineno": 37,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004364",
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
1283,
1312
],
"filename": "kvariables.js",
"lineno": 38,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004368",
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
94,
108
],
"filename": "listeners.js",
"lineno": 3,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004374",
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
"comment": "/**\n * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.\n * @memberof Variables\n * @var\n * @type {array}\n */",
"meta": {
"range": [
280,
564
],
"filename": "listeners.js",
"lineno": 11,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004378",
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
484,
538
],
"filename": "listeners.js",
"lineno": 16,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004420",
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
566,
590
],
"filename": "listeners.js",
"lineno": 20,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004433",
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
599,
1025
],
"filename": "listeners.js",
"lineno": 22,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004439",
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
678,
705
],
"filename": "listeners.js",
"lineno": 24,
"columnno": 9,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004452",
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
706,
711
],
"filename": "listeners.js",
"lineno": 24,
"columnno": 37,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004458",
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
"comment": "/**\n * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.\n * @memberof Sheetworkers\n * @param {object} event - The R20 event object\n */",
"meta": {
"range": [
1356,
2039
],
"filename": "listeners.js",
"lineno": 42,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004506",
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
1443,
1479
],
"filename": "listeners.js",
"lineno": 44,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004520",
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
1501,
2031
],
"filename": "listeners.js",
"lineno": 46,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004532",
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
1552,
1590
],
"filename": "listeners.js",
"lineno": 47,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004539",
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
1605,
1608
],
"filename": "listeners.js",
"lineno": 48,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004549",
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
1618,
1648
],
"filename": "listeners.js",
"lineno": 49,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004552",
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
1672,
1682
],
"filename": "listeners.js",
"lineno": 50,
"columnno": 22,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004564",
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
1683,
1691
],
"filename": "listeners.js",
"lineno": 50,
"columnno": 33,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004566",
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
1707,
1758
],
"filename": "listeners.js",
"lineno": 51,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004569",
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
1908,
1918
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 29,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004605",
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
1919,
1927
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004607",
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
1928,
1932
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 49,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004609",
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
1933,
1940
],
"filename": "listeners.js",
"lineno": 55,
"columnno": 54,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004611",
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
1998,
2008
],
"filename": "listeners.js",
"lineno": 59,
"columnno": 22,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
2009,
2017
],
"filename": "listeners.js",
"lineno": 59,
"columnno": 33,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
2018,
2022
],
"filename": "listeners.js",
"lineno": 59,
"columnno": 42,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
2041,
2064
],
"filename": "listeners.js",
"lineno": 63,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004626",
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
"comment": "/**\n * @namespace {object} mock20\n */",
"meta": {
"filename": "mock20.js",
"lineno": 4,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"comment": "/**\n * @memberof mock20\n * @var\n * A mock environment variable for keeping track of triggers, other character information, and predefined query results.\n * @property {array} triggers - The triggers that have been registered by `on`\n * @property {object} queryResponses - Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.\n */",
"meta": {
"filename": "mock20.js",
"lineno": 7,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
648,
923
],
"filename": "mock20.js",
"lineno": 14,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004642",
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
696,
708
],
"filename": "mock20.js",
"lineno": 16,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004645",
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
712,
814
],
"filename": "mock20.js",
"lineno": 17,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004647",
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
818,
921
],
"filename": "mock20.js",
"lineno": 20,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004649",
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
925,
957
],
"filename": "mock20.js",
"lineno": 24,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004652",
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
966,
1048
],
"filename": "mock20.js",
"lineno": 26,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004658",
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
1028,
1035
],
"filename": "mock20.js",
"lineno": 27,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004676",
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
1037,
1041
],
"filename": "mock20.js",
"lineno": 27,
"columnno": 39,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004678",
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
1050,
1064
],
"filename": "mock20.js",
"lineno": 29,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004681",
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
1072,
1308
],
"filename": "mock20.js",
"lineno": 30,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004687",
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
1118,
1129
],
"filename": "mock20.js",
"lineno": 31,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004698",
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
1144,
1148
],
"filename": "mock20.js",
"lineno": 32,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004703",
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
1201,
1244
],
"filename": "mock20.js",
"lineno": 33,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004714",
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
1310,
1336
],
"filename": "mock20.js",
"lineno": 37,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004733",
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
1344,
1597
],
"filename": "mock20.js",
"lineno": 38,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004739",
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
1442,
1459
],
"filename": "mock20.js",
"lineno": 39,
"columnno": 49,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004759",
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
1474,
1478
],
"filename": "mock20.js",
"lineno": 40,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004764",
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
1496,
1539
],
"filename": "mock20.js",
"lineno": 41,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004769",
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
1599,
1625
],
"filename": "mock20.js",
"lineno": 45,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004787",
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
1633,
2039
],
"filename": "mock20.js",
"lineno": 46,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004793",
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
1688,
1696
],
"filename": "mock20.js",
"lineno": 47,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004804",
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
1706,
1790
],
"filename": "mock20.js",
"lineno": 48,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004808",
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
1800,
1835
],
"filename": "mock20.js",
"lineno": 49,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004824",
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
1850,
1854
],
"filename": "mock20.js",
"lineno": 50,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004831",
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
1955,
1980
],
"filename": "mock20.js",
"lineno": 53,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004856",
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
2041,
2077
],
"filename": "mock20.js",
"lineno": 56,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004873",
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
2085,
2446
],
"filename": "mock20.js",
"lineno": 57,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004879",
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
2134,
2142
],
"filename": "mock20.js",
"lineno": 58,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004889",
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
2152,
2236
],
"filename": "mock20.js",
"lineno": 59,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004893",
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
2246,
2281
],
"filename": "mock20.js",
"lineno": 60,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004909",
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
2296,
2300
],
"filename": "mock20.js",
"lineno": 61,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004916",
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
2401,
2426
],
"filename": "mock20.js",
"lineno": 64,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004941",
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
2448,
2492
],
"filename": "mock20.js",
"lineno": 67,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004951",
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
2500,
2691
],
"filename": "mock20.js",
"lineno": 68,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004957",
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
2545,
2580
],
"filename": "mock20.js",
"lineno": 69,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004967",
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
2595,
2599
],
"filename": "mock20.js",
"lineno": 70,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004974",
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
2693,
2739
],
"filename": "mock20.js",
"lineno": 74,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100004995",
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
2747,
3545
],
"filename": "mock20.js",
"lineno": 75,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005001",
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
2806,
2828
],
"filename": "mock20.js",
"lineno": 76,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005012",
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
3069,
3151
],
"filename": "mock20.js",
"lineno": 83,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005037",
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
3088,
3102
],
"filename": "mock20.js",
"lineno": 84,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005040",
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
3110,
3128
],
"filename": "mock20.js",
"lineno": 85,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005042",
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
3136,
3144
],
"filename": "mock20.js",
"lineno": 86,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005044",
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
3177,
3212
],
"filename": "mock20.js",
"lineno": 88,
"columnno": 24,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005051",
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
3323,
3337
],
"filename": "mock20.js",
"lineno": 91,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005077",
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
3354,
3358
],
"filename": "mock20.js",
"lineno": 92,
"columnno": 15,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005082",
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
3547,
3591
],
"filename": "mock20.js",
"lineno": 98,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005116",
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
3599,
4265
],
"filename": "mock20.js",
"lineno": 99,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005122",
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
3634,
3639
],
"filename": "mock20.js",
"lineno": 100,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005131",
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
3645,
3651
],
"filename": "mock20.js",
"lineno": 101,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005134",
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
3685,
3713
],
"filename": "mock20.js",
"lineno": 103,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005142",
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
3721,
3732
],
"filename": "mock20.js",
"lineno": 104,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005151",
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
3738,
3743
],
"filename": "mock20.js",
"lineno": 105,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005157",
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
3758,
3770
],
"filename": "mock20.js",
"lineno": 106,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005162",
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
3772,
3777
],
"filename": "mock20.js",
"lineno": 106,
"columnno": 27,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005167",
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
3799,
3887
],
"filename": "mock20.js",
"lineno": 107,
"columnno": 7,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005177",
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
3897,
3919
],
"filename": "mock20.js",
"lineno": 108,
"columnno": 7,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005188",
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
3926,
3940
],
"filename": "mock20.js",
"lineno": 109,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005198",
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
3966,
3972
],
"filename": "mock20.js",
"lineno": 111,
"columnno": 11,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005209",
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
4002,
4010
],
"filename": "mock20.js",
"lineno": 111,
"columnno": 47,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005224",
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
4042,
4047
],
"filename": "mock20.js",
"lineno": 113,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005235",
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
4062,
4099
],
"filename": "mock20.js",
"lineno": 113,
"columnno": 36,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005244",
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
4110,
4115
],
"filename": "mock20.js",
"lineno": 114,
"columnno": 9,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005259",
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
4136,
4220
],
"filename": "mock20.js",
"lineno": 115,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005268",
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
4267,
4301
],
"filename": "mock20.js",
"lineno": 119,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005285",
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
4309,
4385
],
"filename": "mock20.js",
"lineno": 120,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005291",
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
4387,
4423
],
"filename": "mock20.js",
"lineno": 123,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005308",
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
4431,
4765
],
"filename": "mock20.js",
"lineno": 124,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005314",
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
4522,
4585
],
"filename": "mock20.js",
"lineno": 126,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005334",
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
4704,
4727
],
"filename": "mock20.js",
"lineno": 130,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005367",
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
4767,
4803
],
"filename": "mock20.js",
"lineno": 136,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005370",
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
4811,
4852
],
"filename": "mock20.js",
"lineno": 137,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005376",
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
4854,
4902
],
"filename": "mock20.js",
"lineno": 138,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005386",
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
4977,
5143
],
"filename": "mock20.js",
"lineno": 141,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005392",
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
5025,
5084
],
"filename": "mock20.js",
"lineno": 142,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005398",
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
5088,
5140
],
"filename": "mock20.js",
"lineno": 143,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005402",
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
5152,
5366
],
"filename": "mock20.js",
"lineno": 146,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005410",
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
5193,
5287
],
"filename": "mock20.js",
"lineno": 147,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005416",
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
5297,
5343
],
"filename": "mock20.js",
"lineno": 150,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005430",
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
5375,
5613
],
"filename": "mock20.js",
"lineno": 154,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005440",
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
5423,
5485
],
"filename": "mock20.js",
"lineno": 155,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005446",
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
5622,
5687
],
"filename": "mock20.js",
"lineno": 160,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005475",
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
5696,
5885
],
"filename": "mock20.js",
"lineno": 162,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005486",
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
5732,
5765
],
"filename": "mock20.js",
"lineno": 163,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005492",
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
5894,
6245
],
"filename": "mock20.js",
"lineno": 168,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005522",
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
5935,
5983
],
"filename": "mock20.js",
"lineno": 169,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005528",
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
6018,
6031
],
"filename": "mock20.js",
"lineno": 171,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005541",
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
6119,
6124
],
"filename": "mock20.js",
"lineno": 174,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005562",
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
6158,
6184
],
"filename": "mock20.js",
"lineno": 175,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005572",
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
6254,
6846
],
"filename": "mock20.js",
"lineno": 182,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005586",
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
6307,
6358
],
"filename": "mock20.js",
"lineno": 183,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005593",
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
6368,
6416
],
"filename": "mock20.js",
"lineno": 185,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005602",
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
6545,
6554
],
"filename": "mock20.js",
"lineno": 189,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005634",
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
6569,
6574
],
"filename": "mock20.js",
"lineno": 190,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005639",
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
6602,
6624
],
"filename": "mock20.js",
"lineno": 191,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005649",
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
6636,
6716
],
"filename": "mock20.js",
"lineno": 193,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005657",
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
6728,
6758
],
"filename": "mock20.js",
"lineno": 194,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005666",
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
6764,
6809
],
"filename": "mock20.js",
"lineno": 195,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005673",
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
6855,
7554
],
"filename": "mock20.js",
"lineno": 201,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005686",
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
6898,
6918
],
"filename": "mock20.js",
"lineno": 202,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005692",
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
6955,
7529
],
"filename": "mock20.js",
"lineno": 204,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005703",
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
7029,
7052
],
"filename": "mock20.js",
"lineno": 205,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005716",
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
7066,
7120
],
"filename": "mock20.js",
"lineno": 206,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005722",
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
7134,
7189
],
"filename": "mock20.js",
"lineno": 207,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005730",
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
7203,
7259
],
"filename": "mock20.js",
"lineno": 208,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005737",
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
7563,
7764
],
"filename": "mock20.js",
"lineno": 221,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005768",
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
7669,
7699
],
"filename": "mock20.js",
"lineno": 223,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005785",
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
7773,
8325
],
"filename": "mock20.js",
"lineno": 228,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005803",
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
7823,
7835
],
"filename": "mock20.js",
"lineno": 229,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005809",
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
7850,
7853
],
"filename": "mock20.js",
"lineno": 230,
"columnno": 13,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005814",
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
7883,
7910
],
"filename": "mock20.js",
"lineno": 231,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005819",
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
7970,
8014
],
"filename": "mock20.js",
"lineno": 233,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005835",
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
8026,
8073
],
"filename": "mock20.js",
"lineno": 234,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005841",
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
8085,
8126
],
"filename": "mock20.js",
"lineno": 235,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005847",
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
8138,
8169
],
"filename": "mock20.js",
"lineno": 236,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005853",
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
8181,
8228
],
"filename": "mock20.js",
"lineno": 237,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005859",
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
8234,
8300
],
"filename": "mock20.js",
"lineno": 238,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005868",
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
8257,
8263
],
"filename": "mock20.js",
"lineno": 239,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005873",
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
8271,
8275
],
"filename": "mock20.js",
"lineno": 240,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005875",
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
8283,
8293
],
"filename": "mock20.js",
"lineno": 241,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005877",
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
8334,
8719
],
"filename": "mock20.js",
"lineno": 247,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005882",
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
8479,
8507
],
"filename": "mock20.js",
"lineno": 249,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005899",
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
8494,
8505
],
"filename": "mock20.js",
"lineno": 249,
"columnno": 23,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005902",
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
8552,
8598
],
"filename": "mock20.js",
"lineno": 251,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005909",
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
8602,
8656
],
"filename": "mock20.js",
"lineno": 252,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005915",
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
8660,
8694
],
"filename": "mock20.js",
"lineno": 253,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005923",
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
8721,
8749
],
"filename": "mock20.js",
"lineno": 256,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005932",
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
8757,
8785
],
"filename": "mock20.js",
"lineno": 257,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005938",
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
8787,
8817
],
"filename": "mock20.js",
"lineno": 258,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005947",
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
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005955",
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
34,
64
],
"filename": "mockScaffold.js",
"lineno": 2,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005967",
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
66,
98
],
"filename": "mockScaffold.js",
"lineno": 3,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005979",
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
100,
130
],
"filename": "mockScaffold.js",
"lineno": 4,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005991",
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
118,
119
],
"filename": "mockScaffold.js",
"lineno": 4,
"columnno": 18,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100005996",
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
221,
728
],
"filename": "parse_cascade.js",
"lineno": 7,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006003",
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
737,
1972
],
"filename": "parse_cascade.js",
"lineno": 18,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006052",
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
944,
1006
],
"filename": "parse_cascade.js",
"lineno": 21,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006086",
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
1080,
1155
],
"filename": "parse_cascade.js",
"lineno": 22,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006107",
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
1200,
1947
],
"filename": "parse_cascade.js",
"lineno": 24,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006138",
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
1981,
2085
],
"filename": "parse_cascade.js",
"lineno": 39,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006212",
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
2094,
2459
],
"filename": "parse_cascade.js",
"lineno": 43,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006229",
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
2148,
2181
],
"filename": "parse_cascade.js",
"lineno": 44,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006238",
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
2218,
2261
],
"filename": "parse_cascade.js",
"lineno": 46,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006257",
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
2267,
2452
],
"filename": "parse_cascade.js",
"lineno": 47,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006271",
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
2468,
2674
],
"filename": "parse_cascade.js",
"lineno": 58,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006313",
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
"comment": "/**\n * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.\n * @namespace Sheetworkers.Sheetworker Aliases\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 3,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"comment": "/**\n * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.\n * @memberof Sheetworker Aliases\n * @name setSectionOrder\n * @param {string} section - The name of the section, with or without `repeating_`\n * @param {string[]} order - Array of ids describing the desired order of the section.\n * @returns {void}\n * @example\n * //Set the order of a repeating_weapon section\n * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);\n * //Can also specify the section name without the repeating_ prefix\n * k.setSectionOrder('equipment',['id1','id2','id3']);\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 7,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"//Set the order of a repeating_weapon section\nk.setSectionOrder('repeating_equipment',['id1','id2','id3']);\n//Can also specify the section name without the repeating_ prefix\nk.setSectionOrder('equipment',['id1','id2','id3']);"
],
"scope": "static",
"longname": "Sheetworker Aliases.setSectionOrder",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
1349,
1486
],
"filename": "sheetworker_aliases.js",
"lineno": 20,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006355",
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
1399,
1445
],
"filename": "sheetworker_aliases.js",
"lineno": 21,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006362",
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
1488,
1529
],
"filename": "sheetworker_aliases.js",
"lineno": 24,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006376",
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
"comment": "/**\n * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.\n * @memberof Sheetworker Aliases\n * @name removeRepeatingRow\n * @param {string} row - The row id to be removed\n * @param {attributesProxy} attributes - The attribute values currently in memory\n * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.\n * @returns {void}\n * @example\n * //Remove a repeating Row\n * k.getAllAttrs({\n *  callback:(attributes,sections)=>{\n *    const rowID = sections.repeating_equipment[0];\n *    k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\n *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.\n *    console.log(attributes[`repeating_equipment_${rowID}_name`]); // => undefined\n *  }\n * })\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 26,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"//Remove a repeating Row\nk.getAllAttrs({\n callback:(attributes,sections)=>{\n   const rowID = sections.repeating_equipment[0];\n   k.removeRepeatingRow(`repeating_equipment_${rowID}`,attributes,sections);\n   console.log(sections.repeating_equipment); // => rowID no longer exists in the array.\n   console.log(attributes[`repeating_equipment_${rowID}_name`]); // => undefined\n }\n})"
],
"scope": "static",
"longname": "Sheetworker Aliases.removeRepeatingRow",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
2557,
2926
],
"filename": "sheetworker_aliases.js",
"lineno": 45,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006382",
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
2834,
2896
],
"filename": "sheetworker_aliases.js",
"lineno": 53,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006432",
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
2928,
2975
],
"filename": "sheetworker_aliases.js",
"lineno": 56,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006452",
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
"comment": "/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.\n * @memberof Sheetworker Aliases\n * @name getAttrs\n * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.\n * @example\n * //Gets the attributes named in props.\n * k.getAttrs({\n *  props:['attribute_1','attribute_2'],\n *  callback:(attributes)=>{\n *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\n *    attributes.attribute_1 = 'new value';\n *    attributes.set();\n *  }\n * })\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 58,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"//Gets the attributes named in props.\nk.getAttrs({\n props:['attribute_1','attribute_2'],\n callback:(attributes)=>{\n   //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:\n   attributes.attribute_1 = 'new value';\n   attributes.set();\n }\n})"
],
"scope": "static",
"longname": "Sheetworker Aliases.getAttrs",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
3944,
4102
],
"filename": "sheetworker_aliases.js",
"lineno": 75,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006458",
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
3966,
3979
],
"filename": "sheetworker_aliases.js",
"lineno": 75,
"columnno": 28,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006462",
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
3980,
3988
],
"filename": "sheetworker_aliases.js",
"lineno": 75,
"columnno": 42,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006466",
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
4031,
4067
],
"filename": "sheetworker_aliases.js",
"lineno": 77,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006477",
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
4104,
4131
],
"filename": "sheetworker_aliases.js",
"lineno": 81,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006487",
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
"comment": "/**\n * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.\n * @memberof Sheetworker Aliases\n * @param {Object} args\n * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.\n * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. \n * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.\n * @example\n * //Get every K-scaffold linked attribute on the sheet\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>{\n *    //Work with the attributes as you please.\n *    attributes.some_attribute = 'a value';\n *    attributes.set();//Apply our change\n *  }\n * })\n */",
"meta": {
"range": [
5492,
5891
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006493",
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
"//Get every K-scaffold linked attribute on the sheet\nk.getAllAttrs({\n callback:(attributes,sections,casc)=>{\n   //Work with the attributes as you please.\n   attributes.some_attribute = 'a value';\n   attributes.set();//Apply our change\n }\n})"
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
5516,
5529
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006497",
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
5530,
5568
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 44,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006501",
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
5569,
5577
],
"filename": "sheetworker_aliases.js",
"lineno": 100,
"columnno": 83,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006505",
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
5691,
5727
],
"filename": "sheetworker_aliases.js",
"lineno": 103,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006528",
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
5783,
5833
],
"filename": "sheetworker_aliases.js",
"lineno": 105,
"columnno": 12,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006539",
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
5893,
5925
],
"filename": "sheetworker_aliases.js",
"lineno": 110,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006553",
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
"comment": "/**\n * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.\n * @memberof Sheetworker Aliases\n * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.\n * @param {string} sectionDetails.section - The full name of the repeating section including the `repeating_` prefix.\n * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section\n * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.\n * @example\n * // Get some section details\n * const sectionDetails = {\n *  {section:'repeating_equipment',fields:['name','weight','cost']},\n *  {section:'repeating_weapon',fields:['name','attack','damage']}\n * };\n * k.getSections(sectionDetails,(attributeNames,sections)=>{\n *  console.log(attributeNames);// => Array containing all row specific attribute names\n *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\n * })\n */",
"meta": {
"range": [
7327,
8010
],
"filename": "sheetworker_aliases.js",
"lineno": 130,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006559",
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
"// Get some section details\nconst sectionDetails = {\n {section:'repeating_equipment',fields:['name','weight','cost']},\n {section:'repeating_weapon',fields:['name','attack','damage']}\n};\nk.getSections(sectionDetails,(attributeNames,sections)=>{\n console.log(attributeNames);// => Array containing all row specific attribute names\n console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)\n})"
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
7382,
7418
],
"filename": "sheetworker_aliases.js",
"lineno": 131,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006566",
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
7428,
7927
],
"filename": "sheetworker_aliases.js",
"lineno": 132,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006574",
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
7483,
7505
],
"filename": "sheetworker_aliases.js",
"lineno": 133,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006586",
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
7555,
7585
],
"filename": "sheetworker_aliases.js",
"lineno": 135,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006602",
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
8012,
8044
],
"filename": "sheetworker_aliases.js",
"lineno": 155,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006687",
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
"comment": "/**\n * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.\n * @memberof Sheetworker Aliases\n * @param {object} obj - The object containting attributes to set\n * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.\n * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.\n * @example\n * //Set some attributes silently\n * k.setAttrs({attribute_1:'new value'})\n * //Set some attributes and triggers listeners\n * k.setAttrs({attribute_1:'new value',true})\n * //Set some attributes and call a callback function\n * k.setAttrs({attribute_1:'new value'},null,()=>{\n *  //Do something after the attribute is set\n * })\n */",
"meta": {
"range": [
9006,
9091
],
"filename": "sheetworker_aliases.js",
"lineno": 175,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006693",
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
"//Set some attributes silently\nk.setAttrs({attribute_1:'new value'})\n//Set some attributes and triggers listeners\nk.setAttrs({attribute_1:'new value',true})\n//Set some attributes and call a callback function\nk.setAttrs({attribute_1:'new value'},null,()=>{\n //Do something after the attribute is set\n})"
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
9064,
9077
],
"filename": "sheetworker_aliases.js",
"lineno": 176,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006707",
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
9093,
9114
],
"filename": "sheetworker_aliases.js",
"lineno": 178,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006712",
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
9123,
9342
],
"filename": "sheetworker_aliases.js",
"lineno": 180,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006718",
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
9195,
9216
],
"filename": "sheetworker_aliases.js",
"lineno": 182,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006732",
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
9224,
9247
],
"filename": "sheetworker_aliases.js",
"lineno": 184,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006739",
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
9255,
9294
],
"filename": "sheetworker_aliases.js",
"lineno": 185,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006744",
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
"comment": "/**\n * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.\n * @memberof Sheetworker Aliases\n * @name generateRowID\n * @param {sectionObj} sections\n * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.\n * @returns {string} - The created ID\n * @example\n * k.getAllAttrs({\n *  callback:(attributes,sections,casc)=>{\n *    //Create a new row ID\n *    const rowID = k.generateRowID('repeating_equipment',sections);\n *    console.log(rowID);// => -p8rg908ug0suzz\n *    //Create a custom row ID\n *    const customID = k.generateRowID('repeating_equipment',sections,'custom');\n *    console.log(customID);// => -custom98uadj89kj\n *  }\n * });\n */",
"meta": {
"filename": "sheetworker_aliases.js",
"lineno": 190,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"k.getAllAttrs({\n callback:(attributes,sections,casc)=>{\n   //Create a new row ID\n   const rowID = k.generateRowID('repeating_equipment',sections);\n   console.log(rowID);// => -p8rg908ug0suzz\n   //Create a custom row ID\n   const customID = k.generateRowID('repeating_equipment',sections,'custom');\n   console.log(customID);// => -custom98uadj89kj\n }\n});"
],
"scope": "static",
"longname": "Sheetworker Aliases.generateRowID",
"kind": "member"
},
{
"comment": "",
"meta": {
"range": [
10186,
10529
],
"filename": "sheetworker_aliases.js",
"lineno": 209,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006767",
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
10248,
10323
],
"filename": "sheetworker_aliases.js",
"lineno": 210,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006775",
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
10327,
10414
],
"filename": "sheetworker_aliases.js",
"lineno": 213,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006785",
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
10418,
10461
],
"filename": "sheetworker_aliases.js",
"lineno": 216,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006799",
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
10531,
10568
],
"filename": "sheetworker_aliases.js",
"lineno": 220,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006824",
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
"comment": "/**\n * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.\n * @namespace Sheetworkers.Utilities\n * @alias Utilities\n */",
"meta": {
"filename": "utility.js",
"lineno": 3,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
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
"comment": "/**\n * Replaces problem characters to use a string as a regex\n * @memberof Utilities\n * @param {string} text - The text to replace characters in\n * @returns {string}\n * @example\n * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\n * console.log(textForRegex);// => \"\\.some thing\\[with characters\\]\"\n */",
"meta": {
"range": [
672,
787
],
"filename": "utility.js",
"lineno": 17,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006832",
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
"const textForRegex = k.sanitizeForRegex('.some thing[with characters]');\nconsole.log(textForRegex);// => \"\\.some thing\\[with characters\\]\""
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
789,
831
],
"filename": "utility.js",
"lineno": 20,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006845",
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
"comment": "/**\n * Converts a value to a number, it\\'s default value, or `0` if no default value passed.\n * @memberof Utilities\n * @param {string|number} val - Value to convert to a number\n * @param {number} def - The default value, uses 0 if not passed\n * @returns {number|undefined}\n * @example\n * const num = k.value('100');\n * console.log(num);// => 100\n */",
"meta": {
"range": [
1190,
1430
],
"filename": "utility.js",
"lineno": 32,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006851",
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
"const num = k.value('100');\nconsole.log(num);// => 100"
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
1225,
1242
],
"filename": "utility.js",
"lineno": 33,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006858",
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
1432,
1452
],
"filename": "utility.js",
"lineno": 41,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006889",
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
"comment": "/**\n * Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.\n * @memberof Utilities\n * @param {string} string - The string to parse\n * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute\n * @returns {string[]}\n * @example\n * //Extract info from a full repeating name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\n * console.log(section);// => \"repeating_equipment\"\n * console.log(rowID);// => \"-8908asdflkjZlkj23\"\n * console.log(attrName);// => \"name\"\n * \n * //Extract info from just a row name\n * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\n * console.log(section);// => \"repeating_equipment\"\n * console.log(rowID);// => \"-8908asdflkjZlkj23\"\n * console.log(attrName);// => undefined\n */",
"meta": {
"range": [
2438,
2575
],
"filename": "utility.js",
"lineno": 62,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006895",
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
"//Extract info from a full repeating name\nconst [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');\nconsole.log(section);// => \"repeating_equipment\"\nconsole.log(rowID);// => \"-8908asdflkjZlkj23\"\nconsole.log(attrName);// => \"name\"\n\n//Extract info from just a row name\nconst [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');\nconsole.log(section);// => \"repeating_equipment\"\nconsole.log(rowID);// => \"-8908asdflkjZlkj23\"\nconsole.log(attrName);// => undefined"
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
2480,
2539
],
"filename": "utility.js",
"lineno": 63,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006901",
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
2577,
2617
],
"filename": "utility.js",
"lineno": 67,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006916",
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
"comment": "/**\n * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n * \n * Aliases: `k.parseClickTrigger`\n * @memberof Utilities\n * @param {string} string The triggerName property of the\n * @returns {array} - For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`\n * @returns {string[]}\n * @example\n * //Parse a non repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\n * console.log(section);// => undefined\n * console.log(rowID);// => undefined\n * console.log(attrName);// => \"some-button\"\n * \n * //Parse a repeating trigger\n * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// => \"repeating_attack\"\n * console.log(rowID);// => \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// => \"some-button\"\n * \n * //Parse a repeating name\n * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\n * console.log(section);// => \"repeating_attack\"\n * console.log(rowID);// => \"-234lkjpd8fu8usadf\"\n * console.log(attrName);// => \"some-button\"\n */",
"meta": {
"range": [
3974,
4136
],
"filename": "utility.js",
"lineno": 96,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006922",
"name": "parseTriggerName",
"type": "FunctionExpression"
},
"vars": {
"match": "Utilities.parseTriggerName~match"
}
},
"description": "Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n\nAliases: `k.parseClickTrigger`",
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
"//Parse a non repeating trigger\nconst [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');\nconsole.log(section);// => undefined\nconsole.log(rowID);// => undefined\nconsole.log(attrName);// => \"some-button\"\n\n//Parse a repeating trigger\nconst [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');\nconsole.log(section);// => \"repeating_attack\"\nconsole.log(rowID);// => \"-234lkjpd8fu8usadf\"\nconsole.log(attrName);// => \"some-button\"\n\n//Parse a repeating name\nconst [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');\nconsole.log(section);// => \"repeating_attack\"\nconsole.log(rowID);// => \"-234lkjpd8fu8usadf\"\nconsole.log(attrName);// => \"some-button\""
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
4017,
4100
],
"filename": "utility.js",
"lineno": 97,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006928",
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
4138,
4180
],
"filename": "utility.js",
"lineno": 101,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006948",
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
4188,
4224
],
"filename": "utility.js",
"lineno": 102,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006954",
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
4226,
4270
],
"filename": "utility.js",
"lineno": 103,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006958",
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
"comment": "/**\n * Parses out the attribute name from the htmlattribute name.\n * @memberof Utilities\n * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).\n * @returns {string}\n * @example\n * //Parse a name\n * const attrName = k.parseHtmlName('attr_attribute_1');\n * console.log(attrName);// => \"attribute_1\"\n */",
"meta": {
"range": [
4657,
4782
],
"filename": "utility.js",
"lineno": 115,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006964",
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
"//Parse a name\nconst attrName = k.parseHtmlName('attr_attribute_1');\nconsole.log(attrName);// => \"attribute_1\""
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
4697,
4743
],
"filename": "utility.js",
"lineno": 116,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006970",
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
4784,
4820
],
"filename": "utility.js",
"lineno": 120,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006987",
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
"comment": "/**\n * Capitalize each word in a string\n * @memberof Utilities\n * @param {string} string - The string to capitalize\n * @returns {string}\n * @example\n * const capitalized = k.capitalize('a word');\n * console.log(capitalized);// => \"A Word\"\n */",
"meta": {
"range": [
5072,
5183
],
"filename": "utility.js",
"lineno": 131,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100006993",
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
"const capitalized = k.capitalize('a word');\nconsole.log(capitalized);// => \"A Word\""
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
5185,
5215
],
"filename": "utility.js",
"lineno": 134,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007011",
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
"comment": "/**\n * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).\n * @memberof Utilities\n * @param {string} query - The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.\n * @returns {Promise} - Resolves to the selected value from the roll query\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\n *  console.log(queryResult);//=> \"Option 1\" or \"Option 2\" depending on what the user selects\n * \n *  //Get free form input from the user\n *  const freeResult = await extractQueryResult('Prompt Text Here');\n *  consoel.log(freeResult);// => Whatever the user entered\n * }\n */",
"meta": {
"range": [
6235,
6503
],
"filename": "utility.js",
"lineno": 152,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007017",
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
"const rollFunction = async function(){\n //Get the result of a choose from list query\n const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');\n console.log(queryResult);//=> \"Option 1\" or \"Option 2\" depending on what the user selects\n\n //Get free form input from the user\n const freeResult = await extractQueryResult('Prompt Text Here');\n consoel.log(freeResult);// => Whatever the user entered\n}"
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
6323,
6392
],
"filename": "utility.js",
"lineno": 154,
"columnno": 5,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007027",
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
6505,
6551
],
"filename": "utility.js",
"lineno": 158,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007056",
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
"comment": "/**\n * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.\n * @memberof Utilities\n * @param {string|number} [value] - The value to return. Optional.\n * @returns {Promise} - Resolves to the value passed to the function\n * @example\n * const rollFunction = async function(){\n *  //Get the result of a choose from list query\n *  const queryResult = await pseudoQuery('a value');\n *  console.log(queryResult);//=> \"a value\"\n * }\n */",
"meta": {
"range": [
7348,
7599
],
"filename": "utility.js",
"lineno": 172,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007062",
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
"const rollFunction = async function(){\n //Get the result of a choose from list query\n const queryResult = await pseudoQuery('a value');\n console.log(queryResult);//=> \"a value\"\n}"
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
7422,
7488
],
"filename": "utility.js",
"lineno": 174,
"columnno": 5,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007072",
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
7601,
7633
],
"filename": "utility.js",
"lineno": 178,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007101",
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
"comment": "/**\n * An alias for console.log.\n * @memberof Utilities\n * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.\n */",
"meta": {
"range": [
8013,
8516
],
"filename": "utility.js",
"lineno": 185,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007107",
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
8518,
8534
],
"filename": "utility.js",
"lineno": 199,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007205",
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
"comment": "/**\n * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.\n * @memberof Utilities\n * @param {any} msg - 'See {@link k.log}\n * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.\n * @returns {void}\n */",
"meta": {
"range": [
8956,
9624
],
"filename": "utility.js",
"lineno": 208,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007211",
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
9626,
9646
],
"filename": "utility.js",
"lineno": 224,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007334",
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
"comment": "/**\n * Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.\n * @memberof Utilities\n * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.\n * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.\n */",
"meta": {
"range": [
10035,
10317
],
"filename": "utility.js",
"lineno": 232,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007340",
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
10131,
10225
],
"filename": "utility.js",
"lineno": 234,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007359",
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
10319,
10355
],
"filename": "utility.js",
"lineno": 238,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007391",
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
"comment": "/**\n * Orders a single ID array.\n * @memberof Utilities\n * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.\n * @param {string[]} IDs - Array of IDs to be ordered.\n */",
"meta": {
"range": [
10563,
10714
],
"filename": "utility.js",
"lineno": 246,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007397",
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
10716,
10750
],
"filename": "utility.js",
"lineno": 251,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007433",
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
"comment": "/**\n * Splits a comma delimited string into an array\n * @memberof Utilities\n * @param {string} string - The string to split.\n * @returns {array} - The string segments of the comma delimited list.\n */",
"meta": {
"range": [
10959,
11042
],
"filename": "utility.js",
"lineno": 259,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007439",
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
11044,
11074
],
"filename": "utility.js",
"lineno": 262,
"columnno": 0,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007456",
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
11182,
11807
],
"filename": "utility.js",
"lineno": 265,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007462",
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
11191,
11310
],
"filename": "utility.js",
"lineno": 266,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007465",
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
11206,
11219
],
"filename": "utility.js",
"lineno": 267,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007467",
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
11227,
11241
],
"filename": "utility.js",
"lineno": 268,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007469",
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
11249,
11263
],
"filename": "utility.js",
"lineno": 269,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007471",
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
11271,
11284
],
"filename": "utility.js",
"lineno": 270,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007473",
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
11292,
11305
],
"filename": "utility.js",
"lineno": 271,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007475",
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
11314,
11445
],
"filename": "utility.js",
"lineno": 273,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007477",
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
11449,
11805
],
"filename": "utility.js",
"lineno": 278,
"columnno": 2,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007503",
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
11478,
11607
],
"filename": "utility.js",
"lineno": 279,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007508",
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
"comment": "/**\n * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.\n * @function\n * @param {string|object|any[]} data - The data that you want to Base64 encode\n * @returns {string} - The encoded data\n * @memberof! Utilities\n */",
"meta": {
"range": [
12095,
12113
],
"filename": "utility.js",
"lineno": 301,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007557",
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
"comment": "/**\n * Decodes Base64 encoded strings that were created by the K-scaffold\n * @function\n * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.\n * @returns {string|object|any[]}\n * @memberof! Utilities\n */",
"meta": {
"range": [
12456,
12478
],
"filename": "utility.js",
"lineno": 309,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007563",
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
12503,
12509
],
"filename": "utility.js",
"lineno": 311,
"columnno": 22,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007575",
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
12510,
12518
],
"filename": "utility.js",
"lineno": 311,
"columnno": 29,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/scripts",
"code": {
"id": "astnode100007577",
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
"comment": "/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof Sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */",
"meta": {
"range": [
586,
1239
],
"filename": "tabs.js",
"lineno": 7,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007582",
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
611,
618
],
"filename": "tabs.js",
"lineno": 7,
"columnno": 31,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007586",
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
620,
630
],
"filename": "tabs.js",
"lineno": 7,
"columnno": 40,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007588",
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
1086,
1138
],
"filename": "tabs.js",
"lineno": 16,
"columnno": 8,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007656",
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
1193,
1232
],
"filename": "tabs.js",
"lineno": 18,
"columnno": 4,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007678",
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
1257,
1267
],
"filename": "tabs.js",
"lineno": 22,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007689",
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
"comment": "/**\n * Sets persistent tabs to their last active state\n * @memberof Sheetworkers\n * @param {object} attributes - The attribute values of the character\n */",
"meta": {
"range": [
1434,
1701
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 6,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007692",
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
1457,
1464
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 29,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007696",
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
1465,
1475
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 37,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007698",
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
1476,
1484
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 48,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007700",
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
1485,
1489
],
"filename": "tabs.js",
"lineno": 29,
"columnno": 57,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007702",
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
1596,
1639
],
"filename": "tabs.js",
"lineno": 32,
"columnno": 10,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007720",
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
1613,
1638
],
"filename": "tabs.js",
"lineno": 32,
"columnno": 27,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007723",
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
1657,
1678
],
"filename": "tabs.js",
"lineno": 33,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007731",
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
1680,
1690
],
"filename": "tabs.js",
"lineno": 33,
"columnno": 39,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007733",
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
1719,
1729
],
"filename": "tabs.js",
"lineno": 36,
"columnno": 16,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007739",
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
1733,
1748
],
"filename": "tabs.js",
"lineno": 36,
"columnno": 30,
"path": "/home/quentin/dev/jdr.d/k-scaffold/lib/tabs",
"code": {
"id": "astnode100007742",
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
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/errorHead.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/getTemplate.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/index.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/kStatus.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/locals/index.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/outputPug.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/outputTests.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/processSheet.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/renderPug.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/renderSASS.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/resolvePaths.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/render/watch.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/accessSheet.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/attribute_proxy.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/kvariables.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/listeners.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/mock20.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/mockScaffold.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/parse_cascade.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/sheetworker_aliases.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/scripts/utility.js",
"/home/quentin/dev/jdr.d/k-scaffold/lib/tabs/tabs.js"
]
}
]
;