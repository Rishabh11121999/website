import "./Header.css";

const MegaMenu = ({ title, items }) => {
  return (
    <div className="mega-menu">

      <div className="mega-menu-header">
        <h4>{title}</h4>
      </div>

      <div className="mega-menu-grid">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.link}
              className="mega-menu-item"
            >
              <div className="mega-menu-icon">
                <Icon />
              </div>

              <div className="mega-menu-text">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          );
        })}

      </div>

    </div>
  );
};

export default MegaMenu;