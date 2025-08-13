import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="home">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi possimus
        itaque laudantium earum quas, repellat esse sapiente molestias incidunt
        assumenda officia magnam, aspernatur odit enim sint at repellendus eos?
        Explicabo assumenda veritatis quia accusantium deserunt suscipit enim
        maxime. Commodi laudantium voluptate maiores eveniet deleniti, vero
        molestiae blanditiis cum velit, odit fuga vitae autem doloribus quo illo
        deserunt eligendi suscipit totam voluptas praesentium aut reprehenderit
        placeat maxime ullam! Nemo molestiae nesciunt, vel sed quam ea?
        Voluptatibus porro libero molestias, pariatur ipsam modi, similique ex
        quibusdam odit quia odio asperiores quas? Dolor quo architecto, aut
        incidunt sint labore ipsum provident nihil fugiat dolores cumque
        molestias vero, nobis laborum accusantium minima harum iusto iure ea
        voluptatibus deserunt laboriosam accusamus itaque repellat. Vel,
        expedita alias exercitationem aliquid illum vero porro, sequi odio
        itaque recusandae provident ad commodi consequatur ut odit rerum! Omnis,
        fugit? Debitis dolorum accusantium deserunt? Nulla ab velit quasi vero,
        cumque rem distinctio eos repellat ipsum placeat eaque hic impedit
        dolores? Possimus quibusdam magni enim, aperiam assumenda ad. Architecto
        iste in consequuntur nam! Pariatur veniam itaque explicabo, eligendi
        nostrum provident similique ex dignissimos, maiores, quia assumenda
        optio. Sunt hic non est rerum repellendus, perferendis repellat deserunt
        facilis dolor nam error obcaecati. Odio dignissimos fuga tempora enim
        aspernatur sunt quos temporibus doloribus itaque rem, voluptatem numquam
        blanditiis accusantium magni earum provident, ipsa repudiandae delectus
        cumque dolorum atque pariatur alias. Maiores possimus suscipit explicabo
        iste sint consectetur sequi vitae illum blanditiis dolorum asperiores
        magnam laborum commodi necessitatibus officiis unde debitis adipisci
        voluptatibus minus fuga incidunt ad mollitia, deserunt quidem. Ullam
        similique aliquid obcaecati. Labore iure, laudantium ducimus rem cumque
        quia ad consectetur molestiae placeat, incidunt maxime saepe, blanditiis
        delectus fugit architecto quo ipsam quos nesciunt sint aspernatur!
        Explicabo blanditiis officiis inventore aperiam provident quasi nisi
        iure illum ipsum accusamus consectetur cupiditate, quaerat dolorum earum
        maiores fugit placeat dolores, rem esse eos error magni! Repellat
        dolorem dolore harum cupiditate! Illum ipsa vero obcaecati quaerat
        maiores cumque eius fuga nihil a sint tempora beatae enim alias,
        incidunt aliquam non odit distinctio repellat! Nihil possimus architecto
        ipsum. Odit, harum. Deserunt dignissimos dicta non corporis ut. Quos
        esse officia quis explicabo delectus mollitia amet ad omnis ex dolore,
        ipsum voluptatibus blanditiis, qui voluptatum debitis consectetur id
        eveniet ut officiis obcaecati, quidem illo error! Incidunt deserunt
        aspernatur, rem doloremque nulla autem sapiente corrupti quae hic quidem
        nostrum voluptate natus, tempora error possimus, cum alias provident
        quasi vero! Aliquid, voluptatibus voluptates. Minima eveniet incidunt
        dignissimos sunt perferendis veniam temporibus et consectetur optio
      </p>
      <button onClick={() => nav("/Services")}>services</button>
    </div>
  );
}
