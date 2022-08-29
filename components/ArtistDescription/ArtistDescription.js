import { Text } from '@zoralabs/zord'
import Image from 'next/image'

const ArtistDescription = () => {
  return (
    <>
      <Text variant="display-md" mb="x8" align="center">
        What is this?
      </Text>
      <Text>
        Since April of 2021, I’ve written a series of songs in anticipation of The Merge.
        All of these songs have already been tokenized and sold as 1/1 NFTs. Now, I’ve
        collected these songs and bundled them into a single token. It’s an NFT album
        called....
      </Text>

      <Image
        height={750}
        width={750}
        alt="the merge"
        src="https://nftstorage.link/ipfs/bafybeicug5uor525svgcxsy4axaoainjfa34fng3qhkj7ud2ykka6ffoua"
      />

      <Text variant="display-md" mb="x8" align="center">
        When is the sale?
      </Text>
      <Text>
        The Merge album is an open edition, and the time-window is governed on chain by
        the TTD leading into The Merge. When we are ~48hrs away from TTD, the album will
        go on sale, and will remain available for 48hrs after The Merge.
      </Text>

      <Text variant="display-md" mb="x8" align="center">
        How much?
      </Text>
      <Text>
        The price changes when The Merge happens. Pre Merge price is .05875 Post Merge
        price will be determined by the block number at which The Merge occurs. It’ll be
        around double pre-Merge price.{' '}
      </Text>

      <Text align="center">All primary and secondary sales are split like this:</Text>
      <ul>
        <li>
          <Text>1/4 to the original holders of the songs</Text>
        </li>
        <li>
          <Text>1/4 to the All Core Dev team who made The Merge happen</Text>
        </li>
        <li>
          <Text>1/2 to SongaDAO</Text>
        </li>
      </ul>
      <Text>
        Using the Liquid Splits technology pioneered by SongCamp and implemented by
        0xSplits, the $ from any sales of the 1/1s will follow the NFT to any new holder.
      </Text>
    </>
  )
}

export default ArtistDescription
