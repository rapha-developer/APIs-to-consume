
import PokeTimelineItem from './components/item/PokeTimelineItem';
import styles from './style.module.css'
function PokeTimeline(props) {
    const timeline = {
        url: props?.url || '',
        name: props?.name || 'Not found name',
        attributes: props?.attributes || []
    }
    const timeline__items = timeline.attributes.map((attributeItem, key) => {
		return (
            <PokeTimelineItem 
                key={key}
                label={attributeItem.label}
                content={attributeItem.content}
            />
		);
	});
	return (
		<div className={styles.timelines}>
			{timeline__items}
			<span className={styles.vertical__line}></span>
			<div className={styles.pokeSingle__sticker}>
				<div className={styles.sticker__wrapperBackground}>
					<img
						src={timeline.url}
						alt={timeline.name}
						className={styles.pokeSingle__photo}
					/>
				</div>
			</div>
		</div>
	);
}
export default PokeTimeline;
