interface Props {
	color?: string;
	size?: number;
}

export const Logo = ({ color = "#0B5D3B", size }: Props) => (
	<div className="display--flex">
		<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: size, height: "auto" }}>
			<circle cx="256" cy="256" r="256" fill={color} />
			<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="Georgia, serif" font-size="240" font-weight="bold" fill="#FFFFFF">
				AM
			</text>
		</svg>
	</div>
);
