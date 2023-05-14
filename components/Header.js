export default function Header() {
    return (
      <>
        <ul>
            <li className="menuItem name">Papingo</li>
            <li className="menuItem login">Get started</li>
        </ul>

        <style jsx>{`
            ul { 
              list-style-type: none;
              margin: 0;
              padding: 0;
              overflow: hidden;
              background-color: #79A9D1;
            }

            .menuItem { 
              display: block;
              color: white;
              text-align: center;
              padding: 14px 16px;
              text-decoration: none;
            }

            li { 
              padding: 0px 12px;
            }
            
            .name { 
              float: left; 
            }
          
            .about {
                float: right;
            }
          
            .login { 
                float: right;
            }
        `}</style>
        </>
      );
}

