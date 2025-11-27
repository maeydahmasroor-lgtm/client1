import Marquee from "react-fast-marquee";

export default function CustomMarquee() {
  return (
    <div className="text-white py-4" style={{backgroundColor:"#101b72"}}>
      <Marquee gradient={false} speed={50}>
        <div className="flex space-x-12 text-lg font-medium text-white">
          <span>Your Text 1 Here</span>
          <span>Your Text 2 Here</span>
          <span>Your Text 3 Here</span>
          <span>Your Text 4 Here</span>
          <span>Your Text 5 Here</span>
          <span>Your Text 6 Here</span>
          <span>Your Text 7 Here</span>
          <span>Your Text 8 Here</span>
          <span>Your Text 9 Here</span>
          <span>Your Text 10 Here</span>
        </div>
      </Marquee>
    </div>
  );
}