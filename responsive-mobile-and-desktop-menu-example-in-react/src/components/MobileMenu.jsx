import { MultilevelMenu } from "react-multilevel-menu";

export default function MobileMenu() {
  const list = [
   
    {
      label: "Stay in home",
      faIcon: "fas fa-chevron-down",
      
      items: [
        {
          label: "Overview",
          faIcon: "fas fa-chevron-down",
          items: [
            {
              label: "Overview Details ",
              button: "Learn more",
              faIcon: "fas fa-allergies"
             
            }
           
          ]
        },
        {
          label: "Corona Virus related",
          faIcon: "fas fa-chevron-down",
          items: [
            {
              label: "Program & information",
              faIcon: "fas fa-chevron-down",
             
              items: [
                {
                  label: "Program & information"
                  
                }
              ]
            },
            {
              label: "Forbearance/Deferral",
              faIcon: "fas fa-chevron-down"
            },
            {
              label: "End of Forbearance Options",
              faIcon: "fas fa-chevron-down"
            },
            {
              label: "State & Local Assistance",
              faIcon: "fas fa-chevron-down"
            }
          ]
        },

        {
          label: "Loan Modification ",
          faIcon: "fas fa-chevron-down"
          
        }
      ]
    },
    {
      label: "Leave House",
      faIcon: "fas fa-chevron-down",
      items: [
        {
          label: "House",
          faIcon: "fas fa-chevron-down"
        },
        {
          label: "Persons",
          faIcon: "fas fa-chevron-down"
         
        }
      ]
    },
    {
      label: "Document checklist",
      faIcon: "fas fa-chevron-down",
      
      onSelected: function () {
        console.log("Item 3");
      }
    },
    {
      label: "My Loan status",
      faIcon: "fas fa-chevron-down",
  
      onSelected: function () {
        console.log("Item 3");
      }
    },
    {
      label: "Support",
      faIcon: "fas fa-chevron-down",
    
      onSelected: function () {
        console.log("Item 3");
      }
    }
  ];

  const selectedItem = (event) => {
    console.log(event);
  };

  const config = {
    paddingAtStart: true,
    classname: "my-custom-class",
    listBackgroundColor: `white`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true
    
  };

  return (
    <MultilevelMenu
      list={list}
      configuration={config}
      selectedListItem={selectedItem}
      selectedLabel={selectedItem}
    />
  );
}
