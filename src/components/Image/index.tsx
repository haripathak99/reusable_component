interface Iprops {
    source: string,
    width: any,
    height: number,
    alt: string
}

const Image = ({source, width, height, alt}: Iprops) => {
  return (
    
        <img src={source} width={width} height={height} alt={alt} />
    
  )
}

export default Image