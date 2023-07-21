import Guitar from "./guitar";

export default function ListGuitars({ guitars }) {
  
  return (
    <>
      {guitars?.length && (
        <div className="grid">
          {guitars?.map(guitar => (
            <Guitar
              key={guitar?.id}
              guitar={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}
