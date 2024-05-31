document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const flexDirection = document.getElementById('flex-direction');
    const flexWrap = document.getElementById('flex-wrap');
    const justifyContent = document.getElementById('justify-content');
    const alignItems = document.getElementById('align-items');
    const alignContent = document.getElementById('align-content');
    const flexGrow = document.getElementById('flex-grow');
    const flexShrink = document.getElementById('flex-shrink');
    const flexBasis = document.getElementById('flex-basis');
    const alignSelf = document.getElementById('align-self');
    const items = document.querySelectorAll('.item');
  
    function applyFlexProperties() {
      container.style.flexDirection = flexDirection.value;
      container.style.flexWrap = flexWrap.value;
      container.style.justifyContent = justifyContent.value;
      container.style.alignItems = alignItems.value;
      container.style.alignContent = alignContent.value;
      
      items.forEach(item => {
        item.style.flexGrow = flexGrow.value;
        item.style.flexShrink = flexShrink.value;
        item.style.flexBasis = flexBasis.value;
        item.style.alignSelf = alignSelf.value;
      });
    }
  
    [flexDirection, flexWrap, justifyContent, alignItems, alignContent, flexGrow, flexShrink, flexBasis, alignSelf].forEach(control => {
      control.addEventListener('change', applyFlexProperties);
      control.addEventListener('input', applyFlexProperties); // For number inputs
    });
  
    // Apply initial flex properties
    applyFlexProperties();
  });
  
