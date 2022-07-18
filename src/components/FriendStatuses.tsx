import StatusItem from "./StatusItem";

function FriendStatuses(): JSX.Element {
  return (
    <section>
      <h2>friend's status</h2>
      <a href="#">add more friends</a>
      <ol>
        <StatusItem
          username={"jack"}
          content={"wondering when Mer is going to show up"}
          timeAgo={{ n: 5, unit: "minutes" }}
        />
        <StatusItem
          username={"Dom"}
          content={"who's johnny, he says"}
          emoji={"⭐"}
          timeAgo={{ n: 15, unit: "minutes" }}
        />
        <StatusItem
          username={"ev"}
          content={"so excited about new odeo ideas"}
          emoji={"⭐"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"Tony Stubblebine"}
          content={"thinking about polyphasic sleep"}
          emoji={"◻️"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"drx"}
          content={"tchatting in gmail w/Jack"}
          emoji={"⭐"}
          timeAgo={{ n: 31, unit: "minutes" }}
        />
        <StatusItem
          username={"biz"}
          content={"having some coffee"}
          emoji={"⭐"}
          timeAgo={{ n: 36, unit: "minutes" }}
        />
        <StatusItem
          username={"Courtney"}
          content={"multi-tasking audio debug audio coding"}
          emoji={"⭐"}
          timeAgo={{ n: 9, unit: "hours" }}
        />
        <StatusItem
          username={"Jack"}
          content={
            "antasizing about jack drawing naked people mmmmmmmmmmmmm..... naked people."
          }
          emoji={"◻️"}
          timeAgo={{ n: 21, unit: "hours" }}
        />
        <StatusItem
          username={"noah"}
          content={"Oh crap, I think I might be getting that f'in cold"}
          emoji={"⭐"}
          timeAgo={{ n: 21, unit: "hours" }}
        />
        <StatusItem
          username={"asruge"}
          content={"put some rss on my mp3"}
          emoji={"⭐"}
          timeAgo={{ n: 22, unit: "hours" }}
        />
        <StatusItem
          username={"crystal"}
          content={"in the musicals"}
          emoji={"⭐"}
          timeAgo={{ n: 1, unit: "days" }}
        />
        <li>
          ⭐ <a href="#">crystal</a>: in the musicals <small>1 day ago</small>
        </li>
        <li>
          ◻️ <a href="#">Tim Roberts</a>: setting up my mac mini
          <small>1 day ago</small>
        </li>
        <li>
          ◻️ <a href="#">4153738157</a>: just setting up my twttr
          <small>1 day ago</small>
        </li>
      </ol>
    </section>
  );
}

export default FriendStatuses;
