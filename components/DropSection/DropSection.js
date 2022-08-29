import { Box, Well, Text, Paragraph, SpinnerOG } from '@zoralabs/zord'
import { MintStatus } from '@components/MintStatus'
import ArtistDescription from '@components/ArtistDescription'
import { maxWidth, border } from 'styles/styles.css'

const DropSection = ({ collection }) => {
  return (
    <Box className={maxWidth} p="x4">
      <Box mt="x8" mx="auto" style={{ maxWidth: 560 }}>
        <Well className={border} p="x6">
          <Box>
            {collection != null ? (
              <>
                <MintStatus collection={collection} />
              </>
            ) : (
              <Paragraph align="center" mt="x8">
                <SpinnerOG />
              </Paragraph>
            )}
          </Box>
        </Well>
      </Box>
      <ArtistDescription />
    </Box>
  )
}

export default DropSection
